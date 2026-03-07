import GradientButton from "@/components/GradientButton";
import ScreenLayout from "@/components/ScreenLayout";
import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { useRouter } from "expo-router";
import {useState } from "react";
import { StyleSheet,View } from "react-native";
import Tick from "../../assets/svgs/tick.svg";
import Planning from "../../assets/svgs/planning.svg";
import PlanCard from "@/components/PlanCard";

const TickComponent = ({ text }: any) => {
  return (
    <View style={styles.TickMainContainer}>
      <View style={styles.TickpicContainer}>
        <Tick
          width={sizeHelper.calWp(18)}
          height={sizeHelper.calWp(18)}
          color={theme.colors.white}
        />
      </View>
      <CustomText
        text={text}
        size={25}
        fontFam={fonts.OpenMedium}
        fontWeight={"500"}
        color={theme.colors.secondry}
      />
    </View>
  );
};

const PaywallScreen = ({ navigation }: any) => {
  const router: any = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  return (
    <ScreenLayout>
      <View style={styles.cardContainer}>
        <CustomText
          text={"Unlock meal planning pro"}
          style={{ textAlign: "center" }}
          size={40}
          fontFam={fonts.OpenBold}
          color={theme.colors.black100}
          fontWeight={"700"}
        />
        <CustomText
          text={"Get full access to delicious recipes and meal plans."}
          fontFam={fonts.OpenMedium}
          color={theme.colors.secondry}
        />
        <Planning
          width={"100%"}
          height={sizeHelper.calHp(200)}
        />
        <TickComponent text={"Fresh weekly plans tailored to your tastes"} />
        <TickComponent text={"Advanced filters to find your perfect dinner"} />
        <TickComponent text={"Meal plan history and favorites"} />
        <View
          style={{
            marginVertical: sizeHelper.calHp(20),
            width: "100%",
            gap: sizeHelper.calHp(30),
          }}
        >
          <PlanCard
            title="Yearly Plan"
            price="$499 / year"
            subtitle="7 Days Free, Than $3.33/Mon"
            isSelected={selectedPlan === "yearly"}
            onPress={() => setSelectedPlan("yearly")}
            showBadge
          />

          <PlanCard
            title="Monthly Plan"
            price="$9.99 / month"
            subtitle="Billed Monthly"
            isSelected={selectedPlan === "monthly"}
            onPress={() => setSelectedPlan("monthly")}
            showBadge
          />
        </View>

        <GradientButton
          text={"Start your 7-day free trial"}
          width={"100%"}
          size={30}
          onPress={() => router.push("/main/week")}
        />
        <CustomText
          text={"7 free days, then $9.99/month. Cancel anytime."}
          size={22}
          fontFam={fonts.OpenMedium}
          fontWeight={"500"}
          color={theme.colors.secondry}
        />
      </View>
    </ScreenLayout>
  );
};
export default PaywallScreen;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
    padding: sizeHelper.calHp(30),
    gap: sizeHelper.calHp(25),
    alignItems: "center",
    alignSelf: "center",
    borderRadius: sizeHelper.calWp(36),
    marginVertical:sizeHelper.calHp(40),
    flex:0.9
  },
  TickpicContainer: {
    backgroundColor: theme.colors.secondgreen,
    padding: sizeHelper.calWp(18),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    width: sizeHelper.calWp(18),
    height: sizeHelper.calHp(18),
  },
  TickMainContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(15),
    alignSelf: "flex-start",
  },
});
