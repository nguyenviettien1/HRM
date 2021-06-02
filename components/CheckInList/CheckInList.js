import React from "react";
import { Text, View } from "react-native";
export default function CheckInList(props) {
  const { checkInList } = props;

  const getThu = (x) => {
    var date = new Date(x);
    var current_day = date.getDay();
    var day_name = "";
    switch (current_day) {
      case 0:
        day_name = "Chủ nhật";
        break;
      case 1:
        day_name = "Thứ hai";
        break;
      case 2:
        day_name = "Thứ ba";
        break;
      case 3:
        day_name = "Thứ tư";
        break;
      case 4:
        day_name = "Thứ năm";
        break;
      case 5:
        day_name = "Thứ sáu";
        break;
      case 6:
        day_name = "Thứ bảy";
    }
    return day_name;
  };

  const getTimestamp = (x) => {
    var date = new Date(x * 1000);
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();
    var seconds = date.getSeconds().toString();
    if (hours < 10) {
      var hours = "0" + hours;
    }
    if (minutes < 10) {
      var minutes = "0" + minutes;
    }
    if (seconds < 10) {
      var seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  };

  const checkDiLam = (x) => {
    var date = new Date(x * 1000);
    var hours = date.getHours().toString();
    return hours;
  };

  const getWorkTime = (x) => {
    var hours = Math.floor(x / 3600);
    var minutes = Math.floor((x - hours * 3600) / 60);
    var seconds = x - hours * 3600 - minutes * 60;
    if (hours < 10) {
      var hours = "0" + hours;
    }
    if (minutes < 10) {
      var minutes = "0" + minutes;
    }
    if (seconds < 10) {
      var seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  };
  return (
    <View>
      {checkInList && (
        <View style={{ flexDirection: "row", margin: 8 }}>
          <Text style={{ flex: 1 }}>{`${checkInList.day.substring(
            8,
            10
          )}/${checkInList.day.substring(5, 7)}`}</Text>
          <Text style={{ flex: 1 }}>{getThu(checkInList.day)}</Text>
          {checkDiLam(checkInList.checkInAt) < 8 ? (
            <Text style={{ flex: 1 }}>
              {getTimestamp(checkInList.checkInAt)}
            </Text>
          ) : (
            <Text style={{ flex: 1, color: "red" }}>
              {getTimestamp(checkInList.checkInAt)}
            </Text>
          )}

          <Text style={{ flex: 1 }}>
            {getTimestamp(checkInList.checkOutAt)}
          </Text>
          <Text style={{ flex: 1 }}>{getWorkTime(checkInList.workTime)}</Text>
        </View>
      )}
    </View>
  );
}
