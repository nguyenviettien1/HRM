import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  contain: { flexDirection: "row", margin: 10, height: 98 },
  image: {
    width: 98,
    height: 98,
    borderRadius: 8,
  },
  name: {
    marginTop: 5,
    flex: 1,
    height: 100,
    paddingLeft: 10,
  },
  title: {
    fontWeight: "bold",
    color: "red",
  },
  viewInfo: {
    flexDirection: "row",
    width: 130,
  },
  age: {
    paddingLeft: 4,
    color: "green",
    fontWeight: "bold",
  },
  divider: {
    width: "100%",
    height: 35,
    backgroundColor: "#D8D8D8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dividerText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  infoUser: {
    margin: 8,
  },
  editInfoName: {
    padding: 16,
  },
  textInfoName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0a384f",
    marginBottom: 4,
    marginTop: 4,
  },
  textInput: {
    paddingLeft: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingBottom: 7,
    paddingTop: 7,
  },
  textInputPicker: {
    paddingLeft: 8,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default styles;
