import React from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
export default function WorkList(props) {
  const { workList } = props;

  return (
    <View
      style={{
        backgroundColor: "#FFCCFF",
        margin: 8,
        borderRadius: 5,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}
    >
      {workList && (
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", flex: 1, fontSize: 16 }}>
              KPI công việc tháng:
            </Text>
            <Text style={{ fontSize: 15 }}>{`${workList.month.substring(
              5,
              7
            )}/ ${workList.month.substring(0, 4)}`}</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 15 }}>Mục tiêu: </Text>
            <Text style={{ fontSize: 15 }}>{workList.target}</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 15 }}>Thực tế: </Text>
            <Text style={{ fontSize: 15 }}>{workList.actual}</Text>
          </View>

          <View
            style={{
              marginTop: 15,
              height: 0.5,
              width: "100%",
              backgroundColor: "#B5B5B5",
            }}
          />
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                color: "#009900",
                fontWeight: "bold",
                fontSize: 15,
                flex: 1,
              }}
            >
              Tiến trình:{" "}
            </Text>
            <Progress.Bar
              style={{ height: 8, marginTop: 4 }}
              progress={Number(workList.progress)}
            />
          </View>
        </View>
      )}
    </View>
  );
}
