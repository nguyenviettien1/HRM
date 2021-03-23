import * as React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../../screens/Home/HomeStack";
import SettingsStack from "../../screens/Settings/SettingsStack";
import NotificationScreen from "../../screens/Notification/NotificationScreen";
import SalaryScreen from "../../screens/Salary/SalaryScreen";
const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("../../assets/home.png")
              : require("../../assets/home-black.png");
          } else if (route.name === "Settings") {
            iconName = focused
              ? require("../../assets/tools.png")
              : require("../../assets/tools-black.png");
          } else if (route.name === "Notification") {
            iconName = focused
              ? require("../../assets/notification.png")
              : require("../../assets/notification-black.png");
          } else if (route.name === "Salary") {
            iconName = focused
              ? require("../../assets/money-bag.png")
              : require("../../assets/money-bag-black.png");
          }
          return (
            <Image
              source={iconName}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Salary" component={SalaryScreen} />
      <Tab.Screen name="Settings" component={SettingsStack} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
}
