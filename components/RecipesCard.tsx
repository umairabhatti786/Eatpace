import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import CustomText from "../components/Text";
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { fonts } from "@/utils/fonts";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import SwipeIcon from "../assets/svgs/swipe.svg";
import { appStyles } from "@/utils/globalStyles";
import TimerIcon from "../assets/svgs/timer.svg";
import { images } from "@/utils/Images";
import HeartIcon from "../assets/svgs/heart.svg";
import FilledHeartIcon from "../assets/svgs/filledHeart.svg";
import IncrementIcon from "../assets/svgs/increment.svg";

import CustomButton from "../components/Button";

const RecipesCard = ({ item, width, isShowHeart }: any) => {
  return (
    <View style={{ ...styles.card, width: width || WINDOW_WIDTH / 2.4 }}>
      <View
        style={{
          height: sizeHelper.calHp(160),
          borderRadius: sizeHelper.calWp(40),
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Image source={item?.img} style={styles.image} />

        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: theme.colors.black100 + "20",
            padding: sizeHelper.calWp(20),
            borderRadius: sizeHelper.calWp(40),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {item?.days ? (
              <CustomText
                text={item?.days}
                color={theme.colors.black100}
                style={{
                  paddingHorizontal: sizeHelper.calWp(21),
                  paddingVertical: sizeHelper.calHp(6),
                  borderRadius: sizeHelper.calWp(50),
                  backgroundColor: theme.colors.white + "70",
                }}
                fontWeight={"700"}
                fontFam={fonts.OpenBold}
              />
            ) : (
              <View />
            )}
            {isShowHeart && (
              <TouchableOpacity style={appStyles.circle}>
                {item?.isFav ? (
                  <FilledHeartIcon
                    width={sizeHelper.calWp(35)}
                    height={sizeHelper.calWp(35)}
                  />
                ) : (
                  <HeartIcon
                    width={sizeHelper.calWp(35)}
                    height={sizeHelper.calWp(35)}
                  />
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          paddingTop: sizeHelper.calHp(20),
          paddingBottom: sizeHelper.calHp(10),
          gap: sizeHelper.calHp(15),
          paddingHorizontal: sizeHelper.calWp(10),
        }}
      >
        <CustomText
          text={item?.title}
          numberOfLines={1}
          color={theme.colors.black100}
          size={27}
          fontWeight={"700"}
          fontFam={fonts.OpenBold}
        />
        {item?.type && (
          <CustomText
            text={item?.type}
            numberOfLines={1}
            color={theme.colors.black100}
            size={27}
            fontWeight={"700"}
            fontFam={fonts.OpenBold}
          />
        )}
        {item?.IsSwipe && (
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <SwipeIcon
              width={sizeHelper.calWp(45)}
              height={sizeHelper.calWp(45)}
            />

            <CustomText
              text={"Swap"}
              color={theme.colors.orange}
              size={25}
              fontWeight={"600"}
              fontFam={fonts.OpenMedium}
            />
          </View>
        )}
        {item?.recipes && (
          <CustomText
            text={`${item?.recipes} Recipes`}
            color={theme.colors.secondry}
            // size={25}
            fontWeight={"600"}
            fontFam={fonts.OpenMedium}
          />
        )}
        {item?.time && (
          <View
            style={{
              ...appStyles.rowjustify,
            }}
          >
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(5),
              }}
            >
              <TimerIcon
                width={sizeHelper.calWp(33)}
                height={sizeHelper.calWp(33)}
              />
              <CustomText
                text={"15 Mins"}
                color={theme.colors.black100}
                size={22}
                fontWeight={"600"}
                fontFam={fonts.OpenMedium}
              />
            </View>
            {item?.kcal && (
              <View
                style={{
                  width: sizeHelper.calWp(20),
                  height: 1.3,
                  backgroundColor: theme.colors.border,
                  borderRadius: 999,
                }}
              />
            )}
            {item?.condition && (
              <CustomButton
                text={item?.condition}
                bgColor={theme.colors.orange + "15"}
                textColor={theme.colors.secondry}
                paddingHorizontal={15}
                height={60}
                borderRadius={100}
              />
            )}

            {item?.isAdd && (
              <CustomButton
                text={"Add"}
                borderColor={theme.colors.orange}
                borderWidth={1}
                bgColor={"transparent"}
                textColor={theme.colors.orange}
                paddingHorizontal={10}
                height={55}
                borderRadius={17}
              >
                <IncrementIcon
                  width={sizeHelper.calWp(25)}
                  height={sizeHelper.calWp(25)}
                  color={theme.colors.orange}
                />
              </CustomButton>
            )}

            {item?.kcal && (
              <View
                style={{
                  ...appStyles.row,
                  gap: sizeHelper.calWp(5),
                }}
              >
                <Image
                  style={{
                    width: sizeHelper.calWp(33),
                    height: sizeHelper.calWp(33),
                    resizeMode: "contain",
                  }}
                  source={images.heating}
                />
                <CustomText
                  text={"99Kcal"}
                  color={theme.colors.black100}
                  size={22}
                  fontWeight={"600"}
                  fontFam={fonts.OpenMedium}
                />
              </View>
            )}
          </View>
        )}
      </View>

      {/* <Text style={styles.title}>{item.title}</Text> */}
    </View>
  );
};

export default RecipesCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(40),
    padding: sizeHelper.calWp(10),
    borderWidth: 1,
    borderColor: "#FFF3ED",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: sizeHelper.calWp(40),
  },
});
