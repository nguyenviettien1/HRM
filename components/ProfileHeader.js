import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
export default function ProfileHeader() {
  return (
    <View style={styles.userInfoSection}>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Avatar.Image
          source={require("../assets/vietcuong.jpg")}
          size={50}
        ></Avatar.Image>
        <View style={{ flexDirection: "column", marginLeft: 15 }}>
          <Title style={styles.title}>Trần Việt Cường</Title>
          <Caption style={styles.caption}>cuong.tran@lazerback.com</Caption>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
