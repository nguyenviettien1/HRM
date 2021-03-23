import * as React from "react";
import styles from "./styles";
import { Drawer } from "react-native-paper";
import { SafeAreaView, ScrollView } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import ProfileHeader from "../../components/ProfileHeader";
export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="CÀI ĐẶT"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <ProfileHeader></ProfileHeader>
      <ScrollView>
        <Drawer.Section style={styles.drawerSection}>
          <Drawer.Item
            icon="account-settings"
            style={{ backgroundColor: "#ccc" }}
            label="Cài đặt"
            onPress={() => {
              navigation.navigate("SettingsDetail");
            }}
          ></Drawer.Item>
          <Drawer.Item
            icon="web-box"
            style={{ backgroundColor: "#ccc" }}
            label="Ngôn ngữ"
            onPress={() => {}}
          ></Drawer.Item>
          <Drawer.Item
            icon="file-code"
            style={{ backgroundColor: "#ccc" }}
            label="Trình tạo mã"
            onPress={() => {}}
          ></Drawer.Item>
          <Drawer.Item
            icon="newspaper-variant-outline"
            style={{ backgroundColor: "#ccc" }}
            label="Trình tiết kiệm dữ liệu"
            onPress={() => {}}
          ></Drawer.Item>
          <Drawer.Item
            icon="chart-line"
            style={{ backgroundColor: "#ccc" }}
            label="Thời gian sử dụng"
            onPress={() => {}}
          ></Drawer.Item>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection} title="THÔNG BÁO">
          <Drawer.Item
            icon="bell-alert-outline"
            label="Cài đặt thông báo"
            onPress={() => {}}
          ></Drawer.Item>
          <Drawer.Item
            icon="message-text"
            label="Nhắn tin văn bản"
            onPress={() => {}}
          ></Drawer.Item>
          <Drawer.Item
            icon="cellphone-message"
            label="Bản xem trước tin nhắn"
            onPress={() => {}}
          ></Drawer.Item>
          <Drawer.Item
            icon="alarm-light-outline"
            label="Thông báo LED"
            onPress={() => {}}
          ></Drawer.Item>
        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection} title="XEM THÊM">
          <Drawer.Item
            icon="television-guide"
            label="Lịch sử Watch"
            onPress={() => {}}
          ></Drawer.Item>
        </Drawer.Section>
      </ScrollView>
    </SafeAreaView>
  );
}
