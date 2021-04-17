import * as React from "react";
import styles from "./styles";
import { Text, View, SafeAreaView, Image, Alert } from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect } from "react/cjs/react.development";
import { store } from "../../utils/store";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
export default function ProfileUserScreen({ navigation }) {
  useEffect(() => {
    //getInfo();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="THÔNG TIN CÁ NHÂN"
        navigation={navigation}
      ></CustomHeader>
      <ScrollView>
        <View style={styles.contain}>
          <Image
            style={styles.image}
            source={require("../../assets/vietcuong.jpg")}
          ></Image>
          <View style={styles.name}>
            <Text style={styles.title}>TRẦN VIỆT CƯỜNG</Text>
            <View>
              <View style={{ flexDirection: "row", paddingTop: 4 }}>
                <View style={styles.viewInfo}>
                  <MaterialCommunityIcons
                    name="face"
                    size={12}
                    color="green"
                    style={{ marginTop: 4 }}
                  ></MaterialCommunityIcons>
                  <Text style={styles.age}>Tuổi:</Text>
                </View>
                <Text>29</Text>
              </View>
            </View>
            <View>
              <View style={{ flexDirection: "row", paddingTop: 4 }}>
                <View style={styles.viewInfo}>
                  <MaterialCommunityIcons
                    name="calendar"
                    size={12}
                    color="green"
                    style={{ marginTop: 4 }}
                  ></MaterialCommunityIcons>
                  <Text style={styles.age}>Ngày sinh:</Text>
                </View>
                <Text>12-5-1992</Text>
              </View>
            </View>
            <View>
              <View style={{ flexDirection: "row", paddingTop: 4 }}>
                <View style={styles.viewInfo}>
                  <FontAwesome
                    name="transgender"
                    size={12}
                    color="green"
                    style={{ marginTop: 4 }}
                  ></FontAwesome>
                  <Text style={styles.age}>Giới tính:</Text>
                </View>
                <Text>Nam</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Sơ yếu lí lịch</Text>
        </View>
        <View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <FontAwesome
                  name="user"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></FontAwesome>
                <Text style={styles.age}>Tên:</Text>
              </View>
              <Text>Trần Việt Cường</Text>
            </View>
          </View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <MaterialCommunityIcons
                  name="face"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></MaterialCommunityIcons>
                <Text style={styles.age}>Tuổi:</Text>
              </View>
              <Text>29</Text>
            </View>
          </View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></MaterialCommunityIcons>
                <Text style={styles.age}>Ngày sinh:</Text>
              </View>
              <Text>12-5-1992</Text>
            </View>
          </View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <FontAwesome
                  name="transgender"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></FontAwesome>
                <Text style={styles.age}>Giới tính:</Text>
              </View>
              <Text>Nam</Text>
            </View>
          </View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <Entypo
                  name="address"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></Entypo>
                <Text style={styles.age}>Quê quán:</Text>
              </View>
              <Text>Cẩm Xuyên, Hà Tĩnh</Text>
            </View>
          </View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <FontAwesome
                  name="street-view"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></FontAwesome>
                <Text style={styles.age}>Dân tộc:</Text>
              </View>
              <Text>Kinh</Text>
            </View>
          </View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <FontAwesome5
                  name="ethernet"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></FontAwesome5>
                <Text style={styles.age}>Tôn giáo:</Text>
              </View>
              <Text>Không</Text>
            </View>
          </View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <MaterialCommunityIcons
                  name="human-male"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></MaterialCommunityIcons>
                <Text style={styles.age}>Học vấn:</Text>
              </View>
              <Text>Đại học</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Thông tin liên hệ</Text>
        </View>
        <View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <FontAwesome
                  name="phone"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></FontAwesome>
                <Text style={styles.age}>Số điện thoại:</Text>
              </View>
              <Text>0987654321</Text>
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
              <Text>cuong.tran@lazerback.com</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider}>
          <Text style={styles.dividerText}>Công việc</Text>
        </View>
        <View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <MaterialIcons
                  name="home-work"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></MaterialIcons>
                <Text style={styles.age}>Phòng ban:</Text>
              </View>
              <Text>Implementation</Text>
            </View>
          </View>
          <View style={styles.infoUser}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.viewInfo}>
                <MaterialIcons
                  name="work"
                  size={12}
                  color="green"
                  style={{ marginTop: 4 }}
                ></MaterialIcons>
                <Text style={styles.age}>Chức vụ:</Text>
              </View>
              <Text>Staff</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
