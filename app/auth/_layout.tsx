import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function AuthLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="onboardSteps" />
      </Stack>
    </SafeAreaProvider>
  );
}
