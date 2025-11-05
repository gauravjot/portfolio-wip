/* Router */
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
/* CSS */
import "@/assets/styles/global.css";
/* Components */
import Home from "@/pages/Home";
import About from "./pages/About";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/about"} element={<About />} />
			</Routes>
		</Router>
	);
}
