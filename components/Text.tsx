import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import React, { useMemo } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
const CustomText = ({
  color,
  size,
  fontFam,
  text,
  style,
  lineHeight,
  numberOfLines,
  fontWeight,
  textDecorationLine,
  label,
  textTransform,
}: any) => {
  const memoizedStyle = useMemo(() => {
    const baseStyle = {
      color: color || theme.colors.secondry,
      fontSize: sizeHelper.calHp(size || 20),
      fontWeight: fontWeight || "500",
      fontFamily: fontFam || fonts.OpenRegular,
      textTransform,
      textDecorationLine,
      ...(lineHeight ? { lineHeight } : {}),
    };

    return [baseStyle, style] as StyleProp<TextStyle>;
  }, [
    color,
    size,
    fontFam,
    fontWeight,
    textTransform,
    textDecorationLine,
    lineHeight,
    style,
  ]);

  return (
    <Text
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={memoizedStyle}
    >
      {text}
      {label}
    </Text>
  );
};

export default React.memo(CustomText);
