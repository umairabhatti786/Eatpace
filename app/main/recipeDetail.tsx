import GradientButton from "@/components/GradientButton";
import ScreenLayout from "@/components/ScreenLayout";
import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Lock from "../../assets/svgs/lock.svg";
import { images } from "@/utils/Images";
import Button from "@/components/Button";
import MainHeader from "@/components/MainHeader";
import { appStyles } from "@/utils/globalStyles";
import SelectionCard from "@/components/SelectionCard";
import AnimatedToggle from "@/components/Toggle";
import { LinearGradient } from "expo-linear-gradient";
import HeartIcon from "../../assets/svgs/heart.svg";
import TimerIcon from "../../assets/svgs/timer.svg";
import CalendarIcon from "../../assets/svgs/calendar.svg";
import IncrementIcon from "../../assets/svgs/increment.svg";
import Decrementcon from "../../assets/svgs/decrement.svg";

import GrowingIcon from "../../assets/svgs/growing.svg";
import CustomTabs from "@/components/CustomTab";
import TickIcon from "../../assets/svgs/tick.svg";
const RecipeDetailScreen = ({ navigation }: any) => {
  const router: any = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const description =
    "A quick and tasty dish with juicy chicken and fresh aspargus and more chicken";

  const tab = [
    { title: "Ingredients" },
    { title: "Method" },
    { title: "Nutrition", isLock: true, isPro: true },
  ];
  return (
    <View style={{ backgroundColor: theme.colors.white ,flex:1}}>
      <View style={{ height: sizeHelper.calHp(500), overflow: "hidden" }}>
        <Image
          source={images.pan_seared_chicken}
          style={{
            width: "100%",
            height: "100%",
          }}
        />

        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            paddingHorizontal: sizeHelper.calWp(35),
            paddingTop: sizeHelper.calHp(70),
          }}
        >
          <View style={appStyles.rowjustify}>
            <MainHeader />

            <TouchableOpacity style={styles.heartContainer}>
              <HeartIcon
                width={sizeHelper.calWp(50)}
                height={sizeHelper.calWp(50)}
                color={"#B3BAC4"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.white,
          borderTopLeftRadius: sizeHelper.calWp(70),
          borderTopRightRadius: sizeHelper.calWp(70),
          marginTop: sizeHelper.calHp(-100),
          gap: sizeHelper.calHp(30),
          padding: sizeHelper.calWp(35),
        }}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <Image
            style={{
              width: sizeHelper.calWp(70),
              height: sizeHelper.calWp(70),
            }}
            source={images.jamie}
          />

          <CustomText
            text={"By Jamie Alvarez"}
            size={27}
            color={theme.colors.secondry}
          />
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

          <View style={{ gap: sizeHelper.calHp(20) }}>
            <CustomText
              text={"Servings: 2 Servingss"}
              size={25}
              color={theme.colors.secondry}
            />

            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(20),
              }}
            >
              <View
                style={{
                  padding: sizeHelper.calWp(6),
                  borderWidth: 1,
                  borderColor: theme.colors.border,
                  width: "48%",
                  height: sizeHelper.calHp(75),
                  borderRadius: sizeHelper.calHp(25),
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    ...appStyles.circle,
                    width: sizeHelper.calWp(70),
                    height: "95%",
                    borderRadius: sizeHelper.calWp(20),
                    backgroundColor: "#EFF9F0",
                  }}
                >
                  <Decrementcon
                    width={sizeHelper.calWp(30)}
                    height={sizeHelper.calWp(30)}
                  />
                </TouchableOpacity>

                <CustomText
                  text={"2"}
                  size={35}
                  fontFam={fonts.OpenBold}
                  fontWeight={"700"}
                  color={theme.colors.secondry}
                />

                <TouchableOpacity
                  style={{
                    ...appStyles.circle,
                    width: sizeHelper.calWp(70),
                    height: "95%",
                    borderRadius: sizeHelper.calWp(20),
                    backgroundColor: "#EFF9F0",
                  }}
                >
                  <IncrementIcon
                    width={sizeHelper.calWp(30)}
                    height={sizeHelper.calWp(30)}
                    color={"#545454"}
                  />
                </TouchableOpacity>
              </View>

              <GradientButton
                text={"Add To Week"}
                //   height={70}
                width={"48%"}
                onPress={() => router?.push("/main/")}

                // paddingHorizontal={30}
              >
                <CalendarIcon
                  width={sizeHelper.calWp(35)}
                  height={sizeHelper.calWp(35)}
                  color={theme.colors.white}
                />
              </GradientButton>
            </View>
          </View>
        </View>

        <Text
          style={{
            fontFamily: fonts.OpenRegular,
            fontWeight: "500",
            fontSize: sizeHelper.calWp(25),
            color: theme.colors.secondry,
            lineHeight: sizeHelper.calHp(33),
          }}
        >
          {expanded ? description : description.substring(0, 65)}
          {!expanded && "... "}
          <Text
            style={{
              fontFamily: fonts.OpenBold,
              fontWeight: "700",
              fontSize: sizeHelper.calWp(26),
              color: theme.colors.orange,
            }}
            onPress={() => setExpanded(!expanded)}
          >
            {expanded ? " Read Less" : "Read More"}
          </Text>
        </Text>

        <CustomTabs
          tabs={tab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab == 0 && (
          <View>
            <ScrollView
              contentContainerStyle={{
                gap: sizeHelper.calHp(20),
                paddingBottom: sizeHelper.calHp(40), // reduce this
              }}
              showsVerticalScrollIndicator={false}
            >
              {[
                "2 chicken breasts, boneless, skinless",
                "1 bunch asparagus, trimmed",
                "3 garlic cloves, minced",
                "1 cup carrot, chopped",
                "4 tbsp olive oil",
                "1 cup carrot, chopped",
              ].map((item, index) => (
                <View
                  key={index}
                  style={[appStyles.row, { gap: sizeHelper.calWp(20) }]}
                >
                  <View
                    style={{
                      width: sizeHelper.calWp(40),
                      height: sizeHelper.calWp(40),
                      backgroundColor: theme.colors.orange,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: sizeHelper.calWp(40),
                    }}
                  >
                    <TickIcon
                      color={theme.colors.white}
                      width={sizeHelper.calWp(23)}
                      height={sizeHelper.calWp(23)}
                    />
                  </View>

                  <CustomText
                    text={item}
                    size={27}
                    color={theme.colors.secondry}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};
export default RecipeDetailScreen;

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(40),
    gap: sizeHelper.calHp(30),
  },
  heartContainer: {
    height: sizeHelper.calHp(80),
    width: sizeHelper.calWp(100),
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(25),
    alignItems: "center",
    justifyContent: "center",
  },
});
