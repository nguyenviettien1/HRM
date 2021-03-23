import * as React from "react";
import styles from "./styles";
import { Text, View, SafeAreaView } from "react-native";
import CustomHeader from "../../components/CustomHeader";

export default function SalaryScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="QUỸ LƯƠNG"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Lịch sử lương</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row", margin: 8 }}>
            <Text style={{ flex: 1, fontWeight: "bold" }}>Tháng</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>Hệ số</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>Thưởng</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>Phạt</Text>
            <Text style={{ flex: 1, fontWeight: "bold" }}>Bảo hiểm</Text>
          </View>
          <View style={{ backgroundColor: "#F9DFDF", margin: 8 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 1 }}>3</Text>
              <Text style={{ flex: 1 }}>1.5</Text>
              <Text style={{ flex: 1 }}>100.000</Text>
              <Text style={{ flex: 1 }}>300.000</Text>
              <Text style={{ flex: 1 }}>500.000</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text style={{ color: "red", fontWeight: "bold" }}>Tổng:</Text>
              <Text> 10.000.000</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#F9DFDF", margin: 8 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 1 }}>4</Text>
              <Text style={{ flex: 1 }}>1.5</Text>
              <Text style={{ flex: 1 }}>200.000</Text>
              <Text style={{ flex: 1 }}>100.000</Text>
              <Text style={{ flex: 1 }}>500.000</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text style={{ color: "red", fontWeight: "bold" }}>Tổng:</Text>
              <Text> 12.300.000</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#F9DFDF", margin: 8 }}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ flex: 1 }}>5</Text>
              <Text style={{ flex: 1 }}>1.5</Text>
              <Text style={{ flex: 1 }}>200.000</Text>
              <Text style={{ flex: 1 }}>100.000</Text>
              <Text style={{ flex: 1 }}>500.000</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <Text style={{ color: "red", fontWeight: "bold" }}>Tổng:</Text>
              <Text> 12.300.000</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
