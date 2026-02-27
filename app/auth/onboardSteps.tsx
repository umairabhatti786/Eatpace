import CustomBottomSheet from "@/components/BottomSheet";
import CustomButton from "@/components/Button";
import GradientButton from "@/components/GradientButton";
import ProgressBar from "@/components/ProgressBar";
import ScreenLayout from "@/components/ScreenLayout";
import CustomSearch from "@/components/Search";
import CustomText from "@/components/Text";

import DraggableSelector from "@/components/DraggableSelector";
import SelectionCard from "@/components/SelectionCard";
import SwipeCards from "@/components/SwipeCard";
import AnimatedToggle from "@/components/Toggle";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import { appStyles } from "@/utils/globalStyles";
import sizeHelper from "@/utils/helpers";
import { images } from "@/utils/Images";
import { LinearGradient } from "expo-linear-gradient";
import { useMemo, useRef, useState } from "react";
import {
    Animated,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import AvoidsIcon from "../../assets/svgs/avoids.svg";
import ClockIcon from "../../assets/svgs/clock.svg";
import CookingIcon from "../../assets/svgs/cookingIcon.svg";
import CrossIcon from "../../assets/svgs/cross.svg";
import DaysIcon from "../../assets/svgs/daysIcon.svg";
import NextArrowIcon from "../../assets/svgs/nextArrow.svg";
import PeopleIcon from "../../assets/svgs/peopleIcon.svg";
import TickIcon from "../../assets/svgs/tick.svg";

const OnboardStepsScreen = ({ navigation }: any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const flatListRef = useRef<AppIntroSlider>(null);
  const AllergiesSheetRefSnapPoints = useMemo(() => ["80%"], []);
  const AllergiesSheetRef = useRef<any>(null);
  const animation = useRef(new Animated.Value(1)).current;
  const [commonAllergens, setCommonAllergens] = useState([
    { title: "Nuts", selected: false },
    { title: "Peanuts", selected: false },
    { title: "Dairy", selected: false },
    { title: "Eggs", selected: false },
    { title: "Gluten", selected: false },
    { title: "Soy", selected: false },
    { title: "Shellfish", selected: false },
  ]);

  const [allergensColor, setAllergensColor] = useState([
    { title: "Sesame", selected: false },
    { title: "Mustard", selected: false },
    { title: "Celery", selected: false },
  ]);

  const [onboardSteps, setOnboardSteps] = useState<any>([
    {
      type: "selection",
      title: "What Are You Trying To Achieve This Week?",
      des: "Choose what matters most right now. You can pick more than one.",
      data: [
        { title: "🥗 Eat healthier", selected: false },
        { title: "⏱ Save time", selected: false },
        { title: "😌 Reduce stress around meals", selected: false },
        { title: "🍽 Eat more varied", selected: false },
        { title: "👩‍🍳 Cook more at home", selected: false },
        { title: "💰 Stay within a budget", selected: false },
      ],
    },

    {
      type: "selection",
      title: "How Many People Are You Cooking For?",
      des: "Choose what matters most right now. You can pick more than one.",
      data: [
        { title: "1", selected: false },
        { title: "2", selected: false },
        { title: "3", selected: false },
        { title: "4", selected: false },
        { title: "5", selected: false },
        { title: "6+", selected: false },
      ],
    },

    {
      type: "selection",
      title: "How Comfortable Are You In The Kitchen?",
      des: "Cooking confidence level.",
      data: [
        { title: "🥄 I want it very simple", selected: false },
        { title: "🍳 I can cook the basics", selected: false },
        { title: "📖 I’m comfortable following recipes", selected: false },
        { title: "👨‍🍳 I really enjoy cooking", selected: false },
      ],
    },

    {
      type: "selection",
      title: "Any Dislikes?",
      des: "Pick any ingredients you don’t like. You won’t see them in your meal plans.",
      data: [
        { title: "🍄 Mushrooms", selected: false },
        { title: "🫒 Olives", selected: false },
        { title: "🐟 Seafood", selected: false },
        { title: "🥒 Zucchini", selected: false },
        { title: "🧊 Tofu", selected: false },
        { title: "🫑 Bell Pappers", selected: false },
        { title: "🍆 Eggplant", selected: false },
      ],
    },

    {
      type: "selection",
      title: "Should We Avoid Anything?",

      des: "Choose any dietary preferences or allergies that apply to you.Choose any dietary preferences or allergies that apply to you.",
      data: [
        { title: "🥬 Vegetarian", selected: false, isToggle: true },
        { title: "🌱 Vegan", selected: false, isToggle: true },
        { title: "🐟 Pescatarian", selected: false, isToggle: true },
        { title: "🥓 No pork", selected: false, isToggle: true },
        { title: "🚫 No fish", selected: false, isToggle: true },
        { title: "⚠️ Allergies", selected: false, isNext: true },
      ],
    },

    {
      type: "selection",
      title: "What Do You Like Eating?",
      des: "Select any types of meals you enjoy. we’ll use this to inspire your recipes this week",
      data: [
        { title: "🍽 Easy Dinners", selected: false },
        { title: "👨‍👩‍👧 Family-Friendly Meals", selected: false },
        { title: "🥗 Healthy Dinners", selected: false },
        { title: "🥒 Zucchini", selected: false },
        { title: "⚡ Quick Meals", selected: false },
        { title: "💪 High-Protein Meals", selected: false },
        { title: "🍲 Comfort Food", selected: false },
      ],
    },

    {
      type: "selection",
      title: "What kind Of Week Is It?",
      des: "What describes your week? This will apply to this week only.",
      data: [
        { title: "🟢 Normal", selected: false },
        { title: "⚡ Busy & Quick", selected: false },
        { title: "🥗 A Little Lighter", selected: false },
        { title: "🍲 Comfort Week", selected: false },
      ],
    },

    {
      type: "days",
      title: "How Many Days Do You Want To Cook This Week?",
      des: "You don’t have to cook every day.",
    },

    {
      type: "slider",
      data: [
        {
          key: "One",
          title: "Say Goodbye To What’s For Dinner?",
          des: "We plan your week so you don’t have to think about it.",
          image: images.dinner,
        },
        {
          key: "Two",
          title: "Plans That Move With You",
          des: "Busy day? Cravings changed? Update your meals anytime.",
          image: images.plans,
        },

        {
          key: "Three",
          title: "From List To Table, Simplified",
          des: "Smart grocery lists and step-by-step recipes make cooking easy.",
          image: images.receipes,
        },
      ],
    },

    {
      type: "swiper",
      title: "Taste Calibration",
      des: "This helps us pick meals you'll love.",
      label: "Swipe or tap to tell us what looks good",
      data: [
        {
          id: 1,
          title: "Balsamic Chicken Stir-Fry",
          image: images.planImg,
        },
        {
          id: 2,
          title: "tasty cookies with lemon",
          image: images.receipesImg,
        },
        {
          id: 3,
          title: "Chicken skewers with slices",
          image: images.dinnerImg,
        },
      ],
    },

    {
      type: "summary",
      title: "Summary",
      des: "Here’s what we’ll keep in mind for your weekly meal plan.",
      data: [
        {
          title: "Number Of People",
          des: "2 people",
          icon: (
            <PeopleIcon
              width={sizeHelper.calWp(45)}
              height={sizeHelper.calWp(45)}
            />
          ),
        },

        {
          title: "Cooking Skill Level",
          des: "Comfortable with recipes",
          icon: (
            <CookingIcon
              width={sizeHelper.calWp(45)}
              height={sizeHelper.calWp(45)}
            />
          ),
        },

        {
          title: "Avoids",
          des: "Mushrooms, bell peppers, seafood",
          icon: (
            <AvoidsIcon
              width={sizeHelper.calWp(45)}
              height={sizeHelper.calWp(45)}
            />
          ),
        },

        {
          title: "Week Type",
          des: "Busy & quick week",
          icon: (
            <ClockIcon
              width={sizeHelper.calWp(45)}
              height={sizeHelper.calWp(45)}
            />
          ),
        },

        {
          title: "Number Of Cooking Days",
          des: "5 cooking days",
          icon: (
            <DaysIcon
              width={sizeHelper.calWp(45)}
              height={sizeHelper.calWp(45)}
            />
          ),
        },
      ],
    },

    {
      type: "preparing",
      title: "Preparing your week",
      des: "This will just take a moment. We’re building your plan for 2 people.",
      data: [
        { title: "🍽 Selecting meals", isPreparing: true },
        { title: "📅 Balancing your week", isPreparing: true },
        { title: "🛒 Preparing shopping list", isPreparing: true },
      ],
    },
  ]);

  const onSlideChange = (index: any) => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setCurrentStep(index + 1);
  };

  const onSlideChangeSlideIndex = (index: any) => {
    setCurrentSlideIndex(index);
  };

  //   console.log("ckdnckdnckdc", onboardSteps[currentStep]?.data);
  return (
    <>
      <ScreenLayout>
        <View
          style={{
            flex: 1,
            paddingTop: sizeHelper.calHp(20),
          }}
        >
          <ProgressBar
            height={sizeHelper.calHp(50)}
            totalSteps={onboardSteps?.length}
            backButton={currentStep > 0}
            onBackPress={() => {
              setCurrentStep(currentStep - 1);
            }}
            currentStep={currentStep + 1}
          />

          <TouchableOpacity
            style={{
              alignItems: "flex-end",
            }}
          >
            <CustomText
              text={`Step ${currentStep + 1}`}
              size={25}
              style={{
                textAlign: "center",
              }}
              color={theme.colors.secondry}
              fontFam={fonts.OpenMedium}
              fontWeight={"600"}
            />
          </TouchableOpacity>
          {onboardSteps[currentStep]?.type == "slider" ? (
            <>
              <View
                style={{
                  paddingTop: sizeHelper.calHp(50),
                  backgroundColor: theme.colors.white,
                  borderRadius: sizeHelper.calWp(40),
                  elevation: 10,
                  shadowColor: theme.colors.heading + "50",
                  shadowOffset: { width: 1, height: 3 },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  marginTop: sizeHelper.calHp(40),
                  gap: sizeHelper.calHp(20),

                  //   backgroundColor: "red",
                  flex: 0.9,
                }}
              >
                <AppIntroSlider
                  renderItem={({ item }: any) => {
                    return (
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          gap: sizeHelper.calHp(30),
                        }}
                      >
                        <CustomText
                          text={item?.title}
                          size={35}
                          lineHeight={sizeHelper.calHp(50)}
                          style={{
                            textAlign: "center",
                            marginHorizontal: sizeHelper.calWp(150),
                          }}
                          fontFam={fonts.OpenBold}
                          color={theme.colors.heading}
                          fontWeight={"700"}
                        />
                        <CustomText
                          text={item?.des}
                          style={{
                            textAlign: "center",
                            marginHorizontal: sizeHelper.calWp(100),
                            // marginBottom: sizeHelper.calWp(70),
                          }}
                          size={23}
                          color={theme.colors.secondry}
                        />
                        <Image
                          style={{
                            width: "110%",
                            height: sizeHelper.calHp(500),
                            // resizeMode: "contain",
                          }}
                          source={item?.image}
                        />
                      </View>
                    );
                  }}
                  data={onboardSteps[currentStep]?.data}
                  ref={flatListRef}
                  onSlideChange={onSlideChangeSlideIndex}
                  showNextButton={false}
                  showDoneButton={false}
                  renderPagination={() => null} // Disable dots
                />

                <View
                  style={{
                    ...styles.dotsContainer,
                  }}
                >
                  {onboardSteps[currentStep]?.data.map((it: any, ind: any) => {
                    return (
                      <View
                        key={ind?.toString()}
                        style={{
                          backgroundColor:
                            currentSlideIndex == ind
                              ? theme.colors.primary
                              : "transparent",
                          borderRadius: 999,
                          overflow: "hidden",
                          padding: 1,
                        }}
                      >
                        <View
                          key={ind.toString()}
                          style={{
                            width:
                              currentSlideIndex == ind
                                ? sizeHelper.calWp(42)
                                : sizeHelper.calWp(19),
                            height: sizeHelper.calWp(19),
                            borderRadius: sizeHelper.calWp(19),
                            borderWidth: currentSlideIndex == ind ? 1 : -1,
                            borderColor: theme.colors.white,

                            backgroundColor:
                              currentSlideIndex == ind
                                ? theme.colors.primary
                                : theme.colors.light_green,
                          }}
                        />
                      </View>
                    );
                  })}
                </View>
                <View
                  style={{
                    padding: sizeHelper.calWp(35),
                    gap: sizeHelper.calHp(20),
                  }}
                >
                  <GradientButton
                    text={"Next"}
                    onPress={() => {
                      if (
                        currentSlideIndex ===
                        onboardSteps[currentStep]?.data.length - 1
                      ) {
                        onSlideChange(currentStep);

                        //   router.push("/auth/onboardSteps");
                      } else {
                        flatListRef.current?.goToSlide(currentSlideIndex + 1);
                        setCurrentSlideIndex(currentSlideIndex + 1);
                      }
                    }}
                  />

                  <CustomButton
                    textColor={theme.colors.secondry}
                    width={"100%"}
                    size={25}
                    text={"Skip"}
                    onPress={() => {
                      onSlideChange(currentStep);
                    }}
                    bgColor={"transparent"}
                  />
                </View>
              </View>
            </>
          ) : (
            <View
              style={{
                backgroundColor: theme.colors.white,
                borderRadius: sizeHelper.calWp(40),
                elevation: 10,
                shadowColor: theme.colors.heading + "50",
                shadowOffset: { width: 1, height: 3 },
                shadowOpacity: 0.3,
                shadowRadius: 5,

                marginTop: sizeHelper.calHp(40),
                padding: sizeHelper.calWp(35),
                gap: sizeHelper.calHp(20),
              }}
            >
              {onboardSteps[currentStep]?.title && (
                <Animated.View
                  style={{
                    opacity: animation,
                  }}
                >
                  <CustomText
                    text={onboardSteps[currentStep]?.title}
                    size={35}
                    // lineHeight={sizeHelper.calHp(50)}
                    style={{
                      textAlign: "center",
                      marginHorizontal: sizeHelper.calWp(70),
                      marginTop: sizeHelper.calHp(20),
                    }}
                    fontFam={fonts.OpenBold}
                    color={theme.colors.heading}
                    fontWeight={"700"}
                  />
                </Animated.View>
              )}
              <Animated.View
                style={{ gap: sizeHelper.calHp(10), opacity: animation }}
              >
                {onboardSteps[currentStep]?.des && (
                  <CustomText
                    text={onboardSteps[currentStep]?.des}
                    style={{
                      textAlign: "center",
                      marginHorizontal: sizeHelper.calWp(50),
                    }}
                    size={23}
                    color={theme.colors.secondry}
                  />
                )}

                {onboardSteps[currentStep]?.label && (
                  <CustomText
                    text={onboardSteps[currentStep]?.label}
                    style={{
                      textAlign: "center",
                      marginHorizontal: sizeHelper.calWp(50),
                    }}
                    size={21}
                    color={theme.colors.grey100}
                  />
                )}
              </Animated.View>

              <Animated.View
                style={{
                  gap: sizeHelper.calHp(15),
                  marginTop: sizeHelper.calHp(20),
                  opacity: animation,
                }}
              >
                {onboardSteps[currentStep]?.type === "summary" && (
                  <View style={{ gap: sizeHelper.calHp(20) }}>
                    {onboardSteps[currentStep]?.data.map(
                      (it: any, ind: any) => {
                        return (
                          <View
                            style={{ gap: sizeHelper.calHp(20) }}
                            key={ind.toString()}
                          >
                            <View
                              style={{
                                ...appStyles.row,
                                gap: sizeHelper.calWp(20),
                              }}
                            >
                              <View
                                style={{
                                  padding: sizeHelper.calWp(30),
                                  backgroundColor: theme.colors.thin_green,
                                  alignItems: "center",
                                  justifyContent: "center",
                                  borderRadius: sizeHelper.calWp(23),
                                }}
                              >
                                {it.icon}
                              </View>

                              <View style={{ gap: sizeHelper.calHp(10) }}>
                                <CustomText
                                  text={it.title}
                                  size={25}
                                  // lineHeight={sizeHelper.calHp(50)}

                                  fontFam={fonts.OpenBold}
                                  color={theme.colors.heading}
                                  fontWeight={"700"}
                                />
                                <CustomText
                                  text={it.des}
                                  size={23}
                                  color={theme.colors.secondry}
                                />
                              </View>
                            </View>
                            {onboardSteps[currentStep]?.data.length - 1 !==
                              ind && (
                              <View
                                style={{
                                  width: "100%",
                                  height: 1,
                                  backgroundColor: theme.colors.border,
                                }}
                              />
                            )}
                          </View>
                        );
                      },
                    )}
                  </View>
                )}
                {["selection", "preparing"].includes(
                  onboardSteps[currentStep]?.type,
                ) && (
                  <>
                    {onboardSteps[currentStep]?.data.map(
                      (it: any, ind: any) => {
                        return (
                          <TouchableOpacity
                            key={ind.toString()}
                            style={{
                              width: "100%",
                              height: sizeHelper.calHp(78),
                              padding: sizeHelper.calWp(24),
                              // Use 0 to hide the border — negative values are invalid
                              borderWidth: it.selected && !it?.isToggle ? 0 : 1,
                              borderColor:
                                it.selected && !it?.isToggle
                                  ? "transparent"
                                  : theme.colors.border,
                              backgroundColor:
                                it.selected && !it?.isToggle
                                  ? "#EFF9F0"
                                  : theme.colors.white,
                              flexDirection: "row",
                              borderRadius: sizeHelper.calWp(20),

                              justifyContent: "space-between",
                            }}
                            disabled={it?.isPreparing}
                            onPress={() => {
                              const updatedSteps: any = [...onboardSteps];
                              updatedSteps[currentStep].data[ind].selected =
                                !updatedSteps[currentStep].data[ind].selected;
                              setOnboardSteps(updatedSteps);
                            }}
                          >
                            <CustomText
                              text={it.title}
                              size={25}
                              fontFam={
                                it.selected && !it?.isToggle
                                  ? fonts.OpenBold
                                  : fonts.OpenMedium
                              }
                              color={
                                it.selected && !it?.isToggle
                                  ? theme.colors.heading
                                  : theme.colors.secondry
                              }
                              fontWeight={
                                it.selected && !it?.isToggle ? "700" : "600"
                              }
                            />
                            {it?.isToggle ? (
                              <AnimatedToggle
                                isOn={it.selected}
                                onToggle={() => {
                                  const updatedSteps: any = [...onboardSteps];
                                  updatedSteps[currentStep].data[ind].selected =
                                    !updatedSteps[currentStep].data[ind]
                                      .selected;
                                  setOnboardSteps(updatedSteps);
                                }}
                              />
                            ) : (
                              <>
                                {((it.selected &&
                                  !it?.isToggle &&
                                  !it?.isNext) ||
                                  it?.isPreparing) && (
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

                            {it?.isNext && (
                              <>
                                <TouchableOpacity
                                  activeOpacity={0.6}
                                  onPress={() => {
                                    AllergiesSheetRef.current.present();
                                  }}
                                >
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
                        );
                      },
                    )}
                  </>
                )}
                {onboardSteps[currentStep]?.type === "days" && (
                  <DraggableSelector />
                )}

                {onboardSteps[currentStep]?.type === "swiper" && (
                  <View style={{ height: "70%" }}>
                    <SwipeCards
                      cardsData={onboardSteps[currentStep]?.data}
                      onNext={() => {
                        onSlideChange(currentStep);
                      }}
                    />
                  </View>
                  //   <DraggableSelector />
                )}
              </Animated.View>
            </View>
          )}
        </View>
        {onboardSteps[currentStep]?.type != "slider" && (
          <View
            style={{
              paddingBottom: sizeHelper.calWp(60),
              gap: sizeHelper.calHp(20),
            }}
          >
            <GradientButton
              text={"Continue"}
              onPress={() => {
                onSlideChange(currentStep);
              }}
            />
            {["summary", "preparing"].includes(
              onboardSteps[currentStep]?.type,
            ) && (
              <CustomText
                text={"Everything can be changed later"}
                size={25}
                style={{ textAlign: "center" }}
                // lineHeight={sizeHelper.calHp(50)}

                fontFam={fonts.OpenSemiBold}
                color={theme.colors.secondry}
                fontWeight={"600"}
              />
            )}
          </View>
        )}
      </ScreenLayout>

      <CustomBottomSheet
        snapPoints={AllergiesSheetRefSnapPoints}
        bottomSheetModalRef={AllergiesSheetRef}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: sizeHelper.calWp(35),
            gap: sizeHelper.calHp(30),
          }}
        >
          <View style={appStyles.rowjustify}>
            <CustomText
              text={"Allergies & ingredients to avoid"}
              size={28}
              fontFam={fonts.OpenBold}
              color={theme.colors.secondry}
              fontWeight={"700"}
            />
            <TouchableOpacity
              onPress={() => {
                AllergiesSheetRef.current.dismiss();
              }}
              style={{
                padding: sizeHelper.calWp(25),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 9999,
                backgroundColor: "#FFF3E8",
              }}
            >
              <CrossIcon
                width={sizeHelper.calWp(24)}
                height={sizeHelper.calWp(24)}
              />
            </TouchableOpacity>
          </View>
          <CustomSearch placeholder="Search allergies or ingredients" />
          <View style={{ gap: sizeHelper.calHp(20) }}>
            <CustomText
              text={"Common allergens"}
              size={28}
              fontFam={fonts.OpenBold}
              color={theme.colors.secondry}
              fontWeight={"700"}
            />
            <View
              style={{
                ...appStyles.row,
                flexWrap: "wrap",
                gap: sizeHelper.calWp(20),
              }}
            >
              {commonAllergens.map((it: any, ind) => {
                return (
                  <CustomButton
                    key={ind.toString()}
                    borderWidth={1}
                    height={70}
                    borderColor={
                      it?.selected ? theme.colors.orange : theme.colors.border
                    }
                    bgColor={"transparent"}
                    textColor={
                      it?.selected ? theme.colors.orange : theme.colors.secondry
                    }
                    onPress={() => {
                      const updatedCommonAllergens: any = [...commonAllergens];
                      updatedCommonAllergens[ind].selected =
                        !updatedCommonAllergens[ind].selected;
                      setCommonAllergens(updatedCommonAllergens);
                    }}
                    paddingHorizontal={sizeHelper.calWp(30)}
                    text={it?.title}
                  />
                );
              })}
            </View>

            <View style={{ gap: sizeHelper.calHp(15) }}>
              {allergensColor.map((it: any, ind) => {
                return (
                  <SelectionCard
                    key={ind.toString()}
                    item={it}
                    index={ind}
                    onSelect={() => {
                      const updatedAllergensColor: any = [...allergensColor];
                      updatedAllergensColor[ind].selected =
                        !updatedAllergensColor[ind].selected;
                      setAllergensColor(updatedAllergensColor);
                    }}
                  />
                );
              })}
            </View>
          </View>
          <View style={{ ...appStyles.rowjustify, marginTop: "25%" }}>
            <CustomButton
              textColor={theme.colors.secondry}
              text={"Skip for now"}
              onPress={() => {
                AllergiesSheetRef.current.dismiss();
              }}
              bgColor={"transparent"}
            />

            <GradientButton
              width={"48%"}
              text={"Save"}
              onPress={() => {
                AllergiesSheetRef.current.dismiss();
              }}
            />
          </View>
        </View>
      </CustomBottomSheet>
    </>
  );
};
export default OnboardStepsScreen;

const styles = StyleSheet.create({
  dots: {
    width: sizeHelper.calWp(13),
    height: sizeHelper.calWp(13),
    borderRadius: sizeHelper.calWp(13),
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(10),
    alignSelf: "center",
  },
});
