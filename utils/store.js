import AsyncStorage from "@react-native-community/async-storage";

export const store = {
  getAccessToken: async () => AsyncStorage.getItem("ACCESSTOKEN"),
  setAccessToken: async (accessToken) =>
    AsyncStorage.setItem("ACCESSTOKEN", accessToken),
  removeAccessToken: async () => AsyncStorage.removeItem("ACCESSTOKEN"),

  getUserInfo: async () => AsyncStorage.getItem("USERINFO"),
  setUserInfo: async (userInfor) => AsyncStorage.setItem("USERINFO", userInfor),
  removeUserInfo: async () => AsyncStorage.removeItem("USERINFO"),

  getWork: async () => AsyncStorage.getItem("WORK"),
  setWork: async (work) => AsyncStorage.setItem("WORK", work),
  removeWork: async () => AsyncStorage.removeItem("WORK"),

  getSalary: async () => AsyncStorage.getItem("SALARY"),
  setSalary: async (salary) => AsyncStorage.setItem("SALARY", salary),
  removeSalary: async () => AsyncStorage.removeItem("SALARY"),
};
