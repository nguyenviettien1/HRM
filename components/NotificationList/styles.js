import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  contain: { flexDirection: "row", margin: 10, height: 98 },
  image: {
    width: 98,
    height: 98,
    borderRadius: 8,
  },
  noti: {
    marginTop: 5,
    flex: 1,
    height: 100,
    paddingLeft: 10,
  },
  title: {
    fontWeight: "bold",
    color: "red",
  },
});

export default styles;
