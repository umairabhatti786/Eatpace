import GradientButton from "@/components/GradientButton";
import ScreenLayout from "@/components/ScreenLayout";
import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { useRouter } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Help from "../../assets/svgs/help.svg";
import Dietary from "../../assets/svgs/dietary.svg";
import Setting from "../../assets/svgs/setting.svg";
import NextArrow from "../../assets/svgs/greyNextArrow.svg";
import Lock from "../../assets/svgs/lock.svg";
import { images } from "@/utils/Images";
import Button from "@/components/Button";
import MainHeader from "@/components/MainHeader";
import { appStyles } from "@/utils/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { getToken, setAuthToken } from "@/redux/reducers/authReducer";
import Chicken from "../../assets/svgs/chicken.svg";

const ProfileScreen = ({ navigation }: any) => {
  const router: any = useRouter();
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  const QuickLink = ({ title, Icon }: any) => {
    return (
      <View style={appStyles.rowjustify}>
        <View style={styles.IconContainer}>
          <Icon width={sizeHelper.calWp(38)} height={sizeHelper.calHp(38)} />
        </View>
        <CustomText
          text={title}
          size={25}
          fontFam={fonts.OpenMedium}
          fontWeight={"500"}
          color={theme.colors.black100}
          style={{ flex: 1, marginLeft: sizeHelper.calWp(20) }}
        />
        <View style={{ width: "35%" }} />
        <NextArrow width={sizeHelper.calWp(34)} height={sizeHelper.calHp(34)} />
      </View>
    );
  };
  return (
    <ScreenLayout>
      <MainHeader title={"Profile"} />
      {token ? (
        <View style={{ gap: sizeHelper.calHp(30) }}>
          <View style={{ ...styles.cardContainer, ...appStyles.appShadow }}>
            <Image
              source={images.jamie}
              style={{
                width: sizeHelper.calWp(125),
                height: sizeHelper.calWp(125),
                alignSelf: "flex-start",
              }}
            />
            <View style={styles.nameContainer}>
              <CustomText
                text={"Jamie Alvarez"}
                fontFam={fonts.OpenBold}
                fontWeight={"700"}
                color={theme.colors.black100}
                size={28}
              />
              <CustomText
                text={"jamie.alvarez@gmail.com"}
                fontFam={fonts.OpenRegular}
                fontWeight={"400"}
                color={theme.colors.jamie_email}
                size={24}
              />
              <TouchableOpacity
                style={styles.ProMemberContainer}
                onPress={() => router.push("/main/paywall")}
              >
                <Lock
                  width={sizeHelper.calWp(26)}
                  height={sizeHelper.calHp(26)}
                  color={theme.colors.primary}
                />
                <CustomText
                  text={"Pro Member"}
                  fontFam={fonts.OpenSemiBold}
                  fontWeight={"600"}
                  color={theme.colors.primary}
                  size={22}
                />
              </TouchableOpacity>
            </View>
          </View>
          <CustomText
            text={"Quick Links"}
            fontFam={fonts.OpenBold}
            fontWeight={"700"}
            style={{ marginTop: sizeHelper.calHp(20) }}
            color={theme.colors.black100}
            size={32}
          />
          <View style={{ ...styles.quickContainer, ...appStyles.appShadow }}>
            <QuickLink title={"My Preferences"} Icon={Setting} />
            <View
              style={{
                height: sizeHelper.calHp(1),
                backgroundColor: theme.colors.border,
                width: "96%",
                alignSelf: "center",
              }}
            />
            <QuickLink title={"Dietary Settings"} Icon={Dietary} />
            <View
              style={{
                height: sizeHelper.calHp(1),
                backgroundColor: theme.colors.border,
                width: "96%",
                alignSelf: "center",
              }}
            />
            <QuickLink title={"Help"} Icon={Help} />
          </View>
          <Button
            text={"Sign Out"}
            width={"100%"}
            size={26}
            onPress={() => dispatch(setAuthToken(null))}
            alignSelf={"center"}
            bgColor={theme.colors.white}
            borderColor={theme.colors.orange}
            borderWidth={1}
            textColor={theme.colors.orange}
            FontFam={fonts.OpenBold}
            fontWeight={"700"}
            borderRadius={sizeHelper.calWp(45)}
            style={{ marginTop: sizeHelper.calHp(30) }}
          />
          <CustomText
            text={"Privacy & Terms"}
            fontFam={fonts.OpenRegular}
            fontWeight={"400"}
            color={theme.colors.jamie_email}
            size={24}
            textDecorationLine={"underline"}
            style={{ alignSelf: "center", marginTop: sizeHelper.calHp(10) }}
          />
        </View>
      ) : (
        <View style={{ gap: sizeHelper.calHp(30) }}>
          <View
            style={{
              ...styles.logoutContainer,
              ...appStyles.appShadow,
            }}
          >
            <Chicken
              width={"100%"}
              height={sizeHelper.calHp(300)}
              style={{ marginTop: sizeHelper.calHp(30) }}
            />
            <CustomText
              text={"Save Recipes & Sync Across devices"}
              style={{ textAlign: "center" }}
              size={40}
              fontFam={fonts.OpenBold}
              color={theme.colors.black100}
              fontWeight={"700"}
              lineHeight={sizeHelper.calHp(60)}
            />
            <CustomText
              text={"Access and sync your restaurant recipes anytime."}
              size={24}
              fontFam={fonts.OpenMedium}
              fontWeight={"500"}
              color={theme.colors.secondry}
              style={{ textAlign: "center" }}
              lineHeight={sizeHelper.calHp(40)}
            />
            <GradientButton
              text={"Create Account"}
              width={"100%"}
              size={30}
              onPress={() => {
                router.push("/auth/signup");
              }}
            />
          </View>
        </View>
      )}
    </ScreenLayout>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
    gap: sizeHelper.calHp(26),
    marginTop: sizeHelper.calHp(10),
    borderRadius: sizeHelper.calWp(36),
    flexDirection: "row",
    padding: sizeHelper.calWp(36),
    alignItems: "center",
    alignSelf: "center",
  },
  nameContainer: {
    gap: sizeHelper.calHp(10),
    justifyContent: "center",
  },
  ProMemberContainer: {
    backgroundColor: theme.colors.thin_green,
    flexDirection: "row",
    width: sizeHelper.calWp(220),
    height: sizeHelper.calHp(60),
    alignItems: "center",
    justifyContent: "center",
    gap: sizeHelper.calWp(10),
    borderRadius: sizeHelper.calWp(20),
    marginTop: sizeHelper.calHp(10),
  },
  quickContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
    gap: sizeHelper.calHp(20),
    borderRadius: sizeHelper.calWp(36),
    padding: sizeHelper.calWp(30),
    alignSelf: "center",
  },
  QuickLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  IconContainer: {
    backgroundColor: theme.colors.icons_bg,
    alignItems: "center",
    justifyContent: "center",
    padding: sizeHelper.calWp(18),
    borderRadius: sizeHelper.calWp(30),
  },
  logoutContainer: {
    backgroundColor: theme.colors.white,
    width: "100%",
    padding: sizeHelper.calWp(36),
    gap: sizeHelper.calHp(45),
    alignItems: "center",
    alignSelf: "center",
    marginTop: sizeHelper.calHp(30),
    borderRadius: sizeHelper.calWp(36),
  },
});
