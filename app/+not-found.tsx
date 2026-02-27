import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function NotFoundScreen() {
  const router: any = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("auth/onboarding");
    }, 500);
  }, []);

  return null;
}
