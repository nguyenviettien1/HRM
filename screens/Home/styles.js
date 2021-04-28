import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 35,
    backgroundColor: "#D8D8D8",
    alignItems: "center",
  },
  dividerText: {
    marginTop: 7,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonView: {
    marginTop: 20,
    flex: 1,
    height: 50,
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  buttonCheckIn: {
    height: "100%",
    borderWidth: 1,
    alignItems: "center",
    borderRadius: 8,
  },

  buttonText: {
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
});

export default styles;
