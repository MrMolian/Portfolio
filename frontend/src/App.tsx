import "./App.css";
import Base from "./pages/Base";
import Projects from "./pages/Projects"
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Base />}>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="*" element={<Projects />} />
            </Route>
        </Routes>
    );
}

export default App;
