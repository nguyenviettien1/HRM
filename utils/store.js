import AsyncStorage from "@react-native-community/async-storage";

export const store = {
  getAccessToken: async () => AsyncStorage.getItem("ACCESSTOKEN"),
  setAccessToken: async (accessToken) =>
    AsyncStorage.setItem("ACCESSTOKEN", accessToken),
  removeAccessToken: async () => AsyncStorage.removeItem("ACCESSTOKEN"),

  getUserInfo: async () => AsyncStorage.getItem("USERINFO"),
  setUserInfo: async (userInfor) => AsyncStorage.setItem("USERINFO", userInfor),
  removeUserInfo: async () => AsyncStorage.removeItem("USERINFO"),
};
