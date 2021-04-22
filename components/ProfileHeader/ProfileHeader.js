import * as React from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Alert, StyleSheet, View } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import AsyncStorage from "@react-native-community/async-storage";
import { store } from "../../utils/store";
export default function ProfileHeader() {
  const [user, setUser] = useState();

  useEffect(() => {
    AsyncStorage.getItem("USERINFO", (err, data) => {
      // getInfo();
      if (data) {
        setUser(JSON.parse(data));
      }
    });
  }, [store.getUserInfo()]);

  return (
    <View style={styles.userInfoSection}>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        {user && (
          <Avatar.Image
            source={{ uri: "data:image/png;base64," + user.avatarMobile }}
            size={50}
          ></Avatar.Image>
        )}
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
