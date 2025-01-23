import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";
import AuthPage from "./routes/auth/auth.component";

const Shop = () => {
	return <h1>Shop Page</h1>;
};

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/auth" element={<AuthPage />} />
			</Route>
		</Routes>
	);
}

export default App;
