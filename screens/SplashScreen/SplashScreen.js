import * as React from "react";
import { Text, Image, SafeAreaView } from "react-native";
import { useEffect } from "react/cjs/react.development";
import { store } from "../../utils/store";
export default function SplashScreen({ navigation }) {
  const BgrSpl = require("../../assets/bg_spl.jpg");
  useEffect(() => {
    setTimeout(() => {
      checkScreen();
    }, 1500);
  }, []);

  const checkScreen = async () => {
    const accessToken = await store.getAccessToken();
    if (accessToken && accessToken != "") {
      navigation.navigate("MenuTab");
    } else {
      navigation.navigate("LoginScreen");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image source={BgrSpl} style={{ width: "100%", height: "100%" }} />
    </SafeAreaView>
  );
}
