import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import TickIcon from "../assets/svgs/tick.svg";
const CheckBox = ({ isChecked, onCheck }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onCheck}
      style={{
        width: sizeHelper.calWp(45),
        height: sizeHelper.calWp(45),
        backgroundColor: isChecked ? theme.colors.primary : "transparent",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: sizeHelper.calWp(10),
        borderWidth: isChecked ? -1 : 1,
        borderColor: theme.colors.border,
      }}
    >
      {isChecked && (
        <TickIcon
                                               color={theme.colors.white}

         width={sizeHelper.calWp(23)} height={sizeHelper.calWp(23)} />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;

