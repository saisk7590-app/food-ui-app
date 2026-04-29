import { Image } from "react-native";

export default function BannerCard({ image }) {
    return (
        <Image
            source={{ uri: image }}
            className="h-40 w-80 rounded-2xl mr-3"
        />
    );
}