import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A9E2F3",
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 180,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  hiText: {
    textAlign: "center",
    fontSize: 70,
    lineHeight: 70,
    fontWeight: "bold",
    color: "#0a384f",
  },
  hiTextE: {
    textAlign: "center",
    fontSize: 70,
    lineHeight: 70,
    fontWeight: "bold",
    color: "#dbae6a",
  },

  form: {
    marginBottom: 30,
    marginTop: 30,
  },
  formInput: {
    marginTop: 20,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  inputText: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#886A08",
    justifyContent: "center",
    marginTop: 15,
  },
  userText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 30,
  },
  buttonLoginText: {
    color: "#fff",
    textAlign: "center",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default styles;
