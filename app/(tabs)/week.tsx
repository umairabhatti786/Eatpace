import ScreenLayout from "@/components/ScreenLayout";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "@/components/Text";
import CustomButton from "@/components/Button";
import { fonts } from "@/utils/fonts";
import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import { appStyles } from "@/utils/globalStyles";
import LineIcon from "../../assets/svgs/line.svg";
import UserIcon from "../../assets/svgs/user.svg";
import ShoppingIcon from "../../assets/svgs/shopping.svg";
import GrowingIcon from "../../assets/svgs/growing.svg";
import PeoplesIcon from "../../assets/svgs/peoples.svg";
import NextIcon from "../../assets/svgs/next.svg";
import CalendarIcon from "../../assets/svgs/calendar.svg";
import RecipesCard from "@/components/RecipesCard";
import { images } from "@/utils/Images";
import InspirationCard from "@/components/InspirationCard";
import WeeknightCard from "@/components/WeeknightCard";
import GradientButton from "@/components/GradientButton";
import ProgressBar from "@/components/ProgressBar";
import TimerIcon from "../../assets/svgs/timer.svg";
import HeartIcon from "../../assets/svgs/heart.svg";
import RefreshIcon from "../../assets/svgs/refresh.svg";
import LikeIcon from "../../assets/svgs/like.svg";
import { useMemo, useRef, useState } from "react";
import CustomBottomSheet from "@/components/BottomSheet";
import CrossIcon from "../../assets/svgs/cross.svg";
import TrashIcon from "../../assets/svgs/trash.svg";
import NextArrowIcon from "../../assets/svgs/nextArrow.svg";
import MealCooked from "../../assets/svgs/mealCooked.svg";
import SwapsIcon from "../../assets/svgs/swaps.svg";
import IngredientsIcon from "../../assets/svgs/ingredients.svg";

