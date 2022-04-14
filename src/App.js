import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { CraeteProduct } from "./Pages/CreateProduct/CraeteProduct";
import { Home } from "./Pages/HomePage/Home";
import { ProductDetail } from "./Pages/ProductDetailPage/ProductDetail";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/add-product" element={<CraeteProduct />} />
				<Route path="/product/:id" element={<ProductDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
