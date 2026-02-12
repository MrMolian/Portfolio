import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
    const [time, setTime] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const countDownDate = new Date("Sep 11, 2026 00:00:00").getTime();

        const updateTime = () => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60),
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime({ days, hours, minutes, seconds });
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <motion.div
            layout
            className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl border "
        >
            <p className="text-2xl">
                {time.days} : {time.hours} : {time.minutes} : {time.seconds}
            </p>
        </motion.div>
    );
}
