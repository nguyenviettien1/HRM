import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./styles";
export default function NotificationList(props) {
  const { notiList } = props;

  return (
    <View style={styles.contain}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: "data:image/png;base64," + notiList.imageMobile }}
        ></Image>
      </View>
      <View style={styles.noti}>
        <Text style={styles.title}>{notiList.title}</Text>
        <Text>{notiList.content}</Text>
      </View>
    </View>
  );
}
