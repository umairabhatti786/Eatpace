import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import {
    StyleProp,
    StyleSheet,
    TextInput,
    View,
    ViewStyle,
} from "react-native";

import { fonts } from "@/utils/fonts";
import SearchIcon from "../assets/svgs/search.svg";

type Props = {
  placeholder?: string;
  navigation?: any;
  value?: any;
  onPressClose?: any;
  backgroundColor?: string;
  width?: any;
  onChangeText?: (text: any) => void;
  onFocus?: () => void;
  onFilter?: () => void;
  onSubmitEditing?: () => void;
  isfilter?: any;
  isAdd?: any;
  onAdd?: any;
  ContainerStyle?: StyleProp<ViewStyle>;
  inputRef?: any;
};

const CustomSearch = ({
  placeholder,
  onChangeText,
  value,
  backgroundColor,
  width,
  onFocus,
  onSubmitEditing,
  ContainerStyle,
  inputRef,
}: Props) => {
  return (
    <>
      <View
        style={[
          {
            ...styles.searchContainer,
            width: width || "100%",
            backgroundColor: backgroundColor || theme.colors.white,
            height: sizeHelper.calHp(80),
            gap: sizeHelper.calWp(20),
            elevation: 4,
            shadowColor: theme.colors.heading,
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
          },
          ContainerStyle as StyleProp<ViewStyle>,
        ]}
      >
        <SearchIcon
          width={sizeHelper.calWp(35)}
          height={sizeHelper.calWp(35)}
        />
        <TextInput
          allowFontScaling={false} // Disable font scaling
          style={{ ...styles.inputContainer, color: theme.colors.secondry }}
          placeholder={placeholder}
          value={value}
          ref={inputRef}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          onFocus={onFocus}
          placeholderTextColor={theme.colors.grey}
        />
      </View>
    </>
  );
};
export default CustomSearch;

const styles = StyleSheet.create({
  img: { width: 23, height: 23 },

  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: sizeHelper.calWp(25),
    borderRadius: sizeHelper.calWp(25),
  },
  inputContainer: {
    height: "100%",
    flex: 1,
    fontSize: sizeHelper.calHp(25),
    fontFamily: fonts.OpenRegular,
    padding: 0,
    fontWeight: "500",
    // backgroundColor: 'red',
  },
});
