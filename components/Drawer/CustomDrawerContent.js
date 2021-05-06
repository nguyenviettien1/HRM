import * as React from "react";
import styles from "./styles";
import { Text, View, DeviceEventEmitter } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useState } from "react";
import { TouchableRipple, Switch, Drawer } from "react-native-paper";
import { store } from "../../utils/store";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
export default function CustomDrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <ProfileHeader></ProfileHeader>
          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              icon="account-outline"
              label="Thông tin cá nhân"
              onPress={() => {
                DeviceEventEmitter.emit("SET_DATA_INFO");
                props.navigation.navigate("ProfileStack");
              }}
            ></Drawer.Item>
            <Drawer.Item
              icon="tools"
              label="Cài đặt"
              onPress={() => {
                props.navigation.navigate("SettingsStack");
              }}
            ></Drawer.Item>

            <Drawer.Item
              icon="account-check-outline"
              label="Hỗ trợ"
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
            ></Drawer.Item>
            <Drawer.Item
              icon="file-account"
              label="Thông tin công ty"
              onPress={() => {
                props.navigation.navigate("InfoCompanyScreen");
              }}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section title="Tùy chỉnh">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Nền tối</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme}></Switch>
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          icon="exit-to-app"
          label="Đăng xuất"
          onPress={() => {
            store.removeAccessToken();
            store.removeUserInfo();
            props.navigation.navigate("LoginScreen");
          }}
        ></Drawer.Item>
      </Drawer.Section>
    </View>
  );
}
