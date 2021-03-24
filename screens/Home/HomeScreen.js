import * as React from "react";
import styles from "./styles";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="TRANG CHỦ"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Lịch sử chấm công</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1, fontWeight: "bold" }}>Thứ</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>CheckIn</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>CheckOut</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>WorkDays</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1 }}>Monday</Text>
            <Text style={{ flex: 1 }}>08:03:42</Text>
            <Text style={{ flex: 1 }}>17:54:52</Text>
            <Text style={{ flex: 1 }}>1</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1 }}>Tuesday</Text>
            <Text style={{ flex: 1 }}>08:33:42</Text>
            <Text style={{ flex: 1 }}>17:51:52</Text>
            <Text style={{ flex: 1 }}>1</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1 }}>Wednesday</Text>
            <Text style={{ flex: 1 }}>08:04:42</Text>
            <Text style={{ flex: 1 }}>17:14:52</Text>
            <Text style={{ flex: 1 }}>1</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1 }}>Thursday</Text>
            <Text style={{ flex: 1 }}>08:08:42</Text>
            <Text style={{ flex: 1 }}>17:44:58</Text>
            <Text style={{ flex: 1 }}>1</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1 }}>Friday</Text>
            <Text style={{ flex: 1 }}>08:03:42</Text>
            <Text style={{ flex: 1 }}>17:54:52</Text>
            <Text style={{ flex: 1 }}>1</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1 }}>Saturnday</Text>
            <Text style={{ flex: 1 }}>08:03:42</Text>
            <Text style={{ flex: 1 }}>17:54:52</Text>
            <Text style={{ flex: 1 }}>1</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1 }}>Sunday</Text>
            <Text style={{ flex: 1 }}></Text>
            <Text style={{ flex: 1 }}></Text>
            <Text style={{ flex: 1 }}>0</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.buttonGreen}
              onPress={() => {
                navigation.navigate("HomeDetail");
              }}
            >
              <Text style={styles.buttonText}>Check In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonView}>
            <TouchableOpacity
              style={styles.buttonRed}
              onPress={() => {
                navigation.navigate("HomeDetail");
              }}
            >
              <Text style={styles.buttonText}>Check Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