const WeekScreen = ({ navigation }: any) => {
  const router: any = useRouter();
  const ChangeMealRefSnapPoints = useMemo(() => ["80%"], []);
  const ChangeMealSheetRef = useRef<any>(null);
  const [isEndOfWeek, setIsEndOfWeek] = useState(false);

  const InspirationData = [
    {
      title: "Quick & Easy",
      img: images.quick_easy,
      colors: ["#789FD350", "#6A95CF50"],
    },
    {
      title: "New Recipes",
      img: images.high_protein,
      colors: ["#F8637650", "#FE465D50"],
    },
    {
      title: "High Protein",
      img: images.high_protein,
      colors: ["#FF9D4550", "#EB7E1D50"],
    },
  ];

  const ChangeMealData = [
    {
      title: "Similar Meal",
      img: images.creamy_chicken,
      des: "Pesto Chicken With Roasted Veggies",
    },
    {
      title: "Faster",
      img: images.garlic_pasta,
      des: "Chicken Stir-Fry",
    },
    {
      title: "Lighter",
      img: images.pan_seared_chicken,
      des: "Lemon Herb Shrimp Salad",
    },

    {
      title: "Totally Different",
      img: images.creamy_pasta,
      des: "Beef Burrito Bowls",
    },
  ];

  const WeekRecipesData = [
    {
      days: "Web",
      title: "Veggie Tacoc",
      IsSwipe: true,
      img: images.veggie_tacoc,
    },
    {
      days: "Thu",
      title: "Chicken Curry",
      IsSwipe: true,
      img: images.chicken_curry,
    },
    {
      days: "Thu",
      title: "Creamy Pesto Pasta",
      IsSwipe: true,
      img: images.creamy_pasta,
    },
  ];
  const WeeknightData = [
    {
      time: "20 Mins",
      title: "Creamy Tuscan Chicken",
      img: images.creamy_chicken,
    },
    { time: "10 Mins", title: "Garlic Shrimp Pasta", img: images.garlic_pasta },
  ];

  const ListSectionHeader = ({ title, label }: any) => {
    return (
      <View
        style={{ ...appStyles.rowjustify, paddingTop: sizeHelper.calHp(20) }}
      >
        <CustomText
          text={title}
          size={28}
          fontFam={fonts.OpenBold}
          fontWeight={"700"}
          color={theme.colors.heading}
        />

        <TouchableOpacity>
          <CustomText
            text={label}
            textDecorationLine={"underline"}
            size={26}
            color={theme.colors.light_grey}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const WeekEndMeal = [
    { title: "Meals cooked", icon: <MealCooked />, quantity: "5" },
    { title: "Swaps made", icon: <SwapsIcon />, quantity: "3" },
    { title: "Ingredients used", icon: <IngredientsIcon />, quantity: "2" },
  ];

  return (
    <>
      <ScreenLayout paddingHorizontal={-0.1}>
        <ScrollView
          contentContainerStyle={{
            gap: sizeHelper.calHp(30),
            paddingBottom: sizeHelper.calHp(80),
          }}
        >
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(35),
              width: "100%",
              gap: sizeHelper.calHp(30),
            }}
          >
            {/* row contains text block and icon; left block grows to push icon right */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {isEndOfWeek ? (
                <View style={{ flex: 1 }}>
                  <View style={{ ...appStyles.row }}>
                    <CustomText
                      text={"Nice"}
                      size={38}
                      fontFam={fonts.OpenBold}
                      fontWeight={"700"}
                      color={theme.colors.heading}
                    />

                    <View>
                      <CustomText
                        text={"Work this"}
                        size={38}
                        style={{ marginLeft: sizeHelper.calWp(10) }}
                        fontFam={fonts.OpenBold}
                        fontWeight={"700"}
                        color={theme.colors.primary}
                      />

                      <LineIcon width={sizeHelper.calWp(210)} />
                    </View>

                    <CustomText
                      text={"Week"}
                      size={38}
                      style={{ marginLeft: sizeHelper.calWp(10) }}
                      fontFam={fonts.OpenBold}
                      fontWeight={"700"}
                      color={theme.colors.heading}
                    />
                  </View>

                  <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                    <CustomText
                      text={"Week 👏"}
                      size={38}
                      style={{ fontStyle: "italic" }}
                      color={theme.colors.heading}
                    />
                  </View>
                </View>
              ) : (
                <View style={{ flex: 1 }}>
                  <View style={{ ...appStyles.row }}>
                    <CustomText
                      text={"Your"}
                      size={38}
                      fontFam={fonts.OpenBold}
                      fontWeight={"700"}
                      color={theme.colors.heading}
                    />

                    <View style={{ alignItems: "flex-end" }}>
                      <CustomText
                        text={"Buys & Fast"}
                        size={38}
                        fontFam={fonts.OpenBold}
                        fontWeight={"700"}
                        color={theme.colors.primary}
                      />

                      <LineIcon />
                    </View>

                    <CustomText
                      text={"Week"}
                      size={38}
                      style={{ marginLeft: sizeHelper.calWp(10) }}
                      fontFam={fonts.OpenBold}
                      fontWeight={"700"}
                      color={theme.colors.heading}
                    />
                  </View>

                  <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                    <CustomText
                      text={"Is"}
                      size={38}
                      fontFam={fonts.OpenBold}
                      fontWeight={"700"}
                      color={theme.colors.heading}
                    />

                    <CustomText
                      text={"Ready"}
                      size={38}
                      style={{ fontStyle: "italic" }}
                      color={theme.colors.heading}
                    />
                  </View>
                </View>
              )}

              <TouchableOpacity
                onPress={() => router.push("/main/profile")}
                activeOpacity={0.6}
                style={{
                  ...appStyles.appShadow,

                  height: sizeHelper.calHp(80),
                  width: sizeHelper.calWp(100),
                  backgroundColor: theme.colors.white,
                  borderRadius: sizeHelper.calWp(25),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <UserIcon
                  width={sizeHelper.calWp(55)}
                  height={sizeHelper.calWp(55)}
                />
              </TouchableOpacity>

              {/* no additional spacer view needed */}
            </View>
            {isEndOfWeek ? (
              <>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => router.push("/main/recipeDetail")}
                  style={{
                    backgroundColor: theme.colors.white,
                    borderRadius: sizeHelper.calWp(45),
                    padding: sizeHelper.calWp(30),
                    gap: sizeHelper.calHp(20),
                    ...appStyles.appShadow,
                  }}
                >
                  <CustomText
                    text={
                      "You cooked 5 meals and made 3 adjustments last week. Great job!"
                    }
                    size={24}
                    style={{ textAlign: "center" }}
                    color={theme.colors.secondry}
                  />
                  <View
                    style={{
                      borderRadius: sizeHelper.calWp(40),
                      backgroundColor: theme.colors.icons_bg,
                      padding: sizeHelper.calWp(30),
                      gap: sizeHelper.calHp(30),
                    }}
                  >
                    {WeekEndMeal.map((item, index) => {
                      return (
                        <View style={{ gap: sizeHelper.calHp(30) }}>
                          <View style={appStyles.rowjustify}>
                            <View
                              style={{
                                ...appStyles.row,
                                gap: sizeHelper.calWp(20),
                              }}
                            >
                              {item?.icon}

                              <CustomText
                                text={item?.title}
                                color={theme.colors.heading}
                                size={27}
                              />
                            </View>
                            <CustomText
                              text={item?.quantity}
                              color={theme.colors.heading}
                              size={27}
                              fontWeight={"700"}
                              fontFam={fonts.OpenBold}
                            />
                          </View>
                          {WeekEndMeal.length - 1 != index && (
                            <View
                              style={{
                                width: "100%",
                                height: 1,
                                backgroundColor: "#FFE2C8",
                              }}
                            />
                          )}
                        </View>
                      );
                    })}
                  </View>
                  <View
                    style={{
                      gap: sizeHelper.calHp(20),
                      padding: sizeHelper.calWp(10),
                    }}
                  >
                    <GradientButton
                      text={"Generate a new week"}
                      onPress={() => setIsEndOfWeek(false)}
                    />
                    <TouchableOpacity style={{ alignSelf: "center" }}>
                      <CustomText
                        text={"Repeat Last Week"}
                        color={theme.colors.orange}
                        size={27}
                        textDecorationLine={"underline"}
                        fontWeight={"700"}
                        fontFam={fonts.OpenBold}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </>
            ) : (
              <View style={{ gap: sizeHelper.calHp(30), flex: 1 }}>
                <View
                  style={{
                    ...appStyles.row,
                    gap: sizeHelper.calWp(100),
                    backgroundColor: theme.colors.white,
                    borderRadius: 999,
                    paddingHorizontal: sizeHelper.calWp(20),
                    paddingVertical: sizeHelper.calHp(10),
                    alignSelf: "flex-start",
                  }}
                >
                  <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                    <View style={{ gap: sizeHelper.calHp(5) }}>
                      <PeoplesIcon
                        width={sizeHelper.calWp(35)}
                        height={sizeHelper.calWp(35)}
                      />
                      <View style={appStyles.line} />
                    </View>

                    <CustomText
                      text={"2 People"}
                      size={23}
                      color={theme.colors.heading}
                    />
                  </View>

                  <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                    <CustomButton
                      text={"$"}
                      size={25}
                      height={32}
                      paddingHorizontal={6}
                      fontFam={fonts.OpenBold}
                      fontWeight={"700"}
                      borderRadius={9}
                      bgColor={theme.colors.orange200}
                    />

                    <CustomText
                      text={"$80 Budget"}
                      size={23}
                      color={theme.colors.heading}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => setIsEndOfWeek(!isEndOfWeek)}
                  style={{
                    ...appStyles.row,
                    gap: sizeHelper.calWp(5),
                    backgroundColor: "#6FD98230",
                    borderRadius: sizeHelper.calWp(20),
                    paddingHorizontal: sizeHelper.calWp(20),
                    paddingVertical: sizeHelper.calHp(10),
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <CustomText
                    text={"Not quite your taste?"}
                    size={23}
                    color={theme.colors.heading}
                  />
                  <CustomText
                    text={"Adjust this week"}
                    size={23}
                    fontWeight={"600"}
                    fontFam={fonts.OpenSemiBold}
                    color={theme.colors.black100}
                  />
                  <NextIcon
                    width={sizeHelper.calWp(40)}
                    height={sizeHelper.calWp(45)}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    gap: sizeHelper.calHp(20),
                  }}
                >
                  <View
                    style={{
                      ...appStyles.rowjustify,
                      paddingTop: sizeHelper.calHp(20),
                    }}
                  >
                    <CustomText
                      text={"Tonight’s Dinner"}
                      size={28}
                      fontFam={fonts.OpenBold}
                      fontWeight={"700"}
                      color={theme.colors.heading}
                    />

                    <View
                      style={{
                        ...appStyles.row,
                        gap: sizeHelper.calWp(15),
                        backgroundColor: "#FFF6ED",
                        borderRadius: 999,
                        paddingHorizontal: sizeHelper.calWp(30),
                        paddingVertical: sizeHelper.calHp(10),
                        justifyContent: "center",
                      }}
                    >
                      <CalendarIcon
                        width={sizeHelper.calWp(40)}
                        color={theme.colors.orange200}
                        height={sizeHelper.calWp(45)}
                      />

                      <CustomText
                        text={"Tuesday, July 6"}
                        size={23}
                        color={theme.colors.heading}
                      />
                    </View>
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => router.push("/main/recipeDetail")}
                    style={{
                      backgroundColor: theme.colors.white,
                      borderRadius: sizeHelper.calWp(30),
                      padding: sizeHelper.calWp(20),
                      gap: sizeHelper.calHp(20),
                      ...appStyles.appShadow,
                    }}
                  >
                    <View
                      style={{
                        height: sizeHelper.calHp(300),
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        source={images.pan_seared_chicken}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderTopLeftRadius: sizeHelper.calWp(40),
                          borderTopRightRadius: sizeHelper.calWp(40),
                        }}
                      />

                      <View
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          backgroundColor: theme.colors.black100 + "30",
                          padding: sizeHelper.calWp(20),
                          borderTopLeftRadius: sizeHelper.calWp(40),
                          borderTopRightRadius: sizeHelper.calWp(40),
                        }}
                      >
                        <View style={appStyles.rowjustify}>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-between",
                              paddingHorizontal: sizeHelper.calWp(15),
                              paddingVertical: sizeHelper.calHp(9),
                              borderRadius: 999,
                              backgroundColor: theme.colors.white,
                              alignSelf: "flex-start",
                              alignItems: "center",
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
                              text={"140Kcal"}
                              size={21}
                              color={theme.colors.black100}
                            />
                          </View>

                          <TouchableOpacity style={appStyles.circle}>
                            <HeartIcon
                              width={sizeHelper.calWp(35)}
                              height={sizeHelper.calWp(35)}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        gap: sizeHelper.calHp(20),
                        padding: sizeHelper.calWp(10),
                      }}
                    >
                      <CustomText
                        text={"Pan-Seared Chicken & Asparagus"}
                        size={28}
                        fontFam={fonts.OpenBold}
                        fontWeight={"700"}
                        color={theme.colors.heading}
                      />

                      <View
                        style={{
                          ...appStyles.row,
                          gap: sizeHelper.calWp(20),
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
                            color={theme.colors.secondry}
                            size={22}
                            fontWeight={"600"}
                            fontFam={fonts.OpenMedium}
                          />
                        </View>

                        <View
                          style={{
                            width: sizeHelper.calWp(20),
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
                          <GrowingIcon
                            width={sizeHelper.calWp(33)}
                            height={sizeHelper.calWp(33)}
                            color={theme.colors.orange}
                          />
                          <CustomText
                            text={"Simple & Fast"}
                            color={theme.colors.secondry}
                            size={22}
                            fontWeight={"600"}
                            fontFam={fonts.OpenMedium}
                          />
                        </View>
                      </View>

                      <View
                        style={{
                          ...appStyles.row,
                          gap: sizeHelper.calWp(20),
                        }}
                      >
                        <GradientButton
                          text={"Looks Good"}
                          height={70}
                          width={"50%"}
                          onPress={() => router?.push("/main/")}
                        >
                          <LikeIcon
                            width={sizeHelper.calWp(35)}
                            height={sizeHelper.calWp(35)}
                          />
                        </GradientButton>
                        <GradientButton
                          colors={["#8ED36020", "#56C26920"]}
                          text={"Change"}
                          textColor={theme.colors.primary}
                          width={"43%"}
                          height={70}
                          onPress={() => ChangeMealSheetRef.current.present()}
                        >
                          <RefreshIcon
                            width={sizeHelper.calWp(35)}
                            height={sizeHelper.calWp(35)}
                          />
                        </GradientButton>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>

          {!isEndOfWeek && (
            <View
              style={{
                gap: sizeHelper.calHp(20),
              }}
            >
              <View
                style={{
                  paddingHorizontal: sizeHelper.calWp(35),
                }}
              >
                <ListSectionHeader
                  label={"See All"}
                  title={"Rest Of The Week"}
                />
              </View>

              <FlatList
                data={WeekRecipesData}
                horizontal
                contentContainerStyle={{
                  gap: sizeHelper.calWp(15),
                  paddingHorizontal: sizeHelper.calWp(35),
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }: any) => {
                  return <RecipesCard item={item} />;
                }}
              />
            </View>
          )}

          <View
            style={{
              gap: sizeHelper.calHp(20),
            }}
          >
            <View
              style={{
                paddingHorizontal: sizeHelper.calWp(35),
              }}
            >
              <ListSectionHeader label={"See All"} title={"Inspiration"} />
            </View>

            <FlatList
              data={InspirationData}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: sizeHelper.calWp(15),
                paddingHorizontal: sizeHelper.calWp(35),
              }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }: any) => {
                return <InspirationCard item={item} />;
              }}
            />
          </View>

          <View
            style={{
              gap: sizeHelper.calHp(20),
            }}
          >
            <View
              style={{
                paddingHorizontal: sizeHelper.calWp(35),
              }}
            >
              <ListSectionHeader label={"See All"} title={"Weeknight Go-Tos"} />
            </View>

            <FlatList
              data={WeeknightData}
              horizontal
              contentContainerStyle={{
                gap: sizeHelper.calWp(25),
                paddingHorizontal: sizeHelper.calWp(35),
              }}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }: any) => {
                return <WeeknightCard item={item} />;
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: sizeHelper.calWp(35),
              height: sizeHelper.calHp(200),
              gap: sizeHelper.calHp(30),
            }}
          >
            <Image
              style={{
                width: "100%",
                height: sizeHelper.calHp(200),
                borderRadius: sizeHelper.calWp(40),
                position: "absolute",
                alignSelf: "center",
              }}
              source={images.shopping_background}
            />
            <View
              style={{
                padding: sizeHelper.calWp(35),
                gap: sizeHelper.calHp(30),
              }}
            >
              <View style={{ ...appStyles.rowjustify }}>
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{
                      height: sizeHelper.calHp(100),
                      width: sizeHelper.calWp(120),
                      backgroundColor: "#FFE4CC",
                      borderRadius: sizeHelper.calWp(25),
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ShoppingIcon
                      width={sizeHelper.calWp(60)}
                      height={sizeHelper.calWp(60)}
                    />
                  </TouchableOpacity>

                  <View style={{ gap: sizeHelper.calHp(10) }}>
                    <CustomText
                      text={"Shopping List"}
                      size={27}
                      fontFam={fonts.OpenBold}
                      fontWeight={"700"}
                      color={theme.colors.heading}
                    />
                    <CustomText
                      text={"4/12 items ready"}
                      size={21}
                      color={theme.colors.heading}
                    />
                  </View>
                </View>
                <GradientButton
                  text={"View"}
                  width={sizeHelper.calWp(155)}
                  height={57}
                  colors={["#FC9F4C", "#D87D2C"]}
                  borderRadius={sizeHelper.calWp(40)}
                />
              </View>

              <ProgressBar
                totalSteps={12}
                ProgressColor={theme.colors.orange}
                currentStep={5}
              />
            </View>
          </View>
        </ScrollView>
      </ScreenLayout>

      <CustomBottomSheet
        snapPoints={ChangeMealRefSnapPoints}
        bottomSheetModalRef={ChangeMealSheetRef}
      >
        <View
          style={{
            flex: 1,
            gap: sizeHelper.calHp(30),
          }}
        >
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(35),
            }}
          >
            <View />
            <CustomText
              text={"Change Meal"}
              size={40}
              fontFam={fonts.OpenBold}
              color={theme.colors.secondry}
              fontWeight={"700"}
            />
            <TouchableOpacity
              onPress={() => {
                ChangeMealSheetRef.current.dismiss();
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

          <CustomText
            text={
              "Choose a different recipe instead of Lemon Garlic Chicken with Roasted Veggies."
            }
            size={25}
            style={{ textAlign: "center" }}
            color={theme.colors.secondry}
          />

          <FlatList
            data={ChangeMealData}
            contentContainerStyle={{
              gap: sizeHelper.calWp(30),
              padding: sizeHelper.calWp(35),
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }: any) => {
              return (
                <>
                  <TouchableOpacity
                    style={{
                      ...appStyles.appShadow,
                      padding: sizeHelper.calWp(30),
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: theme.colors.white,
                      borderRadius: sizeHelper.calWp(30),
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: sizeHelper.calWp(20),
                      }}
                    >
                      <Image
                        style={{
                          width: sizeHelper.calWp(130),
                          height: sizeHelper.calWp(130),
                          borderRadius: sizeHelper.calWp(30),
                        }}
                        source={item?.img}
                      />
                      <View
                        style={{
                          gap: sizeHelper.calHp(20),
                          padding: sizeHelper.calWp(15),
                        }}
                      >
                        <CustomText
                          text={item?.title}
                          size={27}
                          fontFam={fonts.OpenBold}
                          color={theme.colors.secondry}
                          fontWeight={"700"}
                        />

                        <CustomText
                          text={item?.des}
                          color={theme.colors.secondry}
                        />
                      </View>
                    </View>

                    <NextArrowIcon
                      width={sizeHelper.calWp(35)}
                      height={sizeHelper.calWp(35)}
                      color={theme.colors.greyIcon}
                    />
                  </TouchableOpacity>
                </>
              );
            }}
          />
          <View style={{ paddingHorizontal: sizeHelper.calWp(35) }}>
            <GradientButton
              text={"Remove For This Day"}
              size={27}
            >
              <TrashIcon
                width={sizeHelper.calWp(35)}
                height={sizeHelper.calWp(35)}
                color={theme.colors.white}
              />
            </GradientButton>
          </View>
        </View>
      </CustomBottomSheet>
    </>
  );
};
export default WeekScreen;

const styles = StyleSheet.create({});
