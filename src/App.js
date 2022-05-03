import MainPage from "./Pages/MainPage";
import FormPage from "./Pages/FormPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/signup' element={<FormPage />} />
			</Routes>
		</Router>
	);
}

export default App;
