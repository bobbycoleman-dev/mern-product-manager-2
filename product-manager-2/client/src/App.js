import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";

function App() {
	return (
		<div className="container">
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
