import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";
import sizeHelper from "../helpers";
export const appStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowjustify: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appShadow: {
    elevation: 10,
    shadowColor: theme.colors.heading + "40",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  line: {
    width: sizeHelper.calWp(30),
    height: 1.3,
    backgroundColor: theme.colors.border,
    borderRadius: 999,
  },
  circle: {
    width: sizeHelper.calWp(60),
    height: sizeHelper.calWp(60),
     borderRadius:sizeHelper.calWp(50),
    backgroundColor: theme.colors.white,
    alignItems: "center",
    justifyContent: "center",
   

  },
});
