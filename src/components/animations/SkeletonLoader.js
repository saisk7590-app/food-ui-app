import { View } from "react-native";

export default function SkeletonLoader() {
    return (
        <View className="bg-gray-200 h-44 rounded-xl mb-4 animate-pulse" />
    );
}