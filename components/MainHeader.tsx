import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import CustomText from "../components/Text";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { fonts } from "@/utils/fonts";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import { appStyles } from "@/utils/globalStyles";
import BackArrow from "../assets/svgs/backArrow.svg"
import { useRouter } from "expo-router";

const MainHeader = ({ title }: any) => {
        const router: any = useRouter();

  return (

       <View style={{...appStyles.row,gap:sizeHelper.calWp(20)}}>
                 <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>{router.back()}}
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
          {
            title&&(
                 <CustomText
                    text={title}
                    size={sizeHelper.calWp(56)}
                    fontFam={fonts.OpenBold}
                    color={theme.colors.black100}
                    fontWeight={"700"}
                />

            )
          }
               
            </View>
  
  );
};

export default MainHeader;

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
