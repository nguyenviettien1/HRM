import React from "react";
import { Text, View } from "react-native";
export default function CheckInList(props) {
  const { checkInList } = props;
  // const getThu = (date) => {
  //   //const weekArray = moment.weekdays();
  //   // var current_day = date.getDay()
  //   // var momentObj = moment("2021-03-04", "YYYY-MM-DD");
  //   //console.log("----------getThu: ", weekArray);
  //   // var day_name = "";
  //   // switch (current_day) {
  //   //   case 0:
  //   //     day_name = "Chủ nhật";
  //   //     break;
  //   //   case 1:
  //   //     day_name = "Thứ hai";
  //   //     break;
  //   //   case 2:
  //   //     day_name = "Thứ ba";
  //   //     break;
  //   //   case 3:
  //   //     day_name = "Thứ tư";
  //   //     break;
  //   //   case 4:
  //   //     day_name = "Thứ năm";
  //   //     break;
  //   //   case 5:
  //   //     day_name = "Thứ sau";
  //   //     break;
  //   //   case 6:
  //   //     day_name = "Thứ bảy";
  //   // }
  //   // return day_name;
  // };
  return (
    <View>
      {checkInList && (
        <View style={{ flexDirection: "row", margin: 8 }}>
          <Text style={{ flex: 1 }}>{checkInList.day}</Text>
          {/* <Text style={{ flex: 1 }}>{getThu(checkInList.day)}</Text> */}
          <Text style={{ flex: 1 }}>{checkInList.checkInAt}</Text>
          <Text style={{ flex: 1 }}>{checkInList.checkOutAt}</Text>
          <Text style={{ flex: 1 }}>{checkInList.workTime}</Text>
        </View>
      )}
    </View>
  );
}
