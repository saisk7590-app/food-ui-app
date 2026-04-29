import { MotiView } from "moti";

export default function FadeInView({ children }) {
    return (
        <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 500 }}
        >
            {children}
        </MotiView>
    );
}