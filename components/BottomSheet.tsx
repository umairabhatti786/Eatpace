import { theme } from "@/utils/constants/theme";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useMemo } from "react";
import { SafeAreaView, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const CustomBottomSheet = (props: any) => {
  const {
    bottomSheetModalRef,
    children,
    snapPoints,
    onBackDrop,
    scrollEnabled,
    enableContentPanningGesture,
  } = props;

  // const snapPoints = useMemo(() => ["55%", "55%"], []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (onBackDrop) {
          onBackDrop(); // Make sure onBackDrop is defined before calling it
        }

        bottomSheetModalRef.current?.close();
      };
    }, []),
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      enableContentPanningGesture={enableContentPanningGesture} // Disable content drag
      // handleComponent={null} // Remove handle bar

      // enableDismissOnClose={false}
      backdropComponent={(props) => (
        <Backdrop {...props} bottomSheetModalRef={bottomSheetModalRef} />
      )}
      snapPoints={snapPoints}
      index={0}
      onDismiss={props?.onDismiss}
      backgroundStyle={{
        borderTopLeftRadius: 25, // Top left radius
        borderTopRightRadius: 25, // Top right radius
        backgroundColor: theme.colors.white,
      }}
    >
      <BottomSheetScrollView
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView>
          <View style={{ paddingBottom: 30 }}>{children}</View>
        </SafeAreaView>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

const Backdrop = ({ animatedIndex, bottomSheetModalRef, style }: any) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [1, 1],
      [1, 1],
      Extrapolate.CLAMP,
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0,0,0,0.7)",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return (
    <Animated.View
      onTouchStart={() => bottomSheetModalRef.current?.close()}
      style={containerStyle}
    />
  );
};
export default CustomBottomSheet;
