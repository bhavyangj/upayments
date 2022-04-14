import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/HomePage/Home";
import { CraeteProduct } from "./Pages/CreateProduct/CraeteProduct";
import { ProductDetail } from "./Pages/ProductDetailPage/ProductDetail";
import { Header } from "./Components/Header/Header";

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
