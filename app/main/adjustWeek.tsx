import GradientButton from "@/components/GradientButton";
import ScreenLayout from "@/components/ScreenLayout";
import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { useRouter } from "expo-router";
import {useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import MainHeader from "@/components/MainHeader";
import { appStyles } from "@/utils/globalStyles";
import SelectionCard from "@/components/SelectionCard";
import AnimatedToggle from "@/components/Toggle";
import { LinearGradient } from "expo-linear-gradient";

const AdjustWeekScreen = ({ navigation }: any) => {
  const [selectedDaysCooking, setSelectedDaysCooking] = useState<any>();

  const DaysCooking = ["S", "M", "T", "W", "T", "F", "S"];

  const [weekTypeData, setWeekTypeData] = useState([
    { title: "⚡ Busy & Fast", selected: true },
    { title: "🥗 Healthy Balance", selected: false },
    { title: "🍲 Beginner Friendly", selected: false },
  ]);

  const [preferencesData, setPreferencesData] = useState([
    { title: "High protein", selected: true },
    { title: "Family -friendly", selected: true },
    { title: "Healthy dinners", selected: true },
    { title: "Quick meals", selected: true },
  ]);

  const [avoidancesData, setAvoidancesData] = useState([
    { title: "Red Meat", selected: false },
    { title: "Mushrooms", selected: false },
    { title: "Olives", selected: false },
    { title: "Bell Peppers", selected: false },
  ]);

  const ToggleCard = ({ title, onToggle, selected }: any) => {
    return (
      <View
        style={{
          ...appStyles.rowjustify,
          paddingHorizontal: sizeHelper.calWp(30),
        }}
      >
        <CustomText
          text={title}
          size={27}
          fontFam={fonts.OpenSemiBold}
          fontWeight={"600"}
          color={theme.colors.secondry}
        />

        <AnimatedToggle isOn={selected} onToggle={onToggle} />
      </View>
    );
  };
  return (
    <ScreenLayout paddingHorizontal={0.1}>
      <View style={{ paddingHorizontal: sizeHelper.calWp(35) }}>
        <MainHeader title={"Adjust This Week"} />
      </View>
      <ScrollView
        contentContainerStyle={{
          gap: sizeHelper.calHp(30),
          paddingBottom: sizeHelper.calHp(50),
          paddingHorizontal: sizeHelper.calWp(35),
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: sizeHelper.calHp(20) }}>
          <CustomText
            text={"Applies to this week only."}
            size={25}
            color={theme.colors.secondry}
          />

          <View
            style={[
              appStyles.appShadow,
              styles.innerContainer,
              {
                padding: sizeHelper.calWp(30),
              },
            ]}
          >
            <CustomText
              text={"Week Type"}
              size={30}
              fontFam={fonts.OpenBold}
              fontWeight={"700"}
              color={theme.colors.secondry}
            />

            <View style={{ gap: sizeHelper.calHp(15) }}>
              {weekTypeData.map((it: any, ind) => {
                return (
                  <SelectionCard
                    key={ind.toString()}
                    item={it}
                    onSelect={() => {
                      const updatedAllergensColor: any = [...weekTypeData];
                      updatedAllergensColor[ind].selected =
                        !updatedAllergensColor[ind].selected;
                      setWeekTypeData(updatedAllergensColor);
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>

        <View
          style={[
            appStyles.appShadow,
            styles.innerContainer,
            {
              paddingVertical: sizeHelper.calHp(30),
            },
          ]}
        >
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(30),
            }}
          >
            <CustomText
              text={"Days Cooking"}
              size={30}
              fontFam={fonts.OpenBold}
              fontWeight={"700"}
              color={theme.colors.secondry}
            />

            <CustomText
              text={"Edit"}
              size={27}
              textDecorationLine={"underline"}
              fontFam={fonts.OpenBold}
              fontWeight={"700"}
              color={theme.colors.primary}
            />
          </View>
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(30),
            }}
          >
            {DaysCooking?.map((it, index) => {
              return (
                <TouchableOpacity
                  key={index?.toString()}
                  onPress={() => {
                    setSelectedDaysCooking(index);
                  }}
                >
                  <LinearGradient
                    colors={
                      selectedDaysCooking != index
                        ? ["#EFF9F0", "#EFF9F0"]
                        : ["#8ED360", "#3BA74E"]
                    }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: sizeHelper.calWp(75),
                      borderRadius: 999,
                      height: sizeHelper.calWp(75),
                    }}
                  >
                    <CustomText
                      text={it}
                      size={27}
                      color={
                        selectedDaysCooking == index
                          ? theme.colors.white
                          : theme.colors.secondry
                      }
                    />
                  </LinearGradient>
                </TouchableOpacity>
              );
            })}
          </View>

          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: theme.colors.border,
            }}
          />

          <ToggleCard title={"Skip Sunday"} selected={false} />
        </View>

        <View
          style={[
            appStyles.appShadow,
            styles.innerContainer,
            {
              paddingVertical: sizeHelper.calHp(30),
            },
          ]}
        >
          <CustomText
            text={"Preferences"}
            size={30}
            style={{ paddingHorizontal: sizeHelper.calWp(30) }}
            fontFam={fonts.OpenBold}
            fontWeight={"700"}
            color={theme.colors.secondry}
          />
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: theme.colors.border,
            }}
          />

          {preferencesData.map((it: any, ind) => {
            return (
              <ToggleCard
                key={ind.toString()}
                title={it?.title}
                selected={it?.selected}
                onToggle={() => {
                  const updatedAllergensColor: any = [...preferencesData];
                  updatedAllergensColor[ind].selected =
                    !updatedAllergensColor[ind].selected;
                  setPreferencesData(updatedAllergensColor);
                }}
              />
            );
          })}
        </View>

        <View
          style={[
            appStyles.appShadow,
            styles.innerContainer,
            {
              paddingVertical: sizeHelper.calHp(30),
            },
          ]}
        >
          <CustomText
            text={"Avoidances"}
            size={30}
            style={{ paddingHorizontal: sizeHelper.calWp(30) }}
            fontFam={fonts.OpenBold}
            fontWeight={"700"}
            color={theme.colors.secondry}
          />
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: theme.colors.border,
            }}
          />

          {avoidancesData.map((it: any, ind) => {
            return (
              <ToggleCard
                key={ind.toString()}
                title={it?.title}
                selected={it?.selected}
                onToggle={() => {
                  const updatedAllergensColor: any = [...avoidancesData];
                  updatedAllergensColor[ind].selected =
                    !updatedAllergensColor[ind].selected;
                  setAvoidancesData(updatedAllergensColor);
                }}
              />
            );
          })}
        </View>
        <GradientButton text={"Update Week"} size={27} />
      </ScrollView>
    </ScreenLayout>
  );
};
export default AdjustWeekScreen;

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: sizeHelper.calWp(40),
    gap: sizeHelper.calHp(30),
  },
  IconContainer: {
    backgroundColor: theme.colors.icons_bg,
    alignItems: "center",
    justifyContent: "center",
    padding: sizeHelper.calWp(18),
    borderRadius: sizeHelper.calWp(30),
  },
});
