import { View, Text } from "react-native";

export default function CartItemCard({ item }) {
    return (
        <View className="flex-row justify-between items-center mb-3">
            <Text>{item.name}</Text>

            <View className="flex-row items-center">
                <Text className="text-lg">-</Text>
                <Text className="mx-3">{item.qty}</Text>
                <Text className="text-lg">+</Text>
            </View>
        </View>
    );
}