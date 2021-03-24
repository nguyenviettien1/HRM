import * as React from "react";
import styles from "./styles";
import { Text, View, SafeAreaView } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
export default function SupportScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="HỖ TRỢ" navigation={navigation}></CustomHeader>
      <View style={styles.infoUser}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.viewInfo}>
            <Entypo
              name="old-phone"
              size={12}
              color="green"
              style={{ marginTop: 4 }}
            ></Entypo>
            <Text style={styles.age}>Hotline:</Text>
          </View>
          <Text>1900-969670</Text>
        </View>
      </View>
      <View style={styles.infoUser}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.viewInfo}>
            <MaterialCommunityIcons
              name="email"
              size={12}
              color="green"
              style={{ marginTop: 4 }}
            ></MaterialCommunityIcons>
            <Text style={styles.age}>Email:</Text>
          </View>
          <Text>apatek@gmail.com</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
