import { MotiView } from "moti";

export default function SlideUpView({ children }) {
    return (
        <MotiView
            from={{ translateY: 100 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 400 }}
        >
            {children}
        </MotiView>
    );
}