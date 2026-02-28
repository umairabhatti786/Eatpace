import GradientButton from "@/components/GradientButton";
import ScreenLayout from "@/components/ScreenLayout";
import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import OnboardChangePlanned from "../../assets/svgs/onboardChangePlanned.svg";
import OnboardShopCook from "../../assets/svgs/onboardShopCook.svg";
import OnboardWeekPlanned from "../../assets/svgs/onboardWeekPlanned.svg";

const OnboardingScreen = ({ navigation }: any) => {
  const router: any = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<AppIntroSlider>(null);

  const Slides = [
    {
      key: "One",
      title: "Your Week, Planned For You",
      des: "Get a personalized dinner plan in seconds no more daily decision stress.",
      image: (
        <OnboardWeekPlanned height={sizeHelper.calHp(400)} width={"85%"} />
      ),
    },
    {
      key: "Two",
      title: "Change Anything, Anytime",
      des: "Swap meals, adjust preferences, and make the plan fit your real life.",
      image: (
        <OnboardChangePlanned height={sizeHelper.calHp(400)} width={"85%"} />
      ),
    },

    {
      key: "Three",
      title: "Shop And Cook With Confidence",
      des: "Automatic shopping lists and simple recipes make your week effortless",
      image: <OnboardShopCook height={sizeHelper.calHp(400)} width={"85%"} />,
    },
  ];

  const renderItem = ({ item }: any) => {
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
            marginBottom: sizeHelper.calWp(70),
          }}
          size={23}
          color={theme.colors.secondry}
        />

        {item?.image}
      </View>
    );
  };

  const onSlideChange = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <ScreenLayout paddingHorizontal={-1}>
      <TouchableOpacity
        style={{
          alignItems: "flex-end",
          paddingHorizontal: sizeHelper.calWp(35),
        }}
      >
        <CustomText
          text={"Skip"}
          size={25}
          style={{
            textAlign: "center",
          }}
          color={theme.colors.secondry}
          fontFam={fonts.OpenMedium}
          fontWeight={"600"}
        />
      </TouchableOpacity>

      <View style={{ paddingTop: sizeHelper.calHp(50), height: "65%" }}>
        <AppIntroSlider
          renderItem={renderItem}
          data={Slides}
          ref={flatListRef}
          onSlideChange={onSlideChange}
          showNextButton={false}
          showDoneButton={false}
          renderPagination={() => null} // Disable dots
        />
      </View>

      <View
        style={{
          ...styles.dotsContainer,
        }}
      >
        {Slides.map((it, ind) => {
          return (
            <View
              key={ind?.toString()}
              style={{
                backgroundColor:
                  currentIndex == ind ? theme.colors.primary : "transparent",
                borderRadius: 999,
                overflow: "hidden",
                padding: 1,
              }}
            >
              <View
                key={ind.toString()}
                style={{
                  width:
                    currentIndex == ind
                      ? sizeHelper.calWp(42)
                      : sizeHelper.calWp(19),
                  height: sizeHelper.calWp(19),
                  borderRadius: sizeHelper.calWp(19),
                  borderWidth: currentIndex == ind ? 1 : -1,
                  borderColor: theme.colors.white,

                  backgroundColor:
                    currentIndex == ind
                      ? theme.colors.primary
                      : theme.colors.light_green,
                }}
              />
            </View>
          );
        })}
      </View>
      <View style={{ padding: sizeHelper.calWp(35) }}>
        <GradientButton
          text={currentIndex === Slides.length - 1 ? "Get Started" : "Next"}
          onPress={() => {
            if (currentIndex === Slides.length - 1) {
              router.push("/auth/signup");
            } else {
              flatListRef.current?.goToSlide(currentIndex + 1);
              setCurrentIndex(currentIndex + 1);
            }
          }}
        />
      </View>
    </ScreenLayout>
  );
};
export default OnboardingScreen;

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(10),
    alignSelf: "center",
  },
});
