import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import CustomText from "../components/Text";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { fonts } from "@/utils/fonts";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { appStyles } from "@/utils/globalStyles";
import TimerIcon from "../assets/svgs/timer.svg";
import { images } from "@/utils/Images";

const WeeknightCard = ({ item }: any) => {
  return (
    <View style={styles.card}>
      <Image source={item?.img} style={styles.image} />

      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: theme.colors.black100 + "30",
          padding: sizeHelper.calWp(20),
          borderRadius: sizeHelper.calWp(40),
          justifyContent:"space-between"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: sizeHelper.calWp(15),
            paddingVertical: sizeHelper.calHp(9),
            borderRadius: sizeHelper.calWp(15),
            backgroundColor: theme.colors.white,
            alignSelf: "flex-start",
            alignItems:"center",
            gap:sizeHelper.calWp(10)
          }}
        >
          <TimerIcon
            width={sizeHelper.calWp(30)}
            height={sizeHelper.calWp(30)}
          />
          <CustomText text={item?.time} color={theme.colors.black100} />
        </View>

                  <CustomText text={item?.title} 
                  fontFam={fonts.OpenBold}
                  size={22}
                  fontWeight={"700"}
                  
                  color={theme.colors.white} />

      </View>
    </View>
  );
};

export default WeeknightCard;

const styles = StyleSheet.create({
  card: {
    width: WINDOW_WIDTH / 1.5,
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(40),
    height: sizeHelper.calHp(250),
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: sizeHelper.calWp(40),
  },
});
