import ScreenLayout from "@/components/ScreenLayout";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "@/components/Text";
import CustomButton from "@/components/Button";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { fonts } from "@/utils/fonts";
import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import { appStyles } from "@/utils/globalStyles";

import { images } from "@/utils/Images";
import {useState } from "react";
import MainHeader from "@/components/MainHeader";
import { WINDOW_WIDTH } from "@gorhom/bottom-sheet";
import ProgressBar from "@/components/ProgressBar";
import CheckBox from "@/components/CheckBox";
import { SwipeListView } from "react-native-swipe-list-view";
import TrashIcon from "../../assets/svgs/trash.svg";
import SwipeIcon from "../../assets/svgs/swipe.svg";
import TickIcon from "../../assets/svgs/tick.svg";

const ListScreen = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const rowSwipeAnimatedValues = useSharedValue(0);

  const [produceData, setProduceData] = useState([
    { title: "4 cups broccoli florets", selected: false },
    { title: "3 cups baby potatoes, halved", selected: false },
    { title: "1 lemon", selected: false },
    { title: "4 cloves garlic", selected: false },
  ]);

  const [proteinData, setProteinData] = useState([
    { title: "4 boneless, skinless chicken breasts", selected: false },
    { title: "1lb salmon fillet", selected: false },
    { title: "1 cup milk", selected: false },
    { title: "1//2 cup heavy cream", selected: false },
  ]);

  const MealData = [
    {
      title: "Pesto Pasta",
      img: images.creamy_chicken,
      quantity: "2 Servings",
    },
    {
      title: "Creamy Tuscan Chicken",
      img: images.garlic_pasta,
      quantity: "2 Servings",
    },
    {
      title: "Chicken Fajita Bowls",
      img: images.pan_seared_chicken,
      quantity: "2 Servings",
    },

    {
      title: "chicken & asparagus",
      img: images.creamy_pasta,
      quantity: "2 Servings",
    },
  ];
  const ShoppingCheckCard = ({ title, onToggle, selected }: any) => {
    return (
      <View
        style={{
          ...appStyles.row,
          gap: sizeHelper.calWp(20),
        }}
      >
        <CheckBox isChecked={selected} onCheck={onToggle} />

        <CustomText
          text={title}
          size={27}
          fontFam={fonts.OpenSemiBold}
          fontWeight={"600"}
          color={theme.colors.secondry}
        />
      </View>
    );
  };

  const onSwipeValueChange = (swipeData: any) => {
    const { key, value } = swipeData;
    rowSwipeAnimatedValues.value = Math.abs(value); // Correct way to update shared values in Reanimated
  };

  const MealHiddenCard = ({ onSwipe, item, onPress }: any) => {
    return (
      <>
        <TouchableOpacity
          onPress={onPress}
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            alignSelf: "flex-end",
            backgroundColor: "#FFEDDD",
            height: "99%",
            width: "100%",
            paddingHorizontal: sizeHelper.calWp(10),
            borderRadius: sizeHelper.calWp(40),
          }}
        >
          <View
            style={{
              height: "100%",
              justifyContent: "space-between",
              padding: sizeHelper.calHp(20),
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              // style={{padding:sizeHelper.calWp(10)}}
              onPress={onPress}
            >
              <TrashIcon
                width={sizeHelper.calWp(40)}
                height={sizeHelper.calWp(40)}
                color={theme.colors.orange}
              />
            </TouchableOpacity>
            <View
              style={{
                width: sizeHelper.calWp(80),
                height: 1,
                backgroundColor: "#FFE2C8",
              }}
            />

            <TouchableOpacity
              onPress={onPress}
            >
              <SwipeIcon
                width={sizeHelper.calWp(45)}
                height={sizeHelper.calWp(45)}
                color={theme.colors.orange}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <ScreenLayout paddingHorizontal={-0.1}>
        <View
          style={{
            paddingHorizontal: sizeHelper.calWp(35),
            gap: sizeHelper.calHp(30),
          }}
        >
          <MainHeader title={"Shopping List"} />

          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1.5,
              borderColor: theme.colors.border,
              height: sizeHelper.calHp(70),
            }}
          >
            {["Meal Summary", "Grocery List"].map((item, index) => {
              const isActive = activeTab === index;

              return (
                <View>
                  <TouchableOpacity
                    key={index}
                    onPress={() => setActiveTab(index)}
                    style={styles.tab}
                    activeOpacity={0.7}
                  >
                    <CustomText
                      text={item}
                      color={
                        isActive ? theme.colors.primary : theme.colors?.secondry
                      }
                      fontFamily={isActive ? fonts.OpenBold : fonts.OpenMedium}
                      fontWeight={isActive ? "700" : "600"}
                      size={27}
                    />
                  </TouchableOpacity>

                  <View
                    style={{
                      ...styles.activeIndicator,
                      // marginTop:sizeHelper.calHp(16),

                      backgroundColor: isActive
                        ? theme.colors.primary
                        : "transparent",
                    }}
                  />
                </View>
              );
            })}
          </View>
        </View>

        {activeTab == 0 && (
          <View style={{ flex: 1 }}>
            <SwipeListView
              data={MealData}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{
                gap: sizeHelper.calWp(30),
                paddingHorizontal: sizeHelper.calWp(35),
                paddingBottom: sizeHelper.calHp(35),
              }}
              leftOpenValue={0}
              rightOpenValue={-100}
              style={{ flex: 1 }}
              disableRightSwipe={false}
              disableLeftSwipe={false}
              ListHeaderComponent={() => {
                return (
                  <View>
                    <View style={{ gap: sizeHelper.calHp(15) }}>
                      <CustomText
                        text={"2 of 4 meals cooked"}
                        size={24}
                        color={theme.colors.heading}
                      />

                      <ProgressBar
                        totalSteps={12}
                        ProgressColor={theme.colors.orange}
                        backgroundColor={"#FFEEDE"}
                        currentStep={5}
                      />

                      <CustomText
                        text={"Planned Meals"}
                        size={30}
                        style={{ marginTop: sizeHelper.calHp(20) }}
                        color={theme.colors.heading}
                        fontFam={fonts.OpenBold}
                        fontWeight={"700"}
                      />
                    </View>
                  </View>
                );
              }}
              onSwipeValueChange={onSwipeValueChange}
              renderHiddenItem={({ item }: any) => {
                return (
                  <View>
                    <MealHiddenCard />
                  </View>
                );
              }}
              renderItem={({ item, index }: any) => {
                return (
                  <>
                    <TouchableOpacity
                      activeOpacity={1}
                      style={{
                        ...appStyles.appShadow,
                        padding: sizeHelper.calWp(30),
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: theme.colors.white,
                        borderRadius: sizeHelper.calWp(40),
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
                            width: sizeHelper.calWp(145),
                            height: sizeHelper.calWp(145),
                            borderRadius: sizeHelper.calWp(30),
                          }}
                          source={item?.img}
                        />
                        <View
                          style={{
                            gap: sizeHelper.calHp(20),
                            alignSelf: "flex-start",
                            justifyContent: "space-between",
                            height: sizeHelper.calWp(145),
                          }}
                        >
                          <CustomText
                            text={item?.title}
                            size={27}
                            fontFam={fonts.OpenBold}
                            color={theme.colors.secondry}
                            fontWeight={"700"}
                          />
                          <View
                            style={{
                              ...appStyles.row,
                              gap: sizeHelper.calWp(10),
                            }}
                          >
                            <CustomButton
                              text={item?.quantity}
                              borderColor={theme.colors.border}
                              borderWidth={1}
                              bgColor={"transparent"}
                              textColor={theme.colors.secondry}
                              paddingHorizontal={8}
                              height={64}
                              borderRadius={17}
                            />

                            <CustomButton
                              text={"Mark as cooked"}
                              size={22}
                              bgColor={"#EFF9F0"}
                              textColor={theme.colors.primary}
                              paddingHorizontal={10}
                              height={64}
                              borderRadius={17}
                            >
                              <View
                                style={{
                                  ...appStyles.circle,
                                  borderWidth: 1.5,
                                  borderColor: theme.colors.primary,
                                  width: sizeHelper.calWp(35),
                                  height: sizeHelper.calWp(35),
                                  backgroundColor: "transparent",
                                }}
                              >
                                <TickIcon
                                  color={theme.colors.primary}
                                  width={sizeHelper.calWp(19)}
                                  height={sizeHelper.calWp(19)}
                                />
                              </View>
                            </CustomButton>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                );
              }}
              ListFooterComponent={() => {
                return (
                  <View
                    style={{
                      padding: sizeHelper.calWp(35),
                      borderRadius: sizeHelper.calWp(40),
                      backgroundColor: "#FFEDDD",
                      
                    }}
                  >
                     <CustomText
                        text={"Removing a meal automatically updates your groceries."}
                        size={26}
                        style={{textAlign:"center",paddingHorizontal:sizeHelper.calWp(40)}}
                        color={theme.colors.heading}
                      />

                  </View>
                );
              }}
            />
          </View>
        )}

        {activeTab == 1 && (
          <View>
            <ScrollView
              contentContainerStyle={{
                gap: sizeHelper.calHp(30),
                paddingHorizontal: sizeHelper.calWp(35),
                paddingBottom: sizeHelper.calHp(100),
              }}
            >
              <View style={{ gap: sizeHelper.calHp(15) }}>
                <CustomText
                  text={"8 of 18 items checked off"}
                  size={24}
                  color={theme.colors.heading}
                />

                <ProgressBar
                  totalSteps={12}
                  ProgressColor={theme.colors.orange}
                  backgroundColor={"#FFEEDE"}
                  currentStep={5}
                />
              </View>

              <View style={[appStyles.appShadow, styles.innerContainer]}>
                <CustomText
                  text={"Produce"}
                  size={30}
                  fontFam={fonts.OpenBold}
                  fontWeight={"700"}
                  color={theme.colors.secondry}
                />

                {produceData.map((it: any, ind) => {
                  return (
                    <ShoppingCheckCard
                      key={ind.toString()}
                      title={it?.title}
                      selected={it?.selected}
                      onToggle={() => {
                        const updateProduceData: any = [...produceData];
                        updateProduceData[ind].selected =
                          !updateProduceData[ind].selected;
                        setProduceData(updateProduceData);
                      }}
                    />
                  );
                })}
              </View>

              <View style={[appStyles.appShadow, styles.innerContainer]}>
                <CustomText
                  text={"Protein"}
                  size={30}
                  fontFam={fonts.OpenBold}
                  fontWeight={"700"}
                  color={theme.colors.secondry}
                />

                {proteinData.map((it: any, ind) => {
                  return (
                    <ShoppingCheckCard
                      key={ind.toString()}
                      title={it?.title}
                      selected={it?.selected}
                      onToggle={() => {
                        const updateProteinDataData: any = [...proteinData];
                        updateProteinDataData[ind].selected =
                          !updateProteinDataData[ind].selected;
                        setProteinData(updateProteinDataData);
                      }}
                    />
                  );
                })}
              </View>

              <CustomButton
                text={"+ Add item"}
                borderColor={theme.colors.orange}
                borderWidth={1}
                bgColor={"transparent"}
                size={27}
                fontFam={fonts.OpenBold}
                fontWeight={"700"}
                textColor={theme.colors.orange}
              />
            </ScrollView>
          </View>
        )}
      </ScreenLayout>
    </>
  );
};
export default ListScreen;

const styles = StyleSheet.create({
  activeIndicator: {
    height: 3,
    width: "90%",
    borderRadius: 999,
    position: "absolute",
    bottom: sizeHelper.calHp(-3),
  },
  tab: {
    paddingHorizontal: sizeHelper.calWp(30),
    alignItems: "center",
    width: WINDOW_WIDTH / 2.1,
  },

  innerContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(40),
    gap: sizeHelper.calHp(30),
    padding: sizeHelper.calWp(30),
  },
});
