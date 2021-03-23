import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useState } from "react";
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
  Switch,
  Drawer,
} from "react-native-paper";
export default function CustomDrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../../assets/vietcuong.jpg")}
                size={50}
              ></Avatar.Image>
              <View style={{ flexDirection: "column", marginLeft: 15 }}>
                <Title style={styles.title}>Trần Việt Cường</Title>
                <Caption style={styles.caption}>
                  cuong.tran@lazerback.com
                </Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              icon="account-outline"
              label="Thông tin cá nhân"
              onPress={() => {
                props.navigation.navigate("ProfileUserScreen");
              }}
            ></Drawer.Item>
            <Drawer.Item
              icon="bookmark-outline"
              label="BookMarks"
              onPress={() => {}}
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
          onPress={() => {}}
        ></Drawer.Item>
      </Drawer.Section>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
