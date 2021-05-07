import * as React from "react";
import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { useEffect } from "react/cjs/react.development";
import NotificationList from "../../components/NotificationList/NotificationList";
import { useState } from "react";

export default function NotificationScreen({ navigation }) {
  const [list, setList] = useState("");
  useEffect(() => {
    fetch("http://192.168.1.12:8080/apiHRM/thongbao.php", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setList(responseJson);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="THÔNG BÁO"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <View style={{ height: "100%", paddingBottom: 35 }}>
        {list.length === 0 && (
          <ActivityIndicator
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
            size="large"
            color="#0a384f"
          />
        )}
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <NotificationList notiList={item}></NotificationList>
          )}
          keyExtractor={(item) => `${item.id}`}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
