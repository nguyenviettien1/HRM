import * as React from "react";

import { View, SafeAreaView, StyleSheet } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { Drawer } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
export default function SettingsScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="CÀI ĐẶT CHI TIẾT"
        navigation={navigation}
      ></CustomHeader>
      <View style={styles.drawerContent}>
        <ProfileHeader></ProfileHeader>
        <ScrollView>
          <Drawer.Section
            style={styles.drawerSection}
            title="CÀI ĐẶT TÀI KHOẢN"
          >
            <Drawer.Item
              icon="account"
              label="Thông tin cá nhân"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="web"
              label="Dịch bài viết"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="finance"
              label="Thanh toán quảng cáo"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="cloud-print-outline"
              label="Facebook Pay"
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection} title="BẢO MẬT">
            <Drawer.Item
              icon="security"
              label="Bảo mật và đăng nhập"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="application"
              label="Ứng dụng và trang web"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="google-controller"
              label="Trò chơi tức thì"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="globe-model"
              label="Tiện ích và tích hợp cho doanh nghiệp"
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection} title="QUYỀN RIÊNG TƯ">
            <Drawer.Item
              icon="account-lock-outline"
              label="Cài đặt quyền riêng tư"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="face-recognition"
              label="Nhận dạng khuôn mặt"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="smart-card-outline"
              label="Trang cá nhân và gắn thẻ"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="newspaper"
              label="Bài viết công khai"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="account-cancel"
              label="Chặn"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="google-maps"
              label="Vị trí"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="account-supervisor-outline"
              label="Trạng thái hoạt động "
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section
            style={styles.drawerSection}
            title="THÔNG TIN CỦA BẠN TRÊN FACEBOOK"
          >
            <Drawer.Item
              icon="account-details-outline"
              label="Truy cập thông tin của bạn"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="notebook-outline"
              label="Nhật ký hoạt động"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="account-arrow-right"
              label="Hoạt động bên ngoài Facebook"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="account-star"
              label="Quyền sở hữu và kiểm soát tài khoản"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="download"
              label="Tải thông tin của bạn xuống"
              onPress={() => {}}
            ></Drawer.Item>
            <Drawer.Item
              icon="file-download"
              label="Chuyển bản sao ảnh hoặc video"
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection} title="QUẢNG CÁO">
            <Drawer.Item
              icon="rotate-orbit"
              label="Tùy chọn quảng cáo"
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection} title="TIN">
            <Drawer.Item
              icon="newspaper-variant-multiple-outline"
              label="Cài đặt tin"
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection} title="LỐI TẮT">
            <Drawer.Item
              icon="pin"
              label="Thanh lối tắt"
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection} title="CÀI ĐẶT BẢNG TIN">
            <Drawer.Item
              icon="newspaper-variant-outline"
              label="Tùy chọn bảng tin"
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
          <Drawer.Section
            style={styles.drawerSection}
            title="FILE PHƯƠNG TIỆN VÀ DANH BẠ"
          >
            <Drawer.Item
              icon="film"
              label="File phương tiện và danh bạ"
              onPress={() => {}}
            ></Drawer.Item>
          </Drawer.Section>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
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

  drawerSection: {
    marginTop: 15,
  },
});
