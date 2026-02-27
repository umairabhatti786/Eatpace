import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import { appStyles } from "@/utils/globalStyles";
import sizeHelper from "@/utils/helpers";
import SwipeCrossIcon from "../assets/svgs/swipeCross.svg";
import SwipeHeartIcon from "../assets/svgs/swipeHeart.svg";

import TimerIcon from "../assets/svgs/timer.svg";

import { images } from "@/utils/Images";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
import ProgressBar from "./ProgressBar";

const { width, height } = Dimensions.get("window");
const SWIPE_THRESHOLD = 120;

const TinderSwiper = ({ cardsData, onNext }: any) => {
  const [cards, setCards] = useState(cardsData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const translateX = useRef(new Animated.Value(0)).current;

  const rotate = translateX.interpolate({
    inputRange: [-width / 2, 0, width / 2],
    outputRange: ["-10deg", "0deg", "10deg"],
  });

  const cardStyle = {
    transform: [{ translateX }, { rotate }],
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true },
  );

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      const x = event.nativeEvent.translationX;

      if (x > SWIPE_THRESHOLD) swipeCard(width);
      else if (x < -SWIPE_THRESHOLD) swipeCard(-width);
      else resetCard();
    }
  };

  const swipeCard = (toValue: number) => {
    Animated.timing(translateX, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setCards((prev) => {
        const newCards = prev.slice(1);
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);

        // if (cardsData?.length - 1 == currentIndex) {
        //   onNext(newIndex);
        // }
        return newCards;
      });
      translateX.setValue(0);
    });
  };

  // handlers for button presses
  const handleSwipeLeft = () => {
    if (cards.length) {
      swipeCard(-width);
    }
  };

  const handleSwipeRight = () => {
    if (cards.length) {
      swipeCard(width);
    }
  };

  const resetCard = () => {
    Animated.spring(translateX, {
      toValue: 0,
      friction: 6,
      useNativeDriver: true,
    }).start();
  };

  if (!cards.length) {
    return (
      <View style={styles.emptyContainer}>
        <CustomText
          text={"No cards available"}
          color={theme.colors.black100}
          size={24}
          fontWeight={"700"}
          fontFam={fonts.OpenBold}
        />
      </View>
    );
  }

  return (
    <View>
      <GestureHandlerRootView style={{ height: sizeHelper.calHp(460) }}>
        {cards.slice(0, 3).map((item, index) => {
          const isTop = index === 0;

          let scale = 1;
          let translateXBg = 0;
          let rotateBg = "0deg";

          // LEFT BACK CARD
          if (index === 1) {
            scale = 0.8;
            translateXBg = -200 * 0.26;
            rotateBg = "-18deg";
          }

          // RIGHT BACK CARD
          if (index === 2) {
            scale = 0.8;
            translateXBg = 200 * 0.26;
            rotateBg = "18deg";
          }

          return (
            <View key={item.id}>
              <View
                style={[
                  styles.cardWrapper,
                  {
                    transform: [
                      { scale },
                      { translateX: translateXBg },
                      { rotate: rotateBg },
                    ],
                    zIndex: cards.length - index,
                  },
                ]}
              >
                {isTop ? (
                  <PanGestureHandler
                    onGestureEvent={onGestureEvent}
                    onHandlerStateChange={onHandlerStateChange}
                  >
                    <Animated.View style={[styles.card, cardStyle]}>
                      <Image source={item?.image} style={styles.image} />
                      <View
                        style={{
                          justifyContent: "center",
                          paddingVertical: sizeHelper.calHp(25),
                          gap: sizeHelper.calHp(17),
                        }}
                      >
                        <CustomText
                          text={item?.title}
                          color={theme.colors.black100}
                          size={24}
                          fontWeight={"700"}
                          fontFam={fonts.OpenBold}
                        />
                        <View
                          style={{
                            ...appStyles.row,
                            gap: sizeHelper.calWp(10),
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

                          <View
                            style={{
                              width: sizeHelper.calWp(30),
                              height: 1.3,
                              backgroundColor: theme.colors.border,
                              borderRadius: 999,
                            }}
                          />
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
                        </View>
                      </View>

                      {/* <Text style={styles.title}>{item.title}</Text> */}
                    </Animated.View>
                  </PanGestureHandler>
                ) : (
                  <View style={styles.card}>
                    <Image source={item?.image} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                )}
              </View>
            </View>
          );
        })}
      </GestureHandlerRootView>

      <View
        style={{
          ...appStyles.row,
          gap: sizeHelper.calWp(30),

          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={handleSwipeLeft}>
          <SwipeCrossIcon
            width={sizeHelper.calWp(110)}
            height={sizeHelper.calWp(110)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSwipeRight}>
          <SwipeHeartIcon
            width={sizeHelper.calWp(110)}
            height={sizeHelper.calWp(110)}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingTop: sizeHelper.calHp(30),
          gap: sizeHelper.calHp(15),
          alignItems: "center",
        }}
      >
        <CustomText
          text={`${currentIndex} of ${cardsData?.length} meals liked `}
          color={theme.colors.black100}
          size={22}
          fontWeight={"600"}
          fontFam={fonts.OpenMedium}
        />
        <ProgressBar
          // height={sizeHelper.calHp(50)}
          totalSteps={cardsData?.length}
          ProgressWidth={"80%"}
          ProgressColor={theme.colors.primary}
          backgroundColor={theme.colors.primary + "30"}
          // backButton={currentStep > 0}
          // onBackPress={() => {
          //   setCurrentStep(currentStep - 1);
          // }}
          currentStep={currentIndex}
        />
        <CustomText
          text={"This helps us tailor your week"}
          color={theme.colors.grey100}
          size={22}
          fontWeight={"600"}
          fontFam={fonts.OpenMedium}
        />
      </View>
    </View>
  );
};
export default TinderSwiper;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  cardWrapper: {
    position: "absolute",
    width: width * 0.85,
    alignItems: "center",
  },
  card: {
    width: "70%",
    height: sizeHelper.calHp(430),
    backgroundColor: "#fff",
    borderRadius: sizeHelper.calWp(40),
    overflow: "hidden",
    elevation: 8,
    shadowColor: theme.colors.orange + "20",
    padding: sizeHelper.calWp(20),
    borderWidth: 0.3,
    marginRight: sizeHelper.calWp(35),
    borderColor: theme.colors.orange + "80",
  },
  image: {
    width: "100%",
    height: "70%",
    borderRadius: sizeHelper.calWp(40),
  },
  title: {
    padding: 18,
    fontSize: 18,
    fontWeight: "600",
  },
});
