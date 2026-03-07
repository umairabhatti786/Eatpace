import ScreenLayout from "@/components/ScreenLayout";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomText from "@/components/Text";
import CustomButton from "@/components/Button";
import { fonts } from "@/utils/fonts";
import { theme } from "@/utils/constants/theme";
import sizeHelper from "@/utils/helpers";
import { appStyles } from "@/utils/globalStyles";
import LineIcon from "../../assets/svgs/line.svg";
import UserIcon from "../../assets/svgs/user.svg";
import RecipesCard from "@/components/RecipesCard";
import { images } from "@/utils/Images";
import GradientButton from "@/components/GradientButton";
import {useRef, useState } from "react";
import CustomBottomSheet from "@/components/BottomSheet";
import CrossIcon from "../../assets/svgs/cross.svg";
import CustomSearch from "@/components/Search";
import UnfillTimeIcon from "../../assets/svgs/unfillTime.svg";
import GrowingIcon from "../../assets/svgs/growing.svg";

const ExploreScreen = ({ navigation }: any) => {
  const FilterSheetRef = useRef<any>(null);
  const [search, setSearch] = useState("");

  const BrowseData = [
    { title: "Quick", color: "#E9EFF5" },
    { title: "Comfort", color: "#FBE9EC" },
    { title: "High Protein", color: "#FFEDDD" },
    { title: "Easy", color: "#E7F0E8" },
  ];

  const [recipeTimes, setRecipeTimes] = useState([
    { time: "< 15 min", selected: false },
    { time: "30 min", selected: false },
    { time: "1 hr", selected: false },
  ]);

  const [recipeDifficulty, setRecipeDifficulty] = useState([
    { title: "Easy", selected: false },
    { title: "Medium", selected: false },
    { title: "Fast", selected: false },
  ]);

  const [recipeDiet, setRecipeDiet] = useState([
    { title: "Veg", selected: false },
    { title: "High Protein", selected: false },
  ]);

  const CuratedCollectionData = [
    {
      title: "Quick & Easy",
      recipes: "104",
      img: images.veggie_tacoc,
    },
    {
      title: "High Protein",
      recipes: "85",

      img: images.chicken_curry,
    },
    {
      title: "Creamy Pesto Pasta",
      recipes: "104",

      img: images.creamy_pasta,
    },
  ];

  const FeaturedRecipesData = [
    {
      title: "Creamy Tuscan",
      type: "Chicken",
      img: images.creamy_chicken,
      time: "35 mins",
      kcal: "140",
    },
    {
      title: "Chicken Fajita",
      time: "20 mins",
      type: "Bowls",

      kcal: "140",

      img: images.chicken_curry,
    },
    {
      title: "Creamy Fajita",
      kcal: "140",
      time: "10 mins",
      type: "Bowls",

      img: images.creamy_pasta,
    },

    {
      title: "Creamy Tuscan",
      img: images.creamy_chicken,
      time: "35 mins",
      kcal: "140",
      type: "Chicken",
    },
  ];

  const searchResultRecipesData = [
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
      condition: "Easy",

      img: images.chicken_curry,
    },
    {
      title: "Creamy Fajita",
      time: "10 mins",
      type: "Bowls",
      condition: "Fast",

      img: images.creamy_pasta,
    },

    {
      title: "Creamy Tuscan",
      img: images.creamy_chicken,
      time: "35 mins",
      type: "Chicken",
      condition: "Easy",
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
      condition: "Easy",

      img: images.chicken_curry,
    },
  ];

  const ListSectionHeader = ({ title, label }: any) => {
    return (
      <View
        style={{ ...appStyles.rowjustify, paddingTop: sizeHelper.calHp(20) }}
      >
        <CustomText
          text={title}
          size={28}
          fontFam={fonts.OpenBold}
          fontWeight={"700"}
          color={theme.colors.heading}
        />

        <TouchableOpacity>
          <CustomText
            text={label}
            textDecorationLine={"underline"}
            size={26}
            color={theme.colors.light_grey}
          />
        </TouchableOpacity>
      </View>
    );
  };

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
            {search.length == 0 && (
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
                      text={"Explore"}
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
            )}

            <CustomSearch
              value={search}
              isShowFilter={search.length > 0}
              onChangeText={(txt: any) => setSearch(txt)}
              placeholder="Search recipes..."
              onFilter={() => {
                FilterSheetRef.current.present();
              }}
            />

            {search.length == 0 && (
              <View
                style={{
                  gap: sizeHelper.calWp(15),
                }}
              >
                <CustomText
                  text={"Browse by"}
                  size={28}
                  fontFam={fonts.OpenBold}
                  fontWeight={"700"}
                  color={theme.colors.heading}
                />

                <View style={appStyles.rowjustify}>
                  {BrowseData.map((it, inde) => {
                    return (
                      <CustomButton
                        text={it?.title}
                        bgColor={it?.color}
                        textColor={theme.colors.secondry}
                        paddingHorizontal={15}
                        height={70}
                        borderRadius={30}
                      />
                    );
                  })}
                </View>
              </View>
            )}

            {search.length > 0 && (
              <View style={{ gap: sizeHelper.calHp(20) }}>
                <CustomText
                  text={"54 chicken recipes"}
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
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }: any) => {
                    return (
                      <RecipesCard isShowHeart width={"49%"} item={item} />
                    );
                  }}
                />
              </View>
            )}
          </View>
          {search.length == 0 && (
            <View
              style={{
                gap: sizeHelper.calHp(20),
              }}
            >
              <View
                style={{
                  paddingHorizontal: sizeHelper.calWp(35),
                }}
              >
                <ListSectionHeader
                  title={"Curated Collection"}
                  label={"See All"}
                />
              </View>

              <FlatList
                data={CuratedCollectionData}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: sizeHelper.calWp(15),
                  paddingHorizontal: sizeHelper.calWp(35),
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }: any) => {
                  return <RecipesCard item={item} />;
                }}
              />
            </View>
          )}

          {search.length == 0 && (
            <View
              style={{
                gap: sizeHelper.calHp(20),
              }}
            >
              <View
                style={{
                  paddingHorizontal: sizeHelper.calWp(35),
                }}
              >
                <ListSectionHeader
                  title={"Featured Recipes"}
                  label={"See All"}
                />
              </View>

              <FlatList
                data={FeaturedRecipesData}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                columnWrapperStyle={{
                  justifyContent: "space-between",
                  marginBottom: sizeHelper.calHp(15),
                }}
                contentContainerStyle={{
                  gap: sizeHelper.calWp(15),
                  paddingHorizontal: sizeHelper.calWp(35),
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }: any) => {
                  return <RecipesCard isShowHeart width={"49%"} item={item} />;
                }}
              />
            </View>
          )}
        </ScrollView>
      </ScreenLayout>

      <CustomBottomSheet
        bottomSheetModalRef={FilterSheetRef}
      >
        <View
          style={{
            flex: 1,
            gap: sizeHelper.calHp(30),
            paddingHorizontal: sizeHelper.calWp(35),
          }}
        >
          <View
            style={{
              ...appStyles.rowjustify,
            }}
          >
            <View style={{ width: 40 }} />
            <CustomText
              text={"Filters"}
              size={40}
              fontFam={fonts.OpenBold}
              color={theme.colors.secondry}
              fontWeight={"700"}
            />
            <TouchableOpacity
              onPress={() => {
                FilterSheetRef.current.dismiss();
              }}
              style={{
                padding: sizeHelper.calWp(25),
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 9999,
                backgroundColor: "#FFF3E8",
              }}
            >
              <CrossIcon
                width={sizeHelper.calWp(24)}
                height={sizeHelper.calWp(24)}
              />
            </TouchableOpacity>
          </View>

          <View style={{ gap: sizeHelper.calHp(20) }}>
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
              }}
            >
              <UnfillTimeIcon />
              <CustomText
                text={"Time"}
                size={30}
                fontFam={fonts.OpenBold}
                color={theme.colors.secondry}
                fontWeight={"700"}
              />
            </View>

            <View
              style={{
                ...appStyles.row,
                flexWrap: "wrap",
                gap: sizeHelper.calWp(20),
              }}
            >
              {recipeTimes.map((it: any, ind) => {
                return (
                  <CustomButton
                    key={ind.toString()}
                    borderWidth={1}
                    height={70}
                    borderColor={
                      it?.selected ? theme.colors.orange : theme.colors.border
                    }
                    bgColor={"transparent"}
                    textColor={
                      it?.selected ? theme.colors.orange : theme.colors.secondry
                    }
                    onPress={() => {
                      const updatedRecipeTimes = recipeTimes.map(
                        (item, index) => ({
                          ...item,
                          selected: index === ind, // only clicked item becomes true
                        }),
                      );

                      setRecipeTimes(updatedRecipeTimes);
                    }}
                    paddingHorizontal={sizeHelper.calWp(30)}
                    text={it?.time}
                  />
                );
              })}
            </View>
          </View>


            <View style={{ gap: sizeHelper.calHp(20) }}>
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
              }}
            >
              <GrowingIcon
              color={"#777A82"}
               />
              <CustomText
                text={"Difficulty"}
                size={30}
                fontFam={fonts.OpenBold}
                color={theme.colors.secondry}
                fontWeight={"700"}
              />
            </View>

            <View
              style={{
                ...appStyles.row,
                flexWrap: "wrap",
                gap: sizeHelper.calWp(20),
              }}
            >
              {recipeDifficulty.map((it: any, ind) => {
                return (
                  <CustomButton
                    key={ind.toString()}
                    borderWidth={1}
                    height={70}
                    borderColor={
                      it?.selected ? theme.colors.orange : theme.colors.border
                    }
                    bgColor={"transparent"}
                    textColor={
                      it?.selected ? theme.colors.orange : theme.colors.secondry
                    }
                    onPress={() => {
                      const updatedRecipeDifficulty=recipeDifficulty.map(
                        (item, index) => ({
                          ...item,
                          selected: index === ind, // only clicked item becomes true
                        }),
                      );

                      setRecipeDifficulty(updatedRecipeDifficulty);
                    }}
                    paddingHorizontal={sizeHelper.calWp(30)}
                    text={it?.title}
                  />
                );
              })}
            </View>
          </View>



            <View style={{ gap: sizeHelper.calHp(20) }}>
            <View
              style={{
                ...appStyles.row,
                gap: sizeHelper.calWp(10),
              }}
            >
              <GrowingIcon
              color={"#777A82"}
               />
              <CustomText
                text={"Diet"}
                size={30}
                fontFam={fonts.OpenBold}
                color={theme.colors.secondry}
                fontWeight={"700"}
              />
            </View>

            <View
              style={{
                ...appStyles.row,
                flexWrap: "wrap",
                gap: sizeHelper.calWp(20),
              }}
            >
              {recipeDiet.map((it: any, ind) => {
                return (
                  <CustomButton
                    key={ind.toString()}
                    borderWidth={1}
                    height={70}
                    borderColor={
                      it?.selected ? theme.colors.orange : theme.colors.border
                    }
                    bgColor={"transparent"}
                    textColor={
                      it?.selected ? theme.colors.orange : theme.colors.secondry
                    }
                    onPress={() => {
                      const updatedRecipeDiet=recipeDiet.map(
                        (item, index) => ({
                          ...item,
                          selected: index === ind, // only clicked item becomes true
                        }),
                      );

                      setRecipeDiet(updatedRecipeDiet);
                    }}
                    paddingHorizontal={sizeHelper.calWp(30)}
                    text={it?.title}
                  />
                );
              })}
            </View>
          </View>

          <GradientButton
                      text={"Apply Filters"}
                      size={27}
                      onPress={()=>FilterSheetRef.current.dismiss()}
                    />
                      
                
        </View>
      </CustomBottomSheet>
    </>
  );
};
export default ExploreScreen;

const styles = StyleSheet.create({});
