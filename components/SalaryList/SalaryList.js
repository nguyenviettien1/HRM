import React from "react";
import { Text, View } from "react-native";
export default function SalaryList(props) {
  const { salaryList } = props;
  const formatMoney = (money) => {
    if (money === undefined || money === null || money === "") {
      return "0 đ";
    }
    let moneyString = "";
    moneyString = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " đ";
    return moneyString;
  };
  return (
    <View
      style={{
        backgroundColor: "#E3F6CE",
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
      {salaryList && (
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", flex: 1, fontSize: 16 }}>
              Lương tháng:
            </Text>
            <Text style={{ fontSize: 15 }}>{`${salaryList.month.substring(
              5,
              7
            )}/ ${salaryList.month.substring(0, 4)}`}</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 15 }}>Lương cơ bản: </Text>
            <Text style={{ fontSize: 15 }}>
              {formatMoney(salaryList.salaryBase)}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 15 }}>Lương công việc: </Text>
            <Text style={{ flex: 1 }}>
              {formatMoney(salaryList.salaryWork)}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 15 }}>Lương thâm niên: </Text>
            <Text style={{ flex: 1 }}>
              {formatMoney(salaryList.salarySeniority)}
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 15 }}>Hệ số lương: </Text>
            <Text style={{ flex: 1 }}>{salaryList.coefficientSalary}</Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 15 }}>Lương chế độ: </Text>
            <Text style={{ flex: 1 }}>
              {formatMoney(salaryList.salaryTreatment)}
            </Text>
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
              Tổng:{" "}
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              {formatMoney(salaryList.total)}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
