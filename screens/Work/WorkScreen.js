import * as React from "react";
import styles from "./styles";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  DeviceEventEmitter,
} from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useEffect } from "react/cjs/react.development";
import WorkList from "../../components/WorkList/WorkList";
import AsyncStorage from "@react-native-community/async-storage";
import { useState } from "react";
export default function WorkScreen({ navigation }) {
  const [list, setList] = useState();
  const [token, setToken] = useState();
  const setDataToken = () => {
    AsyncStorage.getItem("ACCESSTOKEN", (err, data) => {
      if (data) {
        setToken(data);
        setDataWork(data);
      }
    });
  };
  const setDataWork = (token) => {
    if (token && token != "") {
      fetch("http://192.168.1.12:8080/apiHRM/congviec.php?token=" + token, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setList(responseJson);
        });
    } else {
      Alert.alert("ERROR SET AsyncStorage");
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setDataToken();
    });
    DeviceEventEmitter.addListener("REFRESH_DATA", (response) => {
      setTimeout(() => {
        setDataToken();
      }, 500);
    });
    return unsubscribe;
  }, [navigation, token]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="CÔNG VIỆC"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>KPI công việc theo tháng</Text>
        </View>

        <View style={{ paddingBottom: 35 }}>
          <FlatList
            style={{ height: "100%" }}
            data={list}
            renderItem={({ item }) => <WorkList workList={item}></WorkList>}
            keyExtractor={(item, idx) => `${idx}`}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}
