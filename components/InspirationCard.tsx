import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import CustomText from "../components/Text";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { fonts } from "@/utils/fonts";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";

const InspirationCard = ({ item }: any) => {
  return (
    <LinearGradient
      style={styles.card}
      colors={item?.colors || ["#789FD350", "#6A95CF50"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <CustomText
        text={item?.title}
        numberOfLines={1}
        style={{ padding: sizeHelper.calWp(20) }}
        color={theme.colors.black100}
        size={24}
        fontWeight={"700"}
        fontFam={fonts.OpenBold}
      />

      <View
        style={{
          position: "absolute",
          bottom: sizeHelper.calWp(-30),
          right: sizeHelper.calWp(-30),
        }}
      >
        <View
          style={{
            width: sizeHelper.calWp(200),
            height: sizeHelper.calWp(200),
            borderRadius: 9999,
            backgroundColor: "#789FD3",
            padding: sizeHelper.calWp(6),
          }}
        >
          <Image source={item?.img} style={{ ...styles.image }} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default InspirationCard;

const styles = StyleSheet.create({
  card: {
    width: WINDOW_WIDTH / 2.6,
    height: sizeHelper.calHp(230),
    borderRadius: sizeHelper.calWp(40),
    borderWidth: 1,
    borderColor: "#FFF3ED",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: sizeHelper.calWp(40),
  },
});
