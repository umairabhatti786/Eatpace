import GradientButton from "@/components/GradientButton";
import ScreenLayout from "@/components/ScreenLayout";
import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import BackArrow from "../../assets/svgs/backArrow.svg";
import NextArrow from "../../assets/svgs/greyNextArrow.svg";
import Meal from "../../assets/svgs/meal.svg";
import Swap from "../../assets/svgs/swap.svg";
import Ingredient from "../../assets/svgs/ingredient.svg";
import Calendar from "../../assets/svgs/weekCalendar.svg";
import { images } from "@/utils/Images";
import Button from "@/components/Button";

const QuickLink = ({ title, Icon, Numbers }: any) => {
    return (
        <View style={styles.QuickLinkContainer}>
            <View
            >
                <Icon
                    width={sizeHelper.calWp(40)}
                    height={sizeHelper.calHp(40)}
                />
            </View>
            <CustomText
                text={title}
                size={25}
                fontFam={fonts.OpenMedium}
                fontWeight={'500'}
                color={theme.colors.black100}
                style={{ flex: 1, marginLeft: sizeHelper.calWp(20) }}

            />
            <View style={{ width: '35%' }} />
            <CustomText
                text={Numbers}
                style={{ textAlign: 'center' }}
                size={28}
                fontFam={fonts.OpenBold}
                color={theme.colors.black100}
                fontWeight={"700"}
            />
        </View>
    )
}

const WeekScreen = ({ navigation }: any) => {
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
                    text={"Your Week"}
                    size={sizeHelper.calWp(56)}
                    fontFam={fonts.OpenBold}
                    color={theme.colors.black100}
                    fontWeight={"700"}
                />
            </View>
            <View style={styles.mainContainer}>
                <Calendar
                    width={"100%"}
                    height={sizeHelper.calHp(300)}
                />
                <View
                    style={{
                        width: "92%",
                    }}
                >
                    <CustomText
                        text={"Congrats On Finishing         The Week!"}
                        style={{ textAlign: 'center' }}
                        size={40}
                        fontFam={fonts.OpenBold}
                        color={theme.colors.black100}
                        fontWeight={"700"}
                        lineHeight={sizeHelper.calHp(60)}
                    />
                    <CustomText
                        text={"You cooked 5 meals and made 3 adjustments last week. Great job!"}
                        size={22}
                        fontFam={fonts.OpenMedium}
                        fontWeight={'500'}
                        color={theme.colors.secondry}
                        style={{ textAlign: 'center', marginTop: sizeHelper.calHp(20) }}
                        lineHeight={sizeHelper.calHp(40)}
                    />
                </View>
                <View
                    style={styles.quickContainer}
                >
                    <QuickLink
                        title={"Meals cooked"}
                        Icon={Meal}
                        Numbers={"5"}
                    />
                    <View style={{
                        height: sizeHelper.calHp(1),
                        backgroundColor: theme.colors.border,
                        width: "96%",
                        alignSelf: 'center'
                    }} />
                    <QuickLink
                        title={"Swaps made"}
                        Icon={Swap}
                        Numbers={"3"}
                        />
                    <View style={{
                        height: sizeHelper.calHp(1),
                        backgroundColor: theme.colors.border,
                        width: "96%",
                        alignSelf: 'center'
                    }} />
                    <QuickLink
                    title={"Ingredients used"}
                    Icon={Ingredient}
                    Numbers={"2"}
                />
                </View>
                <GradientButton
                    text={"Generate a new week"}
                    width={"100%"}
                    size={30}
                    height={sizeHelper.calHp(150)}
                    // onPress={() => router.push("/main/loggedout")}
                />
                <GradientButton
                    text={"Repeat last week"}
                    width={"100%"}
                    size={30}
                    height={sizeHelper.calHp(150)}
                    colors={["#FC9F4C","#D87D2C"]}
                />
            </View>
        </ScreenLayout>
    )
};
export default WeekScreen;

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
    mainContainer: {
        gap: sizeHelper.calHp(26),
        alignItems: 'center',
    },
    nameContainer: {
        gap: sizeHelper.calHp(10),
        justifyContent: 'center'
    },
    ProMemberContainer: {
        backgroundColor: theme.colors.thin_green,
        flexDirection: 'row',
        width: sizeHelper.calWp(220),
        height: sizeHelper.calHp(60),
        alignItems: 'center',
        justifyContent: 'center',
        gap: sizeHelper.calWp(10),
        borderRadius: sizeHelper.calWp(20),
        marginTop: sizeHelper.calHp(10)

    },
    quickContainer: {
        backgroundColor: theme.colors.white,
        width: "96%",
        gap: sizeHelper.calHp(30),
        borderRadius: sizeHelper.calWp(36),
        padding: sizeHelper.calWp(36),
        alignSelf: 'center',
        marginBottom:sizeHelper.calHp(50)
    },
    QuickLinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
    },
    IconContainer: {
        backgroundColor: theme.colors.icons_bg,
        alignItems: 'center',
        justifyContent: 'center',
        padding: sizeHelper.calWp(18),
        borderRadius: sizeHelper.calWp(30)
    }
});
