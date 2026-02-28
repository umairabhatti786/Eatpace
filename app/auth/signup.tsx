import GradientButton from "@/components/GradientButton";
import ScreenLayout from "@/components/ScreenLayout";
import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import MobileLogin from "../../assets/svgs/mobilelogin.svg";
import Google from "../../assets/svgs/google.svg";
import Apple from "../../assets/svgs/apple.svg";

const SignUpScreen = ({ navigation }: any) => {
    const router: any = useRouter();
    return (
        <ScreenLayout>
            <View
                style={styles.center}
            >
                <MobileLogin
                    width={"100%"}
                    height={sizeHelper.calWp(550)}
                />
                <Text
                    style={{
                        color: theme.colors.black100,
                        fontSize: sizeHelper.calHp(45),
                        fontWeight: "700",
                        fontFamily: fonts.OpenBold,
                        marginTop: sizeHelper.calHp(20)
                    }}
                >
                    Let’s get you
                    <CustomText
                        text={" Signed Up"}
                        color={theme.colors.primary}
                        fontFam={fonts.OpenBold}
                        size={sizeHelper.calHp(70)}
                        fontWeight={"700"}
                    />
                    !
                </Text>
                <View
                    style={{ width: '80%' }}
                >
                    <CustomText
                        text={" Sign up to save recipes and sync your meal plan across devices."}
                        color={theme.colors.black100}
                        fontFam={fonts.OpenMedium}
                        size={sizeHelper.calHp(38)}
                        fontWeight={"600"}
                        style={{ textAlign: "center" }}
                        lineHeight={sizeHelper.calHp(35)}
                    />
                </View>
                <View
                    style={styles.buttonContainer}
                >
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Google
                            width={sizeHelper.calWp(38)}
                            height={sizeHelper.calWp(38)}
                        />
                        <CustomText
                            text={"Continue with Google"}
                            size={30}
                            fontFam={fonts.OpenMedium}
                            fontWeight={"500"}
                            color={theme.colors.black100}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Apple
                            width={sizeHelper.calWp(38)}
                            height={sizeHelper.calWp(38)}
                        />
                        <CustomText
                            text={"Continue with Apple"}
                            size={30}
                            fontFam={fonts.OpenMedium}
                            fontWeight={"500"}
                            color={theme.colors.black100}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={styles.lineContainer}
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
                <GradientButton
                    text={"Continue with Email"}
                    width={"100%"}
                    size={30}
                    height={sizeHelper.calHp(150)}
                    onPress={() => router.push("/main/loggedout")}
                />
                <Text
                    style={{
                        color: theme.colors.raregray,
                        fontSize: sizeHelper.calHp(24),
                        fontWeight: "500",
                        fontFamily: fonts.OpenRegular,
                        marginTop: sizeHelper.calHp(20),
                    }}
                >
                    Already have an account?
                    <CustomText
                        text={" Sign in"}
                        color={theme.colors.orange}
                        fontFam={fonts.OpenBold}
                        size={sizeHelper.calHp(36)}
                        fontWeight={"700"}
                        textDecorationLine={"underline"}
                    />
                </Text>
            </View>
        </ScreenLayout>
    )
};
export default SignUpScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        marginTop: sizeHelper.calHp(60),
        gap: sizeHelper.calWp(30)
    },
    button: {
        width: "96%",
        height: sizeHelper.calHp(85),
        backgroundColor: theme.colors.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: sizeHelper.calHp(28),
        flexDirection: "row",
        gap: sizeHelper.calWp(15),
    },
    buttonContainer: {
        width: "100%",
        alignItems: 'center',
        gap: sizeHelper.calHp(30),
        marginTop: sizeHelper.calHp(30)
    },
    line: {
        height: sizeHelper.calHp(1),
        width: sizeHelper.calWp(100),
        backgroundColor: theme.colors.border
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizeHelper.calWp(15),
        marginTop: sizeHelper.calHp(20)
    }
});
