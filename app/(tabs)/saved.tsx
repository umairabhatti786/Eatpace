import ScreenLayout from "@/components/ScreenLayout";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "@/components/Text";
import { fonts } from "@/utils/fonts";
import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import { appStyles } from "@/utils/globalStyles";
import LineIcon from "../../assets/svgs/line.svg";
import UserIcon from "../../assets/svgs/user.svg";
import RecipesCard from "@/components/RecipesCard";
import { images } from "@/utils/Images";
import { useRef, useState } from "react";

import CustomSearch from "@/components/Search";

const SavedScreen = ({ navigation }: any) => {
  const FilterSheetRef = useRef<any>(null);
  const [search, setSearch] = useState("");

  const searchResultRecipesData = [
    {
      title: "Creamy Tuscan",
      type: "Chicken",
      img: images.creamy_chicken,
      time: "35 mins",
      isAdd: true,
      isFav: true,
    },
    {
      title: "Chicken Fajita",
      time: "20 mins",
      type: "Bowls",
      isAdd: true,
      isFav: true,

      img: images.chicken_curry,
    },
    {
      title: "Creamy Fajita",
      time: "10 mins",
      type: "Bowls",
      isAdd: true,
      isFav: true,

      img: images.creamy_pasta,
    },

    {
      title: "Creamy Tuscan",
      img: images.creamy_chicken,
      time: "35 mins",
      type: "Chicken",
      isAdd: true,
      isFav: true,
    },

    {
      title: "Creamy Tuscan",
      type: "Chicken",
      img: images.creamy_chicken,
      time: "35 mins",
      condition: "Fast",
    },
    {
      title: "Chicken Fajita",
      time: "20 mins",
      type: "Bowls",
      isAdd: true,
      isFav: true,

      img: images.chicken_curry,
    },
  ];

  return (
    <>
      <ScreenLayout paddingHorizontal={-0.1}>
        <ScrollView
          contentContainerStyle={{
            gap: sizeHelper.calHp(30),
            paddingBottom: sizeHelper.calHp(50),
          }}
        >
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(35),
              width: "100%",
              gap: sizeHelper.calHp(30),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1 }}>
                <View
                  style={{ flexDirection: "row", gap: sizeHelper.calWp(10) }}
                >
                  <CustomText
                    text={"Saved"}
                    size={38}
                    fontFam={fonts.OpenBold}
                    fontWeight={"700"}
                    color={theme.colors.heading}
                  />

                  <View>
                    <CustomText
                      text={"Recipes"}
                      size={38}
                      fontFam={fonts.OpenBold}
                      fontWeight={"700"}
                      color={theme.colors.primary}
                    />
                    <View
                      style={{
                        marginLeft: sizeHelper.calWp(-80),
                      }}
                    >
                      <LineIcon />
                    </View>
                  </View>
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  ...appStyles.appShadow,

                  height: sizeHelper.calHp(80),
                  width: sizeHelper.calWp(100),
                  backgroundColor: theme.colors.white,
                  borderRadius: sizeHelper.calWp(25),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <UserIcon
                  width={sizeHelper.calWp(55)}
                  height={sizeHelper.calWp(55)}
                />
              </TouchableOpacity>

              {/* no additional spacer view needed */}
            </View>

            <CustomSearch
              value={search}
              isShowFilter={search.length > 0}
              onChangeText={(txt: any) => setSearch(txt)}
              placeholder="Search recipes..."
              onFilter={() => {
                FilterSheetRef.current.present();
              }}
            />

            <View style={{ gap: sizeHelper.calHp(20) }}>
              <CustomText
                text={"54 saved recipes"}
                size={26}
                color={theme.colors.secondry}
              />

              <FlatList
                data={searchResultRecipesData}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                columnWrapperStyle={{
                  justifyContent: "space-between",
                  marginBottom: sizeHelper.calHp(15),
                }}
                contentContainerStyle={{
                  gap: sizeHelper.calWp(15),
                }}
                  ListFooterComponent={() => {
                return (
                  <View
                    style={{
                      padding: sizeHelper.calWp(35),
                      borderRadius: sizeHelper.calWp(40),
                      backgroundColor: "#FFEDDD",
                      
                    }}
                  >
                     <CustomText
                        text={"Removing a meal automatically updates your groceries."}
                        size={26}
                        style={{textAlign:"center",paddingHorizontal:sizeHelper.calWp(40)}}
                        color={theme.colors.heading}
                      />

                  </View>
                );
              }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }: any) => {
                  return <RecipesCard isShowHeart width={"49%"} item={item} />;
                }}
              />
            </View>
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};
export default SavedScreen;

const styles = StyleSheet.create({});
