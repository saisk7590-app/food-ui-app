import { Pressable, Text } from "react-native";

export default function Button({ title, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            className="bg-orange-500 py-4 rounded-xl active:scale-95"
        >
            <Text className="text-white text-center font-bold">
                {title}
            </Text>
        </Pressable>
    );
}