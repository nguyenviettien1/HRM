import * as React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";

export default function CustomHeader({ title, isHome, navigation }) {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        height: 70,
        paddingTop: Platform.OS === "android" ? 40 : 0,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 5 }}
              source={require("../assets/menu.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={{ height: 20, width: 20, marginLeft: 5 }}
              source={require("../assets/back.png")}
              resizeMode="contain"
            ></Image>
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}>
          {title}
        </Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
}
