import { Tabs } from "expo-router";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { StyleSheet, View } from "react-native";
import sizeHelper from "@/utils/helpers";
import { theme } from "@/utils/constants/theme";
import CustomText from "@/components/Text";
import { fonts } from "@/utils/fonts";

export default function TabLayout() {
  const colorScheme = useColorScheme();



  const TabItem = ({focused, title, img}: any) => {
    return (
      <View style={[style.itemStyle]}>
        <View
          style={{
            width: sizeHelper.calWp(7),
            height: sizeHelper.calWp(7),
            borderRadius: sizeHelper.calWp(7),
            backgroundColor: focused ? theme.colors.primary : 'transparent',
          }}
        />

        {/* <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            tintColor: focused ? theme.colors.primary : theme.colors.secondry,
          }}
        /> */}
        <CustomText
          text={title}
          fontFam={fonts.OpenSemiBold}
          fontWeight="600"
          size={18}
          color={focused ? theme.colors.primary : theme.colors.secondry}
        />
      </View>
    );
  };

  

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarStyle: {
        //   ...styles.tabBarStyle,
        //   // bottom: Platform.OS=="ios"?0: insets.bottom,
        // },
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="week"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="Week"  />
          ),
        }}
      />
        <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="Explore"  />
          ),
        }}
      />

       <Tabs.Screen
        name="list"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="List"  />
          ),
        }}
      />

        <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} title="Saved"  />
          ),
        }}
      />
    </Tabs>
  );
}
const style = StyleSheet.create({
  itemStyle: {
    width: sizeHelper.calWp(130),
    backgroundColor: 'transparent', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: sizeHelper.calHp(7),
  },
  img: {
    height: sizeHelper.calHp(33),
    width: sizeHelper.calHp(33),
  },
  tabBarStyle: {},
});
