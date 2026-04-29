import { Pressable, Text } from "react-native";

export default function Chip({ label, active }) {
    return (
        <Pressable
            className={`px-4 py-2 rounded-full mr-2 ${active ? "bg-orange-500" : "bg-gray-200"
                }`}
        >
            <Text className={active ? "text-white" : "text-black"}>
                {label}
            </Text>
        </Pressable>
    );
}