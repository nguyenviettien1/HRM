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

  const setDataWork = () => {
    AsyncStorage.getItem("WORK", (err, data) => {
      if (data) {
        setList(JSON.parse(data));
      }
    });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setDataWork();
    });
    DeviceEventEmitter.addListener("REFRESH_DATA", (response) => {
      setTimeout(() => {
        setDataWork();
      }, 500);
    });
    return unsubscribe;
  }, [navigation]);

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
