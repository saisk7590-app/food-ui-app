import { View, Text, Image, Pressable } from "react-native";

export default function RestaurantCard({ item }) {
    return (
        <Pressable className="bg-white rounded-2xl mb-4 overflow-hidden active:scale-95">
            <Image source={{ uri: item.image }} className="h-44 w-full" />

            <View className="p-3">
                <Text className="text-lg font-bold">{item.name}</Text>
                <Text className="text-gray-500">{item.cuisine}</Text>

                <View className="flex-row justify-between mt-2">
                    <Text>⭐ {item.rating}</Text>
                    <Text>{item.time} mins</Text>
                </View>
            </View>
        </Pressable>
    );
}