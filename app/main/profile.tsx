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
import Help from "../../assets/svgs/help.svg";
import Dietary from "../../assets/svgs/dietary.svg";
import Setting from "../../assets/svgs/setting.svg";
import BackArrow from "../../assets/svgs/backArrow.svg";
import NextArrow from "../../assets/svgs/greyNextArrow.svg";
import Lock from "../../assets/svgs/lock.svg";
import { images } from "@/utils/Images";
import Button from "@/components/Button";

const QuickLink = ({ title, Icon }: any) => {
    return (
        <View style={styles.QuickLinkContainer}>
            <View
                style={styles.IconContainer}
            >
                <Icon
                    width={sizeHelper.calWp(38)}
                    height={sizeHelper.calHp(38)}
                />
            </View>
            <CustomText
                text={title}
                size={24}
                fontFam={fonts.OpenMedium}
                fontWeight={'500'}
                color={theme.colors.black100}
                style={{ flex: 1, marginLeft: sizeHelper.calWp(20) }}

            />
            <View style={{ width: '35%' }} />
            <NextArrow
                width={sizeHelper.calWp(34)}
                height={sizeHelper.calHp(34)}
            />
        </View>
    )
}

const ProfileScreen = ({ navigation }: any) => {
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
            <View style={styles.cardContainer}>
                <Image source={images.jamie}
                    style={{
                        width: sizeHelper.calWp(125),
                        height: sizeHelper.calWp(125),
                        alignSelf: 'flex-start'
                    }}
                />
                <View
                    style={styles.nameContainer}
                >
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
                color={theme.colors.black100}
                size={32}
            />
            <View
                style={styles.quickContainer}
            >
                <QuickLink
                    title={"My Preferences"}
                    Icon={Setting}
                />
                <View style={{
                    height: sizeHelper.calHp(1),
                    backgroundColor: theme.colors.border,
                    width: "96%",
                    alignSelf: 'center'
                }} />
                <QuickLink
                    title={"Dietary Settings"}
                    Icon={Dietary}
                />
                <View style={{
                    height: sizeHelper.calHp(1),
                    backgroundColor: theme.colors.border,
                    width: "96%",
                    alignSelf: 'center'
                }} />
                <QuickLink
                    title={"Help"}
                    Icon={Help}
                />
            </View>
            <Button
                text={"Sign Out"}
                width={"96%"}
                size={26}
                height={sizeHelper.calHp(140)}
                alignSelf={'center'}
                bgColor={theme.colors.white}
                borderColor={theme.colors.orange}
                borderWidth={1}
                textColor={theme.colors.orange}
                FontFam={fonts.OpenBold}
                fontWeight={"700"}
                borderRadius={sizeHelper.calWp(52)}
                style={{ marginTop: sizeHelper.calHp(30) }}
            />
            <CustomText
                text={"Privacy & Terms"}
                fontFam={fonts.OpenRegular}
                fontWeight={"400"}
                color={theme.colors.jamie_email}
                size={24}
                textDecorationLine={"underline"}
                style={{ alignSelf: 'center', marginTop: sizeHelper.calHp(10) }}
            />
        </ScreenLayout>
    )
};
export default ProfileScreen;

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
    cardContainer: {
        backgroundColor: theme.colors.white,
        width: "96%",
        gap: sizeHelper.calHp(26),
        marginTop: sizeHelper.calHp(10),
        borderRadius: sizeHelper.calWp(36),
        flexDirection: 'row',
        padding: sizeHelper.calWp(36),
        alignItems: 'center',
        alignSelf: 'center'
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
        padding: sizeHelper.calWp(30),
        alignSelf: 'center'
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
