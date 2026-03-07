import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";

import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  disable = false,
  borderWidth,
  paddingHorizontal,
  fontWeight,
  children,
  colors,
}: any) => {
  const memoizedStyle = useMemo(() => {
    const baseStyle: ViewStyle = {
      width:"100%",
      height:"100%",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: borderWidth || 0,
      borderColor: borderColor,
      paddingHorizontal: paddingHorizontal,
      flexDirection: "row",
      gap: sizeHelper.calWp(15),
    };

    return [baseStyle, style] as StyleProp<ViewStyle>;
  }, [
    width,
    height,
    bgColor,
    borderRadius,
    borderWidth,
    borderColor,
    paddingHorizontal,
    style,
    colors,
  ]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.7}
      style={{
        borderRadius: sizeHelper.calHp(borderRadius || 25),
        overflow: "hidden",
        width: width,
        height: sizeHelper.calHp(height || 80),
      }}
    >
      <LinearGradient
        colors={colors || ["#8ED360", "#3BA74E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={memoizedStyle}
      >
        {children}
        {text && (
          <CustomText
            text={text}
            color={textColor || theme.colors.white}
            size={size || 26}
            fontWeight={fontWeight || "700"}
            fontFam={fontFam || fonts.OpenBold}
          />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
