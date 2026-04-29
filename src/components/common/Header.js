import { View, Text } from "react-native";

export default function Header() {
    return (
        <View className="px-4 py-3 flex-row justify-between items-center">
            <View>
                <Text className="text-xs text-gray-500">Deliver to</Text>
                <Text className="text-lg font-bold">Hyderabad</Text>
            </View>
        </View>
    );
}