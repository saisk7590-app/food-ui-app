import { View, TextInput } from "react-native";

export default function SearchBar() {
    return (
        <View className="mx-4 mt-3 bg-gray-100 rounded-xl px-4 py-3">
            <TextInput
                placeholder="Search for food, restaurants..."
                placeholderTextColor="#888"
            />
        </View>
    );
}