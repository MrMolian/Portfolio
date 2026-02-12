import Snowfall from "react-snowfall";
import "./App.css";
import Countdown from "./components/Countdown";
import Gift from "./components/Gift";
import { motion } from "framer-motion";

function App() {
    return (
        <>
            <div className="fixed inset-0 bg-black flex text-center items-center justify-center ">
                <Snowfall />
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{scale:1.02}}
                    transition={{ duration: 2 }}
                    className="flex flex-col select-none gap-5 items-center"
                >
                    <Gift />
                    <Countdown />
                </motion.div>
            </div>
        </>
    );
}

export default App;
