import { Tabs } from "expo-router";
import {StyleSheet, View } from "react-native";
import sizeHelper from "@/utils/helpers";
import { theme } from "@/utils/constants/theme";
import CustomText from "@/components/Text";
import { fonts } from "@/utils/fonts";
import TabSelectIcon from "../../assets/svgs/tabSelect.svg";
import WeekIcon from "../../assets/svgs/calendar.svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchIcon from "../../assets/svgs/search.svg";
import ListIcon from "../../assets/svgs/list.svg";
import HeartIcon from "../../assets/svgs/heart.svg";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  const TabItem = ({ focused, title, children }: any) => {
    return (
      <View style={[style.itemStyle]}>
        {children}
        <CustomText
          text={title}
          fontFam={fonts.OpenSemiBold}
          fontWeight="600"
          size={20}
          color={focused ? theme.colors.orange100 : "#777A82"}
        />
        {focused && (
          <View
            style={{
              position: "absolute",
              bottom: sizeHelper.calHp(-8),
              alignSelf: "center",
              right: sizeHelper.calWp(-45),
            }}
          >
            <TabSelectIcon />
          </View>
        )}
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          justifyContent: "center",
          alignItems: "center",
          shadowOffset: { width: 0, height: -5 },
          shadowOpacity: 0.15,
          shadowColor: theme.colors.black100,
          shadowRadius: 5,
          elevation: 20,
          height: sizeHelper.calHp(130),
          borderTopWidth: -1,
          paddingTop: sizeHelper.calHp(28),
          borderTopLeftRadius: sizeHelper.calWp(40),
          borderTopRightRadius: sizeHelper.calWp(40),
          bottom: insets.bottom,
        },
      }}
    >
      <Tabs.Screen
        name="week"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="Week">
              <WeekIcon
                width={sizeHelper.calWp(45)}
                height={sizeHelper.calWp(45)}
                color={focused ? theme.colors.orange100 : "#777A82"}
              />
            </TabItem>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="Explore">
              <SearchIcon
                width={sizeHelper.calWp(45)}
                height={sizeHelper.calWp(45)}
                color={focused ? theme.colors.orange100 : "#777A82"}
              />
            </TabItem>
          ),
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="List">
              <ListIcon
                width={sizeHelper.calWp(45)}
                height={sizeHelper.calWp(45)}
                color={focused ? theme.colors.orange100 : "#777A82"}
              />
            </TabItem>
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="Saved">
              <HeartIcon
                width={sizeHelper.calWp(45)}
                height={sizeHelper.calWp(45)}
                color={focused ? theme.colors.orange100 : "#777A82"}
              />
            </TabItem>
          ),
        }}
      />
    </Tabs>
  );
}
const style = StyleSheet.create({
  itemStyle: {
    width: sizeHelper.calWp(130),
    backgroundColor: "transparent", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    gap: sizeHelper.calHp(10),
    height: sizeHelper.calHp(130),
  },
  img: {
    height: sizeHelper.calHp(33),
    width: sizeHelper.calHp(33),
  },
  tabBarStyle: {},
});
