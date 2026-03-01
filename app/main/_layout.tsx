import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MainLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loggedout" />
        <Stack.Screen name="profile" />
        <Stack.Screen name="paywall" />
        <Stack.Screen name="week" />
      </Stack>
    </SafeAreaProvider>
  );
}
