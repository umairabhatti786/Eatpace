import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import { images } from "@/utils/Images";
import React from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScreenLayoutProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  barStyle?: StatusBarStyle; // "light-content" | "dark-content" | "default"
  translucent?: boolean;
  paddingTop?: any;
  backgroundSource?: any;
  paddingHorizontal?: any;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  style,
  paddingHorizontal,
  backgroundColor,
  paddingTop,
  backgroundSource,
  barStyle = "dark-content",
  translucent = true,
}) => {
  const insets = useSafeAreaInsets();

  // compute top padding: prefer explicit prop, otherwise use safe area inset
  const topInset = insets?.top ?? 0;
  const topPadding =
    typeof paddingTop !== "undefined"
      ? paddingTop
      : topInset + sizeHelper.calHp(20);

  return (
    <>
      <StatusBar
        barStyle={barStyle}
        translucent={translucent}
        // Android needs explicit backgroundColor to be transparent
        backgroundColor={Platform.OS === "android" ? "transparent" : undefined}
      />

      <View style={{ flex: 1 }}>
        <ImageBackground
          source={images.background}
          resizeMode="stretch"
          style={[
            styles.container,
            {
              backgroundColor: theme.colors.white,
            },
          ]}
        >
          <View
            style={[
              {
                flex: 1,
                gap: sizeHelper.calHp(30),
                paddingTop: topPadding,
                width: "100%",
                paddingHorizontal: paddingHorizontal || sizeHelper.calWp(35),
              },
              style,
            ]}
          >
            {children}
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    // justifyContent: "center",
    gap: sizeHelper.calHp(30),
    // paddingHorizontal: sizeHelper.calWp(30),
  },
});

export default ScreenLayout;
