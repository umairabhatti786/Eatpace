import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useColorScheme,
  FlatList,
} from "react-native";
import CustomText from "@/components/Text";
import { theme } from "@/utils/constants/theme";
import { fonts } from "@/utils/fonts";
import sizeHelper from "@/utils/helpers";
import { appStyles } from "@/utils/globalStyles";
import LockIcon from "../assets/svgs/lock.svg";
const CustomTabs = ({
  setActiveTab,
  activeTab,
  tabs,
  IndicatorTopMargin,
}: any) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.border,
      }}
    >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabs}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-around",
          // paddingHorizontal: 20,
        }}
        renderItem={({ item, index }) => {
          const isActive = activeTab === index;
          return (
            <View>
              <TouchableOpacity
                key={index}
                onPress={() => setActiveTab(index)}
                style={styles.tab}
                activeOpacity={0.7}
              >
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                  {item?.isLock && <LockIcon color={theme.colors.greyIcon} />}

                  <CustomText
                    text={item?.title}
                    color={
                      isActive ? theme.colors.primary : theme.colors?.secondry
                    }
                    fontFamily={isActive ? fonts.OpenBold : fonts.OpenMedium}
                    fontWeight={isActive ? "700" : "600"}
                    size={27}
                  />
                  {item?.isPro && (
                    <CustomText
                      text={"Pro"}
                      style={{
                        paddingHorizontal: sizeHelper.calWp(20),
                        paddingVertical: sizeHelper.calHp(5),
                        backgroundColor: "#EFF9F0",
                        borderRadius: 999,
                      }}
                      color={theme.colors.primary}
                      fontFamily={fonts.OpenBold}
                      fontWeight={"700"}
                      size={23}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <View
                style={{
                  ...styles.activeIndicator,
                  // marginTop: IndicatorTopMargin || sizeHelper.calHp(13),

                  backgroundColor: isActive
                    ? theme.colors.primary
                    : "transparent",
                }}
              />
            </View>
          );
        }}
      />

      {/* <View
        style={{
          width: "100%",
          height: 1.5,
          backgroundColor: theme.colors.border,
        }}
      /> */}
    </View>
  );
};

export default CustomTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
  },
  tabContainer: {
    paddingHorizontal: 10,
  },
  tab: {
    paddingHorizontal: sizeHelper.calWp(30),
    alignItems: "center",
    height: sizeHelper.calHp(60),
  },
  tabText: {
    fontSize: 16,
    color: "#888",
    fontWeight: "500",
  },
  activeText: {
    color: "#E74C3C", // Red active color
    fontWeight: "600",
  },
  activeIndicator: {
    height: 3,
    width: "100%",
    borderRadius: 999,
    position: "absolute",
    bottom: 0,
  },
});
