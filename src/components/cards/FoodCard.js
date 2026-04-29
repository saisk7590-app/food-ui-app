export default function FoodCard({ item }) {
    return (
        <View className="flex-row justify-between mb-4">
            <View className="flex-1 pr-3">
                <Text className="font-bold">{item.name}</Text>
                <Text className="text-gray-500">₹{item.price}</Text>
            </View>

            <Image
                source={{ uri: item.image }}
                className="w-24 h-24 rounded-xl"
            />
        </View>
    );
}