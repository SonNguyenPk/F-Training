import axiosClient from "./clientApi";

const productsApi = {
	getAll(params = "f") {
		const url = `search.php?f=${params}`;
		return axiosClient.get(url, { params });
	},

	getById(id) {
		const url = `lookup.php?i=${id}`;
		return axiosClient.get(url);
	},

	getByName(name) {
		const url = `search.php?s=${name}`;
		return axiosClient.post(url);
	},

	update(data) {
		const url = `/products/${data.id}`;
		return axiosClient.patch(url, data);
	},

	remove(id) {
		const url = `/products/${id}`;
		console.log({ url });
		return axiosClient.delete(url);
	},
};

export default productsApi;
