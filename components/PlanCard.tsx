import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import CustomText from "../components/Text";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { fonts } from "@/utils/fonts";

const PlanCard = ({
  title,
  price,
  subtitle,
  isSelected,
  onPress,
  showBadge,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.card,
        {
          borderColor: isSelected
            ? theme.colors.orange
            : theme.colors.lightwhithe,
          backgroundColor: isSelected
            ? theme.colors.orange_transparent
            : theme.colors.white,
        },
      ]}
    >
      {showBadge && isSelected && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Save 50%</Text>
        </View>
      )}

      <View style={styles.row}>
        <View style={{ gap: sizeHelper.calHp(10) }}>
          <CustomText
            text={title}
            size={25}
            fontFam={fonts.OpenSemiBold}
            fontWeight={"600"}
            color={theme.colors.black100}
          />
          <CustomText
            text={price}
            size={37}
            fontFam={fonts.OpenBold}
            fontWeight={"700"}
            color={theme.colors.black100}
          />
          <CustomText
            text={subtitle}
            size={22}
            fontFam={fonts.OpenMedium}
            fontWeight={"500"}
            color={theme.colors.black100}
          />
        </View>

        <View
          style={[
            styles.radioOuter,
            // { borderColor: isSelected ? theme.colors.orange : "#C4C4C4" },
          ]}
        >
          {isSelected && <View style={styles.radioInner} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: sizeHelper.calHp(2.5),
    borderRadius: sizeHelper.calWp(36),
    padding: sizeHelper.calWp(28),
    // marginVertical: sizeHelper.calHp(6),
    position: "relative",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  radioOuter: {
    width: sizeHelper.calWp(40),
    height: sizeHelper.calWp(40),
    borderRadius: sizeHelper.calWp(40),
    borderWidth: sizeHelper.calHp(3),
    justifyContent: "center",
    alignItems: "center",
    borderColor: theme.colors.orange,
  },
  radioInner: {
    width: sizeHelper.calWp(22),
    height: sizeHelper.calWp(22),
    borderRadius: sizeHelper.calWp(22),
    backgroundColor: theme.colors.orange,
  },
  badge: {
    position: "absolute",
    top: sizeHelper.calHp(-24),
    right: sizeHelper.calWp(30),
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.orange,
    borderWidth: sizeHelper.calHp(2.5),
    paddingHorizontal: sizeHelper.calWp(18),
    paddingVertical: sizeHelper.calHp(8),
    borderRadius: sizeHelper.calWp(16),
  },
  badgeText: {
    color: theme.colors.orange,
    fontSize: sizeHelper.calHp(19),
    fontWeight: "500",
    fontFamily: fonts.OpenMedium,
  },
});
