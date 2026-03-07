import GradientButton from "@/components/GradientButton";
import ScreenLayout from "@/components/ScreenLayout";
import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { useRouter } from "expo-router";
import { StyleSheet,View } from "react-native";
import Meal from "../../assets/svgs/meal.svg";
import Swap from "../../assets/svgs/swap.svg";
import Ingredient from "../../assets/svgs/ingredient.svg";
import Calendar from "../../assets/svgs/weekCalendar.svg";
import MainHeader from "@/components/MainHeader";
import { appStyles } from "@/utils/globalStyles";

const QuickLink = ({ title, Icon, Numbers }: any) => {
  return (
    <View style={appStyles.rowjustify}>
      <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
        <Icon width={sizeHelper.calWp(40)} height={sizeHelper.calHp(40)} />

        <CustomText
          text={title}
          size={26}
          fontFam={fonts.OpenMedium}
          fontWeight={"500"}
          color={theme.colors.black100}
        />
      </View>

      <CustomText
        text={Numbers}
        style={{ textAlign: "center" }}
        size={30}
        fontFam={fonts.OpenBold}
        color={theme.colors.black100}
        fontWeight={"700"}
      />
    </View>
  );
};

const WeekScreen = ({ navigation }: any) => {
  const router: any = useRouter();
  return (
    <ScreenLayout>
      <MainHeader title={"Your Week"} />

      <View style={{flex:1,gap:sizeHelper.calHp(30)}}>
        <Calendar width={"100%"} height={sizeHelper.calHp(280)} />
        <View
          style={{
            width: "92%",
          }}
        >
          <CustomText
            text={"Congrats On Finishing         The Week!"}
            style={{ textAlign: "center" }}
            size={40}
            fontFam={fonts.OpenBold}
            color={theme.colors.black100}
            fontWeight={"700"}
            lineHeight={sizeHelper.calHp(60)}
          />
          <CustomText
            text={
              "You cooked 5 meals and made 3 adjustments last week. Great job!"
            }
            size={23}
            fontFam={fonts.OpenMedium}
            fontWeight={"500"}
            color={theme.colors.secondry}
            style={{ textAlign: "center", marginTop: sizeHelper.calHp(20) }}
            lineHeight={sizeHelper.calHp(40)}
          />
        </View>
        <View style={{ ...styles.quickContainer, ...appStyles.appShadow }}>
          <QuickLink title={"Meals cooked"} Icon={Meal} Numbers={"5"} />
          <View
            style={{
              height: sizeHelper.calHp(1),
              backgroundColor: theme.colors.border,
              width: "96%",
              alignSelf: "center",
            }}
          />
          <QuickLink title={"Swaps made"} Icon={Swap} Numbers={"3"} />
          <View
            style={{
              height: sizeHelper.calHp(1),
              backgroundColor: theme.colors.border,
              width: "96%",
              alignSelf: "center",
            }}
          />
          <QuickLink
            title={"Ingredients used"}
            Icon={Ingredient}
            Numbers={"2"}
          />
        </View>
       
      </View>
      <View style={{gap:sizeHelper.calHp(30),marginBottom:sizeHelper.calHp(100)}}>
        <GradientButton
          text={"Generate a new week"}
          width={"100%"}
        />
        <GradientButton
          text={"Repeat last week"}
          width={"100%"}
          colors={["#FC9F4C", "#D87D2C"]}
        />
      </View>
       
    </ScreenLayout>
  );
};
export default WeekScreen;

const styles = StyleSheet.create({
  quickContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
    gap: sizeHelper.calHp(30),
    borderRadius: sizeHelper.calWp(36),
    padding: sizeHelper.calWp(36),
    alignSelf: "center",
    marginBottom: sizeHelper.calHp(50),
  },

});
