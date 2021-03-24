import * as React from "react";
import styles from "./styles";
import { Text, View, SafeAreaView, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomHeader from "../../components/CustomHeader/CustomHeader";

export default function NotificationScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="THÔNG BÁO"
        isHome={true}
        navigation={navigation}
      ></CustomHeader>
      <ScrollView>
        <View style={styles.contain}>
          <Image
            style={styles.image}
            source={require("../../assets/dev.png")}
          ></Image>
          <View style={styles.noti}>
            <Text style={styles.title}>THÔNG BÁO CHO DEV</Text>
            <Text>
              Dự án mới đang được triển khai trong giai đoạn Go-Line đề nghị
              toàn bộ dev dừng hết mọi hoạt động ít ưu tiên hơn để tập trung vào
              dự án mới này JSC
            </Text>
          </View>
        </View>
        <View style={styles.contain}>
          <Image
            style={styles.image}
            source={require("../../assets/supporter.png")}
          ></Image>
          <View style={styles.noti}>
            <Text style={styles.title}>THÔNG BÁO CHO ĐỘI HỖ TRỢ</Text>
            <Text>
              Dự án mới đang được triển khai trong giai đoạn Go-Line đề nghị
              phòng hỗ trợ tích cực hơn
            </Text>
          </View>
        </View>
        <View style={styles.contain}>
          <Image
            style={styles.image}
            source={require("../../assets/growth.png")}
          ></Image>
          <View style={styles.noti}>
            <Text style={styles.title}>DOANH SỐ TĂNG</Text>
            <Text>
              Dưới sự cố gắng của tất cả mọi người, dự án LJK đã hoàn thành xuất
              sắc mục tiêu đề ra
            </Text>
          </View>
        </View>
        <View style={styles.contain}>
          <Image
            style={styles.image}
            source={require("../../assets/salary-grow.png")}
          ></Image>
          <View style={styles.noti}>
            <Text style={styles.title}>THÔNG BÁO TĂNG LƯƠNG</Text>
            <Text>
              Một số bạn đã thực sự cố gắng trong giai đoạn trước sẽ được đề
              nghị tăng lương theo thỏa thuận lúc 14h30 ngày 14-5-2021
            </Text>
          </View>
        </View>
        <View style={styles.contain}>
          <Image
            style={styles.image}
            source={require("../../assets/teambuilding.png")}
          ></Image>
          <View style={styles.noti}>
            <Text style={styles.title}>TEAM BUILDING!!!!</Text>
            <Text>
              Lịch tổ chức team building cho toàn bộ nhân viên công ty sẽ được
              tổ chức vào chủ nhật tuần này tại công viên Yên Sở
            </Text>
          </View>
        </View>
        <View style={styles.contain}>
          <Image
            style={styles.image}
            source={require("../../assets/meeting.png")}
          ></Image>
          <View style={styles.noti}>
            <Text style={styles.title}>THÔNG BÁO LỊCH HỌP</Text>
            <Text>
              15H ngày 14-5 tổ chức cuộc họp thường niên. Đề nghị mọi người thu
              xếp công việc tham gia đúng giờ
            </Text>
          </View>
        </View>
        <View style={styles.contain}>
          <Image
            style={styles.image}
            source={require("../../assets/warning.png")}
          ></Image>
          <View style={styles.noti}>
            <Text style={styles.title}>WARNING: DANH SÁCH ĐI MUỘN</Text>
            <Text>
              Một số bạn còn đi muộn nhiều đề nghị mọi người đi làm đúng giờ
            </Text>
          </View>
        </View>
        <View style={styles.contain}>
          <Image
            style={styles.image}
            source={require("../../assets/overtime.png")}
          ></Image>
          <View style={styles.noti}>
            <Text style={styles.title}>KẾ HOẠCH OVERTIME</Text>
            <Text>
              Công việc còn tồn đọng khá nhiều, mọi người cần có kế hoạch cụ thể
              hơn, tập trung làm OT trong tuần sau để hoàn thành công việc trước
              thời hạn
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
