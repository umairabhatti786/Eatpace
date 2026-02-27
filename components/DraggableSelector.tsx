import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Gesture } from "react-native-gesture-handler";
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

const NUMBERS = [3, 4, 5, 6, 7];
const ITEM_COUNT = NUMBERS.length;

export default function DraggableSelector() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [sliderWidth, setSliderWidth] = useState(0);

  const translateX = useSharedValue(0);

  const THUMB_SIZE = sizeHelper.calWp(50);

  const stepWidth = sliderWidth > 0 ? sliderWidth / (ITEM_COUNT - 0.6) : 0;

  const updateIndex = (index: number) => {
    setSelectedIndex(index);
  };

  const gesture = Gesture.Pan()
    .onUpdate((e) => {
      let newValue = translateX.value + e.changeX;

      if (newValue < 0) newValue = 0;
      if (newValue > sliderWidth) newValue = sliderWidth;

      translateX.value = newValue;
    })
    .onEnd(() => {
      if (!stepWidth) return;

      const index = Math.round(translateX.value / stepWidth);

      translateX.value = withSpring(index * stepWidth, {
        damping: 50,
        stiffness: 100,
      });

      runOnJS(updateIndex)(index);
    });

  const animatedThumb = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const animatedProgress = useAnimatedStyle(() => ({
    width: translateX.value + THUMB_SIZE / 2,
  }));

  const selectItem = (index: number) => {
    if (!stepWidth) return;

    translateX.value = withSpring(index * stepWidth, {
      damping: 50,
      stiffness: 100,
    });

    setSelectedIndex(index);
  };

  return (
    <View style={styles.wrapper}>
      {/* Numbers */}
      <View style={styles.numberRow}>
        {NUMBERS.map((num, index) => (
          <Text
            key={num}
            onPress={() => selectItem(index)}
            style={{
              ...(selectedIndex === index && styles.activeNumber),
              fontSize: sizeHelper.calWp(35),
              fontFamily:
                selectedIndex === index ? fonts.OpenBold : fonts.OpenRegular,
              fontWeight: selectedIndex === index ? "700" : "500",
              color:
                selectedIndex === index
                  ? theme.colors.white
                  : theme.colors.secondry,
            }}
          >
            {num}
          </Text>
        ))}
      </View>

      {/* Slider */}
      <View
        style={styles.sliderContainer}
        onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width)}
      >
        <View style={styles.sliderBackground} />

        <Animated.View style={[styles.sliderProgress, animatedProgress]} />

        {/* <GestureDetector gesture={gesture}> */}
        <Animated.View style={[styles.thumb, animatedThumb]} />
        {/* </GestureDetector> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    borderRadius: sizeHelper.calWp(40),
    backgroundColor: "#EFF9F0",
    gap: sizeHelper.calHp(40),
  },
  numberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  number: {
    fontSize: sizeHelper.calWp(35),
    color: "#555",
  },
  activeNumber: {
    backgroundColor: "#6BC048",
    paddingHorizontal: sizeHelper.calWp(45),
    paddingVertical: sizeHelper.calHp(10),
    borderRadius: 30,
    overflow: "hidden",
  },
  sliderContainer: {
    height: sizeHelper.calHp(12),
    justifyContent: "center",
  },
  sliderBackground: {
    position: "absolute",
    height: sizeHelper.calHp(12),
    width: "100%",
    borderRadius: 10,
    backgroundColor: theme.colors.white,
  },
  sliderProgress: {
    position: "absolute",
    height: sizeHelper.calHp(12),
    backgroundColor: "#8ED360",
    borderRadius: 10,
  },
  thumb: {
    position: "absolute",
    width: sizeHelper.calWp(55),
    height: sizeHelper.calWp(55),
    borderRadius: sizeHelper.calWp(55),
    backgroundColor: "#6BC048",
    borderWidth: 3,
    borderColor: "#fff",
  },
});
