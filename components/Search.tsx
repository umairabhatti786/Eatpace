import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { fonts } from "@/utils/fonts";
import SearchIcon from "../assets/svgs/search.svg";
import { appStyles } from "@/utils/globalStyles";
import FilterIcon from "../assets/svgs/filter.svg";
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
  isShowFilter?:any
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
  isShowFilter,
  onFilter
}: Props) => {
  return (
    <>
      <View
        style={[
          {
            ...styles.searchContainer,
            ...appStyles.appShadow,
            width: width || "100%",
            backgroundColor: backgroundColor || theme.colors.white,
            height: sizeHelper.calHp(80),
            gap: sizeHelper.calWp(20),
          },
          ContainerStyle as StyleProp<ViewStyle>,
        ]}
      >
        <SearchIcon
          width={sizeHelper.calWp(37)}
          height={sizeHelper.calWp(37)}
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
        {
          isShowFilter&&(

             <TouchableOpacity
             activeOpacity={0.6}
             onPress={onFilter}
          style={{
            ...appStyles.circle,
            width: sizeHelper.calWp(80),
            height: "80%",
            borderRadius: sizeHelper.calWp(20),
            backgroundColor: "#EFF9F0",
            marginRight:sizeHelper.calWp(-10)
          }}
        >
          <FilterIcon
            width={sizeHelper.calWp(40)}
            height={sizeHelper.calWp(40)}
          />
        </TouchableOpacity>

          )
        }

       
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
    borderRadius: sizeHelper.calWp(30),
  },
  inputContainer: {
    height: "100%",
    flex: 1,
    fontSize: sizeHelper.calHp(26),
    fontFamily: fonts.OpenRegular,
    padding: 0,
    fontWeight: "500",
    // backgroundColor: 'red',
  },
});
