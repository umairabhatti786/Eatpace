import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";

import BackArrow from "../assets/svgs/backArrow.svg";

const { width } = Dimensions.get("window");

const ProgressBar = ({
  currentStep = 1,
  totalSteps = 3,
  onBackPress,
  backButton,
  height,
  backgroundColor,
  ProgressColor,
  ProgressWidth,
}: any) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  // Convert discrete step to progress ratio (0 to 1)
  const progressRatio = currentStep / totalSteps;

  // measured width of the progress area (accounts for backButton presence)
  const [barWidth, setBarWidth] = useState<number>(width - 40);

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progressRatio,
      duration: 700,
      useNativeDriver: false,
    }).start();
  }, [progressRatio]);

  const progressWidth = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: [0, barWidth], // full width of measured progress container
  });

  return (
    <View
      style={{
        height: height,
        justifyContent: "center",
      }}
    >
      <View style={styles.container}>
        {backButton && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onBackPress}
            style={{
              height: sizeHelper.calHp(80),
              width: sizeHelper.calWp(100),
              backgroundColor: theme.colors.white,
              borderRadius: sizeHelper.calWp(25),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BackArrow
              width={sizeHelper.calWp(50)}
              height={sizeHelper.calWp(50)}
            />
          </TouchableOpacity>
        )}

        <View
          style={{ width: backButton ? "80%" : ProgressWidth || "100%" }}
          onLayout={(e) => setBarWidth(e.nativeEvent.layout.width)}
        >
          <View
            style={{
              ...styles.backgroundLine,
              backgroundColor: backgroundColor || theme.colors.white, // Blue
            }}
          >
            {/* Animated Progress Line (Red) */}
            <Animated.View
              style={[
                styles.progressLine,

                {
                  width: progressWidth,
                  backgroundColor: ProgressColor || "#FF993F", // Red
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  backgroundLine: {
    height: sizeHelper.calHp(13),
    borderRadius: 10,
  },
  progressLine: {
    width: "100%",
    position: "absolute",

    height: sizeHelper.calHp(13),
    borderRadius: 999,
  },

  container: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    // gap: sizeHelper.calWp(20),
  },
});
