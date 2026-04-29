import { Pressable, View, Text } from "react-native";
import { useState } from "react";

export default function ToggleSwitch() {
    const [enabled, setEnabled] = useState(false);

    return (
        <Pressable
            onPress={() => setEnabled(!enabled)}
            className={`px-4 py-2 rounded-full ${enabled ? "bg-yellow-400" : "bg-gray-300"
                }`}
        >
            <Text className="font-bold">
                {enabled ? "Festival 🎉" : "Normal"}
            </Text>
        </Pressable>
    );
}