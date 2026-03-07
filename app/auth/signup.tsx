import GradientButton from "@/components/GradientButton";
import ScreenLayout from "@/components/ScreenLayout";
import CustomText from "@/components/Text";
import CustomButton from "@/components/Button";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MobileLogin from "../../assets/svgs/mobilelogin.svg";
import Google from "../../assets/svgs/google.svg";
import Apple from "../../assets/svgs/apple.svg";
import { appStyles } from "@/utils/globalStyles";
import LineIcon from "../../assets/svgs/line.svg";
import EmailIcon from "../../assets/svgs/email.svg";
import { useDispatch } from "react-redux";
import { setAuthToken } from "@/redux/reducers/authReducer";

const SignUpScreen = ({ navigation }: any) => {
  const router: any = useRouter();
  const dispatch = useDispatch();
  return (
    <ScreenLayout paddingHorizontal={-1}>
      <View style={styles.center}>
        <MobileLogin width={"100%"} height={sizeHelper.calWp(550)} />
        <View style={styles.innerContainer}>
          <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
            <View>
              <Text style={styles.titleText}>
                Let’s get you
                <CustomText
                  text={" Signed Up"}
                  color={theme.colors.primary}
                  fontFam={fonts.OpenBold}
                  size={sizeHelper.calHp(50)}
                  fontWeight={"700"}
                />
                !
              </Text>
              <View style={{ alignSelf: "flex-end", marginRight: "10%" }}>
                <LineIcon width={sizeHelper.calWp(250)} />
              </View>
            </View>
            <View
              style={{
                width: "90%",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <CustomText
                text={
                  " Sign up to save recipes and sync your meal plan across devices."
                }
                color={theme.colors.black100}
                fontFam={fonts.OpenMedium}
                size={sizeHelper.calHp(38)}
                fontWeight={"600"}
                style={{ textAlign: "center" }}
                lineHeight={sizeHelper.calHp(35)}
              />
            </View>

            <CustomButton
              text={"Continue with Google"}
              textColor={theme.colors.black100}
              bgColor={theme.colors.white}
              size={27}
              onPress={() => {
                router.replace("(tabs)/week");
                dispatch(setAuthToken("cdcdc"));
              }}
              width={"100%"}
              style={{
                ...appStyles.appShadow,
              }}
            >
              <Google
                width={sizeHelper.calWp(38)}
                height={sizeHelper.calWp(38)}
              />
            </CustomButton>

            <CustomButton
              text={"Continue with Apple"}
              textColor={theme.colors.black100}
              onPress={() => {
                router.replace("(tabs)/week");
                dispatch(setAuthToken("cdcdc"));
              }}
              bgColor={theme.colors.white}
              size={27}
              width={"100%"}
              style={{
                ...appStyles.appShadow,
                marginTop: sizeHelper.calHp(20),
              }}
            >
              <Apple
                width={sizeHelper.calWp(40)}
                height={sizeHelper.calWp(40)}
              />
            </CustomButton>

            <View
              style={{
                ...styles.lineContainer,
                marginTop: sizeHelper.calHp(40),
              }}
            >
              <View style={styles.line} />
              <CustomText
                text={"Or"}
                size={24}
                fontFam={fonts.OpenMedium}
                fontWeight={"500"}
                color={theme.colors.raregray}
              />
              <View style={styles.line} />
            </View>
          </View>

          <GradientButton
            text={"Continue with Email"}
            onPress={() => {
              router.replace("(tabs)/week");
              dispatch(setAuthToken("cdcdc"));
            }}
            width={"100%"}
            style={{
              marginBottom: sizeHelper.calHp(20),
            }}
          >
            <EmailIcon
              width={sizeHelper.calWp(38)}
              height={sizeHelper.calWp(38)}
            />
          </GradientButton>
          <Text style={styles.bottomText}>
            Already have an account?
            <CustomText
              text={" Sign in"}
              color={theme.colors.orange}
              fontFam={fonts.OpenBold}
              size={sizeHelper.calHp(33)}
              fontWeight={"700"}
              textDecorationLine={"underline"}
            />
          </Text>
        </View>
      </View>
    </ScreenLayout>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    marginTop: sizeHelper.calHp(60),
    gap: sizeHelper.calWp(30),
  },
  innerContainer: {
    padding: sizeHelper.calWp(35),
    backgroundColor: theme.colors.white,
    width: "100%",
    borderTopLeftRadius: sizeHelper.calWp(60),
    borderTopRightRadius: sizeHelper.calWp(60),
    flex: 1,
    gap: sizeHelper.calHp(30),
  },
  titleText: {
    color: theme.colors.black100,
    fontSize: sizeHelper.calHp(40),
    fontWeight: "700",
    fontFamily: fonts.OpenBold,
    marginTop: sizeHelper.calHp(20),
    textAlign: "center",
  },
  bottomText: {
    color: theme.colors.raregray,
    fontSize: sizeHelper.calHp(23),
    fontWeight: "500",
    fontFamily: fonts.OpenRegular,
    alignSelf: "center",
  },

  line: {
    height: sizeHelper.calHp(1.5),
    width: sizeHelper.calWp(100),
    backgroundColor: theme.colors.border,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeHelper.calWp(20),
    marginTop: sizeHelper.calHp(20),
  },
});
