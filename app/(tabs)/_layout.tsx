import { Tabs } from "expo-router";

import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
        name="home"
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <TabItem focused={focused} title="Home" img={images.home} />
        //   ),
        // }}
      />
    </Tabs>
  );
}
