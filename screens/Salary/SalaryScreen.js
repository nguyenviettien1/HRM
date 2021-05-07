import * as React from "react";
import styles from "./styles";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  DeviceEventEmitter,
  ActivityIndicator,
} from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useEffect } from "react/cjs/react.development";
import SalaryList from "../../components/SalaryList/SalaryList";
import AsyncStorage from "@react-native-community/async-storage";
import { useState } from "react";
export default function SalaryScreen({ navigation }) {
  const [list, setList] = useState([]);
  const [token, setToken] = useState();
  const setDataToken = () => {
    AsyncStorage.getItem("ACCESSTOKEN", (err, data) => {
      if (data) {
        setToken(data);
        setDataSalary(data);
      }
    });
  };

  const setDataSalary = (token) => {
    if (token && token != "") {
      fetch("http://192.168.1.12:8080/apiHRM/luong.php?token=" + token, {
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
        title="QUỸ LƯƠNG"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Công thức tính lương</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
            Lương =
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "400", color: "green" }}>
            (Lương CB + Lương làm việc + Lương thâm niên) * Hệ số lương + Lương
            chế độ
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Lịch sử lương</Text>
        </View>
        <View style={{ height: "100%", paddingBottom: 35 }}>
          {list.length === 0 && (
            <ActivityIndicator
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
              size="large"
              color="#0a384f"
            />
          )}
          <FlatList
            style={{ height: "100%" }}
            data={list}
            renderItem={({ item }) => (
              <SalaryList salaryList={item}></SalaryList>
            )}
            keyExtractor={(item, idx) => `${idx}`}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}
