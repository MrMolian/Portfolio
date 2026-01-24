import "./App.css"
import { Routes, Route } from "react-router-dom"
import Base from "./pages/Base"
import Home from "./pages/Home"
import Networth from "./pages/Networth"
import Passwords from "./pages/Passwords"
import Projects from "./pages/Projects"
import Project from "./pages/Project"
import NotFound  from "./pages/NotFound"

function App() {
    return (
        <Routes>
			<Route path="/" element={<Base />}> 
				<Route path="" element={<Home />} /> 
                <Route path="projects" element={<Projects />} /> 
                <Route path="projects/:id" element={<Project/>} />
                <Route path="networth" element={<Networth />} /> 
                <Route path="passwords" element={<Passwords/>} /> 
                <Route path="*" element={<NotFound/>} />
			</Route>
        </Routes>
    );
}

export default App;
