import { View, Text, ScrollView, FlatList } from "react-native";

import Header from "@components/common/Header";
import SearchBar from "@components/common/SearchBar";
import ToggleSwitch from "@components/common/ToggleSwitch";
import SectionTitle from "@components/common/SectionTitle";

import RestaurantCard from "@components/cards/RestaurantCard";
import BannerCard from "@components/cards/BannerCard";

import FadeInView from "@components/animations/FadeInView";

import restaurants from "@data/restaurants.json";

const banners = [
  "https://source.unsplash.com/800x400/?food",
  "https://source.unsplash.com/800x400/?pizza",
  "https://source.unsplash.com/800x400/?biryani",
];

const categories = [
  { id: 1, name: "Pizza" },
  { id: 2, name: "Biryani" },
  { id: 3, name: "Burger" },
  { id: 4, name: "Dessert" },
];

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header + Toggle */}
        <View className="flex-row justify-between items-center px-4">
          <Header />
          <ToggleSwitch />
        </View>

        {/* Search */}
        <SearchBar />

        {/* Banner Carousel */}
        <SectionTitle title="Offers for you" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4">
          {banners.map((item, index) => (
            <BannerCard key={index} image={item} />
          ))}
        </ScrollView>

        {/* Categories */}
        <SectionTitle title="What's on your mind?" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4">
          {categories.map((item) => (
            <View
              key={item.id}
              className="bg-gray-200 px-4 py-2 rounded-full mr-3"
            >
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Restaurants */}
        <SectionTitle title="Top Restaurants" />

        <View className="px-4">
          {restaurants.map((item) => (
            <FadeInView key={item.id}>
              <RestaurantCard item={item} />
            </FadeInView>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}