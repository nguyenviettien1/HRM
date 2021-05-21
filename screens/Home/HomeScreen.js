import * as React from "react";
import styles from "./styles";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  DeviceEventEmitter,
  Alert,
  ActivityIndicator,
} from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useEffect } from "react/cjs/react.development";
import CheckInList from "../../components/CheckInList/CheckInList";
import AsyncStorage from "@react-native-community/async-storage";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { useState } from "react";
import Toast from "react-native-simple-toast";
export default function HomeScreen({ navigation }) {
  const [list, setList] = useState([]);
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const askForPermission = async () => {
    const permissionResult = await Permissions.askAsync(Permissions.CAMERA);
    if (permissionResult.status !== "granted") {
      Alert.alert("no permissions to access camera!", [{ text: "ok" }]);
      return false;
    }
    return true;
  };

  const takeImageCheckIn = async (x) => {
    const hasPermission = await askForPermission();
    if (!hasPermission) {
      return;
    } else {
      let image = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [3, 3],
        quality: 0,
        base64: true,
      });
      if (!image.cancelled) {
        fetch("http://192.168.1.12:8000/recog", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: image.base64.toString(),
          }),
        })
          .then((response) => response.text())
          .then((responseJson) => {
            if (responseJson === x.id) {
              Toast.show("Nhận diện thành công " + `${x.name}`);
              postCheckIn();
            } else {
              Toast.show("Nhận diện id khác với tài khoản");
            }
          })
          .catch((err) => {
            Toast.show("Nhận diện thất bại");
          });
      }
    }
  };

  const takeImageCheckOut = async (x) => {
    const hasPermission = await askForPermission();
    if (!hasPermission) {
      return;
    } else {
      let image = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [3, 3],
        quality: 0,
        base64: true,
      });
      if (!image.cancelled) {
        fetch("http://192.168.1.12:8000/recog", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: image.base64.toString(),
          }),
        })
          .then((response) => response.text())
          .then((responseJson) => {
            if (responseJson === x.id) {
              Toast.show("Nhận diện thành công " + `${x.name}`);
              postCheckOut();
            } else {
              Toast.show("Nhận diện id khác với tài khoản");
            }
          })
          .catch((err) => {
            Toast.show("Nhận diện thất bại");
          });
      }
    }
  };

  const setDataToken = () => {
    AsyncStorage.getItem("ACCESSTOKEN", (err, data) => {
      if (data) {
        setToken(data);
        setCheckInToday(data);
        setDataCheckIn(data);
      }
    });

    AsyncStorage.getItem("USERINFO", (err, data) => {
      if (data) {
        setUser(JSON.parse(data));
      }
    });
  };

  const setDataCheckIn = (token) => {
    if (token && token != "") {
      fetch("http://192.168.1.12:8080/apiHRM/chamcong.php?token=" + token, {
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
      Alert.alert("ERROR SET DATA CHECKIN");
    }
  };

  const setCheckInToday = (token) => {
    if (token && token != "") {
      fetch(
        "http://192.168.1.12:8080/apiHRM/chamcong/getCheckin.php?token=" +
          token,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == true) {
            setCheckIn(responseJson.chamcong.checkInAt);
            if (responseJson.chamcong.checkOutAt != null) {
              setCheckOut(responseJson.chamcong.checkOutAt);
              setWorkT(responseJson.chamcong.workTime);
            }
          } else {
            setCheckIn("");
            setCheckOut("");
            setWorkT("");
          }
        });
    } else {
      Alert.alert("Không có token");
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setDataToken();
      getNewDay();
    });
    DeviceEventEmitter.addListener("REFRESH_DATA", (response) => {
      setTimeout(() => {
        setDataToken();
      }, 500);
    });
    return unsubscribe;
  }, [navigation, token]);

  const getTimestamp = (x) => {
    var date = new Date(x * 1000);
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();
    var seconds = date.getSeconds().toString();
    if (hours < 10) {
      var hours = "0" + hours;
    }
    if (minutes < 10) {
      var minutes = "0" + minutes;
    }
    if (seconds < 10) {
      var seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  };

  const getWorkTime = (x) => {
    var hours = Math.floor(x / 3600);
    var minutes = Math.floor((x - hours * 3600) / 60);
    var seconds = x - hours * 3600 - minutes * 60;
    if (hours < 10) {
      var hours = "0" + hours;
    }
    if (minutes < 10) {
      var minutes = "0" + minutes;
    }
    if (seconds < 10) {
      var seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  };

  const [newDay, setnewDay] = useState();
  const [newThu, setnewThu] = useState();
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [workT, setWorkT] = useState();
  const getNewDay = () => {
    var today = new Date();
    var _month = today.getMonth() + 1;
    var _dateT = today.getDate();
    if (today.getMonth() + 1 < 10) {
      _month = "0" + (today.getMonth() + 1);
    }
    if (today.getDate() < 10) {
      _dateT = "0" + today.getDate();
    }
    var date = _dateT + "/" + _month;
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

  const postCheckIn = async () => {
    if (token && token != "") {
      fetch(
        "http://192.168.1.12:8080/apiHRM/chamcong/postCheckin.php?token=" +
          token,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == true) {
            fetch(
              "http://192.168.1.12:8080/apiHRM/chamcong/getCheckin.php?token=" +
                token,
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Credentials": true,
                },
              }
            )
              .then((response) => response.json())
              .then((responseJson) => {
                if (responseJson.status == true) {
                  setCheckIn(responseJson.chamcong.checkInAt);
                }
              });
          }
        });
    } else {
      Alert.alert("ERROR SET AsyncStorage");
    }
  };

  const postCheckOut = async () => {
    if (token && token != "") {
      fetch(
        "http://192.168.1.12:8080/apiHRM/chamcong/postCheckout.php?token=" +
          token,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status == true) {
            fetch(
              "http://192.168.1.12:8080/apiHRM/chamcong/getCheckin.php?token=" +
                token,
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Credentials": true,
                },
              }
            )
              .then((response) => response.json())
              .then((responseJson) => {
                if (responseJson.status == true) {
                  setCheckOut(responseJson.chamcong.checkOutAt);
                  setWorkT(responseJson.chamcong.workTime);
                }
              });
          }
        });
    } else {
      Alert.alert("ERROR SET AsyncStorage");
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
          <View style={{ minHeight: 270 }}>
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

            {checkIn ? (
              <Text style={{ flex: 1 }}>{getTimestamp(checkIn)}</Text>
            ) : (
              <Text style={{ flex: 1 }}>_________</Text>
            )}

            {checkOut ? (
              <Text style={{ flex: 1 }}>{getTimestamp(checkOut)}</Text>
            ) : (
              <Text style={{ flex: 1 }}>_________</Text>
            )}
            {workT ? (
              <Text style={{ flex: 1 }}>{getWorkTime(workT)}</Text>
            ) : (
              <Text style={{ flex: 1 }}>_________</Text>
            )}
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={{
                ...styles.buttonCheckIn,
                backgroundColor: checkIn ? "#ccc" : "green",
              }}
              onPress={() => {
                if (checkIn) return;
                takeImageCheckIn(user);
              }}
            >
              <Text style={styles.buttonText}>Check In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={{
                ...styles.buttonCheckIn,
                backgroundColor: checkOut ? "#ccc" : "red",
              }}
              onPress={() => {
                if (checkOut) return;
                takeImageCheckOut(user);
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
