import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Alert,
  DeviceEventEmitter,
} from "react-native";
import { useState } from "react";
import styles from "./styles";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import { store } from "../../utils/store";
export default function LoginScreen({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const onSignIn = () => {
    Keyboard.dismiss();
    if (userName == "") {
      Alert.alert("Bạn chưa nhập tài khoản");
      return;
    } else if (password == "") {
      Alert.alert("Bạn chưa nhập mật khẩu");
      return;
    }
    fetch("http://192.168.1.12:8080/apiHRM/taoToken.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson.status) {
          setToken(responseJson.token);
          getInfo(responseJson.token);
          getWork(responseJson.token);
          getSalary(responseJson.token);
          store.setAccessToken(responseJson.token);
          DeviceEventEmitter.emit("REFRESH_DATA");
        } else {
          Alert.alert(responseJson.message);
        }
      });
  };

  const getInfo = async (token) => {
    if (token && token != "") {
      fetch("http://192.168.1.12:8080/apiHRM/checkToken.php?token=" + token, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          // console.log("user info", responseJson);
          store.setUserInfo(JSON.stringify(responseJson));
        });
    } else {
      Alert.alert("ERROR SET AsyncStorage");
    }
  };

  const getWork = async (token) => {
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
          store.setWork(JSON.stringify(responseJson));
        });
    } else {
      Alert.alert("ERROR SET AsyncStorage");
    }
  };

  const getSalary = async (token) => {
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
          store.setSalary(JSON.stringify(responseJson));
        });
    } else {
      Alert.alert("ERROR SET AsyncStorage");
    }
  };

  useEffect(() => {
    if (token && token != "") {
      navigation.navigate("MenuTab");
    }
  }, [token]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>A</Text>
          <Text style={styles.hiText}>P</Text>
          <Text style={styles.hiText}>A</Text>
          <Text style={styles.hiText}>T</Text>
          <Text style={styles.hiTextE}>E</Text>
          <Text style={styles.hiText}>K</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formInput}>
            <FontAwesome name="user" style={styles.iconLock} />
            <TextInput
              style={styles.inputText}
              onChangeText={setUserName}
              placeholder="Tài khoản"
              placeholderTextColor="#929292"
              value={userName}
            />
          </View>
          <View style={styles.formInput}>
            <FontAwesome5 name="lock" style={styles.iconLock} />
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              onChangeText={setPassword}
              placeholder="Mật khẩu"
              placeholderTextColor="#929292"
              value={password}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => {
              onSignIn();
            }}
          >
            <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
          <TouchableOpacity>
            <Text style={styles.userText}>QUÊN MẬT KHẨU</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.userText}>LIÊN HỆ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
