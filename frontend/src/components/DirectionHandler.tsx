import type { ReactNode } from "react";
import { useDirection} from "../providers/Direction";
interface DirectionHandlerProps {
    style: string;
    direction: keyof typeof directionMap;
    children: ReactNode;
}
const directionMap = {
    left: { x: "100vw", y: "0vh" },
    right: { x: "-100vw", y: "0vh" },
    top: { x: "0vw", y: "100vh" },
    bottom: { x: "0vw", y: "-100vh" },
};

export function DirectionHandler({
    style,
    direction,
    children,
}: DirectionHandlerProps) {
    const { setDirection } = useDirection();
    return (
        <button
            className={style}
            onClick={() => setDirection(directionMap[direction])}
        >
            {children}
        </button>
    );
}
