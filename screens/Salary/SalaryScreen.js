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
import SalaryList from "../../components/SalaryList/SalaryList";
import AsyncStorage from "@react-native-community/async-storage";
import { useState } from "react";
export default function SalaryScreen({ navigation }) {
  const [list, setList] = useState();

  const setDataSalary = () => {
    AsyncStorage.getItem("SALARY", (err, data) => {
      if (data) {
        setList(JSON.parse(data));
      }
    });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setDataSalary();
    });
    DeviceEventEmitter.addListener("REFRESH_DATA", (response) => {
      setTimeout(() => {
        setDataSalary();
      }, 500);
    });
    return unsubscribe;
  }, [navigation]);

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
        <View style={{ paddingBottom: 35 }}>
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
