import * as React from "react";
import styles from "./styles";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  DeviceEventEmitter,
} from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useEffect } from "react/cjs/react.development";
import CheckInList from "../../components/CheckInList/CheckInList";
import AsyncStorage from "@react-native-community/async-storage";
import { useState } from "react";
export default function HomeScreen({ navigation }) {
  const [list, setList] = useState();

  const setDataCheckIn = () => {
    AsyncStorage.getItem("CHECKIN", (err, data) => {
      if (data) {
        setList(JSON.parse(data));
      }
    });
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setDataCheckIn();
      getNewDay();
    });
    DeviceEventEmitter.addListener("REFRESH_DATA", (response) => {
      setTimeout(() => {
        setDataCheckIn();
      }, 500);
    });
    return unsubscribe;
  }, [navigation]);
  const [newDay, setnewDay] = useState();
  const [newThu, setnewThu] = useState();
  const getNewDay = () => {
    var today = new Date();
    var date = today.getDate() + "/" + (today.getMonth() + 1);
    setnewDay(date);
    var current_day = today.getDay();
    switch (current_day) {
      case 0:
        setnewThu("Chủ nhật");
        break;
      case 1:
        setnewThu("Thứ hai");
        break;
      case 2:
        setnewThu("Thứ ba");
        break;
      case 3:
        setnewThu("Thứ tư");
        break;
      case 4:
        setnewThu("Thứ năm");
        break;
      case 5:
        setnewThu("Thứ sáu");
        break;
      case 6:
        setnewThu("Thứ bảy");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="TRANG CHỦ"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Lịch sử chấm công</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1, fontWeight: "bold" }}>Ngày</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>Thứ</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>CheckIn</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>CheckOut</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>WorkTime</Text>
          </View>
          <View>
            <FlatList
              data={list}
              renderItem={({ item }) => (
                <CheckInList checkInList={item}></CheckInList>
              )}
              keyExtractor={(item, idx) => `${idx}`}
            ></FlatList>
          </View>
        </View>

        <View style={styles.divider}>
          <Text style={styles.dividerText}>Chấm công hôm nay</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1 }}>{newDay}</Text>
            <Text style={{ flex: 1 }}>{newThu}</Text>
            <Text style={{ flex: 1 }}></Text>
            <Text style={{ flex: 1 }}></Text>
            <Text style={{ flex: 1 }}></Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={{
                ...styles.buttonCheckIn,
                backgroundColor: "green",
                borderColor: "green",
              }}
              onPress={() => {
                navigation.navigate("HomeDetail");
              }}
            >
              <Text style={styles.buttonText}>Check In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={{
                ...styles.buttonCheckIn,
                backgroundColor: "red",
                borderColor: "red",
              }}
              onPress={() => {
                navigation.navigate("HomeDetail");
              }}
            >
              <Text style={styles.buttonText}>Check Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
