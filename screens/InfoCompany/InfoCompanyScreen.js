import * as React from "react";
import styles from "./styles";
import { Text, View, SafeAreaView, Image } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { FontAwesome } from "@expo/vector-icons";
export default function InfoCompanyScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="CÔNG TY" navigation={navigation}></CustomHeader>
      <View>
        <View style={{ flexDirection: "row", margin: 10, height: 98 }}>
          <Image
            style={styles.image}
            source={require("../../assets/apatek.jpg")}
          ></Image>
          <View style={styles.name}>
            <Text
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              CÔNG TY CỔ PHẦN APATEK VIỆT NAM
            </Text>
            <Text>Tên quốc tế: APATEK VIETNAM JOINT STOCK COMPANY</Text>
            <Text>Tên viết tắt: APATEK VIETNAM.,JSC</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <View style={styles.viewInfo}>
              <FontAwesome
                name="hashtag"
                size={12}
                color="green"
                style={{ marginTop: 4 }}
              ></FontAwesome>
              <Text
                style={{ paddingLeft: 4, color: "green", fontWeight: "bold" }}
              >
                Mã số thuế:
              </Text>
            </View>
            <Text>0108992582</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <View style={styles.viewInfo}>
              <FontAwesome
                name="map-marker"
                size={12}
                color="green"
                style={{ marginTop: 4 }}
              ></FontAwesome>
              <Text
                style={{ paddingLeft: 4, color: "green", fontWeight: "bold" }}
              >
                Địa chỉ:
              </Text>
            </View>
            <Text style={{ width: 280 }}>
              Số 1, ngõ 10 đường Nguyễn Văn Huyên, Phường Dịch Vọng, Quận Cầu
              Giấy, Thành phố Hà Nội, Việt Nam
            </Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <View style={styles.viewInfo}>
              <FontAwesome
                name="user"
                size={12}
                color="green"
                style={{ marginTop: 4 }}
              ></FontAwesome>
              <Text
                style={{ paddingLeft: 4, color: "green", fontWeight: "bold" }}
              >
                Người đại diện:
              </Text>
            </View>
            <Text>NGUYỄN HỒNG QUÂN</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <View style={styles.viewInfo}>
              <FontAwesome
                name="calendar-o"
                size={12}
                color="green"
                style={{ marginTop: 4 }}
              ></FontAwesome>
              <Text
                style={{ paddingLeft: 4, color: "green", fontWeight: "bold" }}
              >
                Hoạt động:
              </Text>
            </View>
            <Text>2019-11-18</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <View style={styles.viewInfo}>
              <FontAwesome
                name="users"
                size={12}
                color="green"
                style={{ marginTop: 4 }}
              ></FontAwesome>
              <Text
                style={{ paddingLeft: 4, color: "green", fontWeight: "bold" }}
              >
                Quản lý bởi:
              </Text>
            </View>
            <Text>Chi cục Thuế Quận Cầu Giấy</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <View style={styles.viewInfo}>
              <FontAwesome
                name="building"
                size={12}
                color="green"
                style={{ marginTop: 4 }}
              ></FontAwesome>
              <Text
                style={{ paddingLeft: 4, color: "green", fontWeight: "bold" }}
              >
                Loại hình DN:
              </Text>
            </View>
            <Text>Công ty cổ phần ngoài NN</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <View style={styles.viewInfo}>
              <FontAwesome
                name="info-circle"
                size={12}
                color="green"
                style={{ marginTop: 4 }}
              ></FontAwesome>
              <Text
                style={{ paddingLeft: 4, color: "green", fontWeight: "bold" }}
              >
                Tình trạng:
              </Text>
            </View>
            <Text>Đang hoạt động (đã được cấp GCN ĐKT)</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
