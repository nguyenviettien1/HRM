import * as React from "react";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import { useEffect } from "react/cjs/react.development";
import { store } from "../../utils/store";
import AsyncStorage from "@react-native-community/async-storage";
export default function ProfileHeader() {
  const [user, setUser] = useState();

  AsyncStorage.getItem("USERINFO", (err, data) => {
    // getInfo();
    if (data) {
      setUser(JSON.parse(data));
    }
  });

  return (
    <View style={styles.userInfoSection}>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Avatar.Image
          source={require("../../assets/male.png")}
          size={50}
        ></Avatar.Image>
        <View style={{ flexDirection: "column", marginLeft: 15 }}>
          {user && <Title style={styles.title}>{user.name}</Title>}
          {user && <Caption style={styles.caption}>{user.email}</Caption>}
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
