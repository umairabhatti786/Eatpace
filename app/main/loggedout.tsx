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
import BackArrow from "../../assets/svgs/backArrow.svg";
import Chicken from "../../assets/svgs/chicken.svg";

const LoggedOutScreen = ({ navigation }: any) => {
    const router: any = useRouter();
    return (
        <ScreenLayout>
            <View style={styles.headerContainer}>
                <View style={styles.arrowContainer}>
                    <BackArrow
                        width={sizeHelper.calWp(50)}
                        height={sizeHelper.calHp(50)}
                        onPress={() => router.back()}
                    />
                </View>
                <CustomText
                    text={"Profile"}
                    size={sizeHelper.calWp(56)}
                    fontFam={fonts.OpenBold}
                    color={theme.colors.black100}
                    fontWeight={"700"}
                />
            </View>
            <View
            style={styles.cardContainer}
            >
                <Chicken
                    width={"100%"}
                    height={sizeHelper.calHp(300)}
                    style={{marginTop:sizeHelper.calHp(30)}}
                />
                <CustomText
                text={"Save Recipes & Sync Across devices"}
                style={{textAlign:'center'}}
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
                fontWeight={'500'}
                color={theme.colors.secondry}
                style={{textAlign:'center'}}
                lineHeight={sizeHelper.calHp(40)}
                />
                <GradientButton
                    text={"Create Account"}
                    width={"100%"}
                    size={30}
                    height={sizeHelper.calHp(150)}
                    onPress={() => router.push("/main/profile")}
                />
            </View>
        </ScreenLayout>
    )
};
export default LoggedOutScreen;

const styles = StyleSheet.create({
    arrowContainer: {
        backgroundColor: theme.colors.white,
        padding: sizeHelper.calHp(32),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sizeHelper.calWp(18),
        width: sizeHelper.calWp(50),
        height: sizeHelper.calHp(50)
    },
    headerContainer: {
        marginTop: sizeHelper.calHp(30),
        flexDirection: 'row',
        alignItems: 'center',
        gap: sizeHelper.calWp(20)
    },
    cardContainer:{
        backgroundColor: theme.colors.white,
        width: "96%",
        padding:sizeHelper.calWp(36),
        gap:sizeHelper.calHp(45),
        alignItems:'center',
        alignSelf:'center',
        marginTop:sizeHelper.calHp(30),
        borderRadius:sizeHelper.calWp(30)
    }
});
