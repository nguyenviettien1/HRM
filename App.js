import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./components/TabNavigator/TabNavigator";
import CustomDrawerContent from "./components/Drawer/CustomDrawerContent";
import ProfileUserScreen from "./screens/ProfileUser/ProfileUserScreen";
import SettingsStack from "./screens/Settings/SettingsStack";
import InfoCompanyScreen from "./screens/InfoCompany/InfoCompanyScreen";
import SupportScreen from "./screens/Support/SupportScreen";
import LoginScreen from "./screens/Authentication/LoginScreen";
const DrawerFull = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerFull.Navigator
        initialRouteName="LoginScreen"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <DrawerFull.Screen name="LoginScreen" component={LoginScreen} />
        <DrawerFull.Screen name="MenuTab" component={TabNavigator} />
        <DrawerFull.Screen
          name="ProfileUserScreen"
          component={ProfileUserScreen}
        />
        <DrawerFull.Screen name="SettingsStack" component={SettingsStack} />
        <DrawerFull.Screen name="SupportScreen" component={SupportScreen} />
        <DrawerFull.Screen
          name="InfoCompanyScreen"
          component={InfoCompanyScreen}
        />
      </DrawerFull.Navigator>
    </NavigationContainer>
  );
}
