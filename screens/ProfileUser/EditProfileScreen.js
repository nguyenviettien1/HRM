import * as React from "react";
import styles from "./styles";
import {
  TextInput,
  View,
  SafeAreaView,
  Image,
  DeviceEventEmitter,
  Text,
} from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { useEffect } from "react/cjs/react.development";
import { store } from "../../utils/store";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
export default function EditProfileScreen({ navigation }) {
  const [user, setUser] = useState();

  const setDataInfo = () => {
    AsyncStorage.getItem("USERINFO", (err, data) => {
      if (data) {
        setUser(JSON.parse(data));
      }
    });
  };

  useEffect(() => {
    setDataInfo();
  }, []);

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
            <View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <FontAwesome
                      name="user"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></FontAwesome>
                    <Text style={styles.age}>Tên:</Text>
                  </View>
                  <TextInput value={user.name}></TextInput>
                </View>
              </View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <MaterialCommunityIcons
                      name="face"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></MaterialCommunityIcons>
                    <Text style={styles.age}>Tuổi:</Text>
                  </View>
                  <TextInput value={user.age}></TextInput>
                </View>
              </View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <MaterialCommunityIcons
                      name="calendar"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></MaterialCommunityIcons>
                    <Text style={styles.age}>Ngày sinh:</Text>
                  </View>
                  <TextInput value={user.dateOfBirth}></TextInput>
                </View>
              </View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
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
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <Entypo
                      name="address"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></Entypo>
                    <Text style={styles.age}>Quê quán:</Text>
                  </View>
                  <TextInput value={user.address}></TextInput>
                </View>
              </View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <FontAwesome
                      name="street-view"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></FontAwesome>
                    <Text style={styles.age}>Dân tộc:</Text>
                  </View>
                  <TextInput value={user.ethnicity}></TextInput>
                </View>
              </View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <FontAwesome5
                      name="ethernet"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></FontAwesome5>
                    <Text style={styles.age}>Tôn giáo:</Text>
                  </View>
                  <TextInput value={user.religion}></TextInput>
                </View>
              </View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <MaterialCommunityIcons
                      name="human-male"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></MaterialCommunityIcons>
                    <Text style={styles.age}>Học vấn:</Text>
                  </View>
                  <TextInput value={user.education}></TextInput>
                </View>
              </View>
            </View>
            <View style={styles.divider}>
              <Text style={styles.dividerText}>Thông tin liên hệ</Text>
            </View>
            <View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <FontAwesome
                      name="phone"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></FontAwesome>
                    <Text style={styles.age}>Số điện thoại:</Text>
                  </View>
                  <TextInput value={user.phone}></TextInput>
                </View>
              </View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <MaterialCommunityIcons
                      name="email"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></MaterialCommunityIcons>
                    <Text style={styles.age}>Email:</Text>
                  </View>
                  <TextInput value={user.email}></TextInput>
                </View>
              </View>
            </View>
            <View style={styles.divider}>
              <Text style={styles.dividerText}>Công việc</Text>
            </View>
            <View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <MaterialIcons
                      name="home-work"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></MaterialIcons>
                    <Text style={styles.age}>Phòng ban:</Text>
                  </View>
                  <Text>{user.department}</Text>
                </View>
              </View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <MaterialIcons
                      name="work"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></MaterialIcons>
                    <Text style={styles.age}>Chức vụ:</Text>
                  </View>
                  <Text>{user.position}</Text>
                </View>
              </View>
              <View style={styles.infoUser}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewInfo}>
                    <MaterialIcons
                      name="work"
                      size={12}
                      color="green"
                      style={{ marginTop: 4 }}
                    ></MaterialIcons>
                    <Text style={styles.age}>Ngày làm việc:</Text>
                  </View>
                  <Text>{user.dayToWork}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
