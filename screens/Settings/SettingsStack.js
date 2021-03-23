import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from "./SettingsScreen";
import SettingsScreenDetail from "./SettingsScreenDetail";

const StackSetting = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

export default function SettingsStack() {
  return (
    <StackSetting.Navigator initialRouteName="Settings">
      <StackSetting.Screen
        name="Settings"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      <StackSetting.Screen
        name="SettingsDetail"
        component={SettingsScreenDetail}
        options={navOptionHandler}
      />
    </StackSetting.Navigator>
  );
}
