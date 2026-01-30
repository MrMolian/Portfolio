import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
export interface DirectionType {
    x: string;
    y: string;
}

interface DirectionContextType extends DirectionType {
    setDirection: React.Dispatch<React.SetStateAction<DirectionType>>;
}

const DirectionContext = createContext<DirectionContextType>({
    x: "100vw",
    y: "100vh",
    setDirection: () => {
        throw new Error(
            "useDirection must be used within a DirectionProvider"
        );
    },
});

export function DirectionProvider({ children }: { children: ReactNode }) {
    const [direction, setDirection] = useState<DirectionType>({
        x: "100vw",
        y: "100vh",
    });

    return (
        <DirectionContext.Provider value={{ ...direction, setDirection }}>
            {children}
        </DirectionContext.Provider>
    );
}

export function useDirection() {
    const context = useContext(DirectionContext);
    if (context === undefined) {
        throw new Error("useDirection must be used within a DirectionProvider");
    }
    return context;
}
