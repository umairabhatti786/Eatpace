import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";

const AnimatedToggle = ({ isOn, onToggle }: any) => {
  //   const [isOn, setIsOn] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOn ? 22 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOn]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onToggle}
      style={[styles.track]}
    >
      <LinearGradient
        colors={isOn ? ["#8ED360", "#3BA74E"] : ["#ECECEC", "#ECECEC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientFill}
      />
      <Animated.View
        style={[
          styles.thumb,
          {
            transform: [{ translateX }],
            backgroundColor: "#FFFFFF",
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default AnimatedToggle;

const styles = StyleSheet.create({
  track: {
    width: 50,
    height: 27,
    borderRadius: 14,
    padding: 3,
    justifyContent: "center",
  },
  gradientFill: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 14,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 11,
  },
});
