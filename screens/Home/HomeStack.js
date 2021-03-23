import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import HomeScreenDetail from "./HomeScreenDetail";

const StackHome = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

export default function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}
