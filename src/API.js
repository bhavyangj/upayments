export const getAllProducts = async () => {
	return fetch(
		`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/`
	).then((data) => data.json());
};
export const getCategoryProducts = async (id) => {
	return fetch(
		`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
	).then((data) => data.json());
};
export const getAllCategories = async () => {
	return fetch(
		`https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/`
	).then((data) => data.json());
};
export const getProductDetail = async (id) => {
	return fetch(
		`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
	).then((data) => data.json());
};
export const deleteProduct = async (id) => {
	return fetch(
		`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`,
		{
			method: "DELETE",
		}
	).then((data) => data.json());
};
export const addProduct = async (data) => {
	return fetch(
		`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products`,
		{
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}
	).then((data) => data.json());
};
