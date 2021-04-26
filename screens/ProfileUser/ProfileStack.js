import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ProfileUserScreen from "./ProfileUserScreen";
import EditProfileScreen from "./EditProfileScreen";

const StackProfile = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

export default function ProfileStack() {
  return (
    <StackProfile.Navigator initialRouteName="ProfileUserScreen">
      <StackProfile.Screen
        name="ProfileUserScreen"
        component={ProfileUserScreen}
        options={navOptionHandler}
      />
      <StackProfile.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={navOptionHandler}
      />
    </StackProfile.Navigator>
  );
}
