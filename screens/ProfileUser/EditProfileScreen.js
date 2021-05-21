import * as React from "react";
import styles from "./styles";
import {
  TextInput,
  View,
  SafeAreaView,
  Image,
  Text,
  Picker,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useEffect } from "react/cjs/react.development";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
export default function EditProfileScreen({ navigation }) {
  const [user, setUser] = useState();
  const [chucVu, setChucVu] = useState([]);
  const [phongBan, setPhongBan] = useState([]);
  const [phongbanValue, setphongBanValue] = useState("1");
  const [chucVuValue, setchucVuValue] = useState("1");
  const [gioiTinhValue, setgioiTinhValue] = useState("1");

  const chucVuForm = () => {
    fetch("http://192.168.1.12:8080/apiHRM/vitri.php", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setChucVu(responseJson);
      });
  };
  const phongBanForm = () => {
    fetch("http://192.168.1.12:8080/apiHRM/phongban.php", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setPhongBan(responseJson);
      });
  };
  const setDataInfo = () => {
    AsyncStorage.getItem("USERINFO", (err, data) => {
      if (data) {
        setUser(JSON.parse(data));
      }
    });
  };

  useEffect(() => {
    setDataInfo();
    chucVuForm();
    phongBanForm();
  }, []);

  useEffect(() => {
    if (user) {
      setphongBanValue(user.departmentID);
      setchucVuValue(user.positionID);
      setgioiTinhValue(user.gender);
    }
  }, [user]);

  const editBAccount = () => {
    Keyboard.dismiss();
    if (
      user.name == "" &&
      user.age == "" &&
      user.address == "" &&
      user.phone == "" &&
      user.email == "" &&
      user.dateOfBirth == ""
    ) {
      Alert.alert("Một số trường bắt buộc chưa được nhập");
      return;
    }
    fetch("http://192.168.1.12:8080/apiHRM/capnhatUser.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson.message);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomHeader
        title="SỬA THÔNG TIN"
        navigation={navigation}
      ></CustomHeader>
      <View style={{ flex: 1, width: "100%" }}>
        {user && (
          <ScrollView>
            <View style={styles.contain}>
              <Image
                source={{ uri: "data:image/png;base64," + user.avatarMobile }}
                style={styles.image}
              ></Image>
              <View style={styles.name}>
                <Text style={styles.title}>{user.name.toUpperCase()}</Text>
                <View>
                  <View style={{ flexDirection: "row", paddingTop: 4 }}>
                    <View style={styles.viewInfo}>
                      <MaterialCommunityIcons
                        name="face"
                        size={12}
                        color="green"
                        style={{ marginTop: 4 }}
                      ></MaterialCommunityIcons>
                      <Text style={styles.age}>Tuổi:</Text>
                    </View>
                    <Text>{user.age}</Text>
                  </View>
                </View>
                <View>
                  <View style={{ flexDirection: "row", paddingTop: 4 }}>
                    <View style={styles.viewInfo}>
                      <MaterialCommunityIcons
                        name="calendar"
                        size={12}
                        color="green"
                        style={{ marginTop: 4 }}
                      ></MaterialCommunityIcons>
                      <Text style={styles.age}>Ngày sinh:</Text>
                    </View>
                    <Text>{user.dateOfBirth}</Text>
                  </View>
                </View>
                <View>
                  <View style={{ flexDirection: "row", paddingTop: 4 }}>
                    <View style={styles.viewInfo}>
                      <FontAwesome
                        name="transgender"
                        size={12}
                        color="green"
                        style={{ marginTop: 4 }}
                      ></FontAwesome>
                      <Text style={styles.age}>Giới tính:</Text>
                    </View>
                    <Text>{user.gender ? "Nam" : "Nữ"}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.divider}>
              <Text style={styles.dividerText}>Sơ yếu lí lịch</Text>
            </View>
            <View style={styles.editInfoName}>
              <Text style={styles.textInfoName}>TÊN:</Text>
              <TextInput
                style={styles.textInput}
                value={user.name}
                onChangeText={(e) => setUser({ ...user, name: e })}
              ></TextInput>
              <View style={{ flexDirection: "row" }}>
                <Text style={[styles.textInfoName, { flex: 3 }]}>TUỔI:</Text>
                <View style={{ flex: 1 }}></View>
                <Text style={[styles.textInfoName, { flex: 10 }]}>
                  NGÀY SINH:
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  style={[styles.textInput, { flex: 3 }]}
                  value={user.age}
                  onChangeText={(e) => setUser({ ...user, age: e })}
                  keyboardType="numeric"
                ></TextInput>
                <View style={{ flex: 1 }}></View>
                <TextInput
                  style={[styles.textInput, { flex: 10 }]}
                  onChangeText={(e) => setUser({ ...user, dateOfBirth: e })}
                  value={user.dateOfBirth}
                ></TextInput>
              </View>
              <Text style={styles.textInfoName}>GIỚI TÍNH:</Text>
              <View style={styles.textInputPicker}>
                <Picker
                  mode="dropdown"
                  selectedValue={gioiTinhValue}
                  onValueChange={(itemValue, itemIndex) =>
                    setUser({ ...user, gender: itemValue })
                  }
                >
                  <Picker.Item label="Nam" value="1" />
                  <Picker.Item label="Nữ" value="0" />
                </Picker>
              </View>
              <Text style={styles.textInfoName}>QUÊ QUÁN:</Text>
              <TextInput
                style={styles.textInput}
                value={user.address}
                onChangeText={(e) => setUser({ ...user, address: e })}
              ></TextInput>
              <Text style={styles.textInfoName}>DÂN TỘC:</Text>
              <TextInput
                style={styles.textInput}
                value={user.ethnicity}
                onChangeText={(e) => setUser({ ...user, ethnicity: e })}
              ></TextInput>
              <Text style={styles.textInfoName}>TÔN GIÁO:</Text>
              <TextInput
                style={styles.textInput}
                value={user.religion}
                onChangeText={(e) => setUser({ ...user, religion: e })}
              ></TextInput>
              <Text style={styles.textInfoName}>HỌC VẤN:</Text>
              <TextInput
                style={styles.textInput}
                value={user.education}
                onChangeText={(e) => setUser({ ...user, education: e })}
              ></TextInput>
            </View>
            <View style={styles.divider}>
              <Text style={styles.dividerText}>Thông tin liên hệ</Text>
            </View>
            <View style={styles.editInfoName}>
              <Text style={styles.textInfoName}>EMAIL:</Text>
              <TextInput
                style={styles.textInput}
                value={user.email}
                onChangeText={(e) => setUser({ ...user, email: e })}
                keyboardType="email-address"
              ></TextInput>
              <Text style={styles.textInfoName}>SỐ ĐIỆN THOẠI:</Text>
              <TextInput
                style={styles.textInput}
                value={user.phone}
                onChangeText={(e) => setUser({ ...user, phone: e })}
                keyboardType="numeric"
              ></TextInput>
            </View>
            <View style={styles.divider}>
              <Text style={styles.dividerText}>Công việc</Text>
            </View>
            <View style={styles.editInfoName}>
              <Text style={styles.textInfoName}>CHỨC VỤ:</Text>
              <View style={styles.textInputPicker}>
                <Picker
                  mode="dropdown"
                  selectedValue={chucVuValue}
                  onValueChange={(itemValue, itemIndex) =>
                    setUser({ ...user, positionID: itemValue })
                  }
                >
                  {chucVu &&
                    chucVu.map((i) => (
                      <Picker.Item
                        key={i.id}
                        label={i.description}
                        value={i.id}
                      ></Picker.Item>
                    ))}
                </Picker>
              </View>
              <Text style={styles.textInfoName}>PHÒNG BAN:</Text>
              <View style={styles.textInputPicker}>
                <Picker
                  mode="dropdown"
                  selectedValue={phongbanValue}
                  onValueChange={(itemValue, itemIndex) =>
                    setUser({ ...user, departmentID: itemValue })
                  }
                >
                  {phongBan &&
                    phongBan.map((i) => (
                      <Picker.Item
                        key={i.id}
                        label={i.description}
                        value={i.id}
                      ></Picker.Item>
                    ))}
                </Picker>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
      <View
        style={{
          height: 50,
          width: "90%",
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
          backgroundColor: "#00FF80",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            editBAccount();
          }}
        >
          <Text style={{ alignContent: "center", fontSize: 20 }}>
            Cập nhật thông tin
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
