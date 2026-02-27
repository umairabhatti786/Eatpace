import { StyleSheet, TouchableOpacity, View } from "react-native";

import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { LinearGradient } from "expo-linear-gradient";
import NextArrowIcon from "../assets/svgs/nextArrow.svg";
import TickIcon from "../assets/svgs/tick.svg";
import AnimatedToggle from "./Toggle";

type Props = {
  onNext?: any;
  item?: any;
  index?: any;
  onSelect?: any;
  onToggle?: any;
};

const SelectionCard = ({ onNext, index, item, onSelect, onToggle }: Props) => {
  return (
    <>
      <TouchableOpacity
        key={index.toString()}
        style={{
          width: "100%",
          height: sizeHelper.calHp(78),
          padding: sizeHelper.calWp(24),
          // Use 0 to hide the border — negative values are invalid
          borderWidth: item.selected && !item?.isToggle ? 0 : 1,
          borderColor:
            item.selected && !item?.isToggle
              ? "transparent"
              : theme.colors.border,
          backgroundColor:
            item.selected && !item?.isToggle ? "#EFF9F0" : theme.colors.white,
          flexDirection: "row",
          borderRadius: sizeHelper.calWp(20),

          justifyContent: "space-between",
        }}
        disabled={item?.isPreparing}
        onPress={onSelect}
      >
        <CustomText
          text={item.title}
          size={25}
          fontFam={
            item.selected && !item?.isToggle ? fonts.OpenBold : fonts.OpenMedium
          }
          color={
            item.selected && !item?.isToggle
              ? theme.colors.heading
              : theme.colors.secondry
          }
          fontWeight={item.selected && !item?.isToggle ? "700" : "600"}
        />
        {item?.isToggle ? (
          <AnimatedToggle isOn={item.selected} onToggle={onToggle} />
        ) : (
          <>
            {((item.selected && !item?.isToggle && !item?.isNext) ||
              item?.isPreparing) && (
              <View
                style={{
                  width: sizeHelper.calWp(40),
                  height: sizeHelper.calWp(40),
                  backgroundColor: theme.colors.primary,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: sizeHelper.calWp(40),
                }}
              >
                <TickIcon
                  width={sizeHelper.calWp(23)}
                  height={sizeHelper.calWp(23)}
                />
              </View>
            )}
          </>
        )}

        {item?.isNext && (
          <>
            <TouchableOpacity activeOpacity={0.6} onPress={onNext}>
              <LinearGradient
                colors={["#8ED360", "#3BA74E"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  width: sizeHelper.calWp(90),
                  height: sizeHelper.calHp(68),
                  borderRadius: sizeHelper.calHp(15),
                  marginTop: -11,
                  marginRight: -11,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <NextArrowIcon
                  width={sizeHelper.calWp(35)}
                  height={sizeHelper.calWp(35)}
                />
              </LinearGradient>
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
    </>
  );
};
export default SelectionCard;

const styles = StyleSheet.create({
  img: { width: 23, height: 23 },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: sizeHelper.calWp(25),
    borderRadius: sizeHelper.calWp(25),
  },
  inputContainer: {
    height: "100%",
    flex: 1,
    fontSize: sizeHelper.calHp(25),
    fontFamily: fonts.OpenRegular,
    padding: 0,
    fontWeight: "500",
    // backgroundColor: 'red',
  },
});
