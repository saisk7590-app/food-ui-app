import { View, Text } from "react-native";

export default function SectionTitle({ title }) {
    return (
        <View className="px-4 mt-5 mb-2">
            <Text className="text-lg font-bold">{title}</Text>
        </View>
    );
}