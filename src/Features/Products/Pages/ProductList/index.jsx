import React, { useEffect, useState } from "react";
import productsApi from "../../../../api/productApi";
import { LoadingData } from "../../../../Components/Loading";
import ProductListComponent from "../../Components/ProductList";

ProductList.propTypes = {};

function ProductList(props) {
	const [productList, setProductList] = useState();
	const [loading, setLoading] = useState(true);
	const [searchValue, setSearchValue] = useState();
	const [showSearchText, setShowSearchTex] = useState(null);

	// Get data for fist time render
	useEffect(() => {
		(async () => {
			try {
				const { drinks } = await productsApi.getAll();
				setProductList(drinks);
				setLoading(false);
			} catch (error) {
				console.log({ error });
			}
		})();
	}, []);

	// Get data by searching name
	useEffect(() => {
		(async () => {
			try {
				const { drinks } = await productsApi.getByName(searchValue);
				setProductList(drinks);
				checkSearchResult(drinks);
				setLoading(false);
			} catch (error) {
				console.log({ error });
			}
		})();
	}, [searchValue]);

	const handleSearch = (searchValue) => {
		setSearchValue(searchValue);
	};

	const checkSearchResult = (drinks) => {
		if (searchValue && drinks) {
			const searchText = `We found ${drinks.length} for ${searchValue}`;
			setShowSearchTex(searchText);
		}
		if (searchValue && !drinks) {
			const searchText = `We found 0 for ${searchValue}`;
			setShowSearchTex(searchText);
		}
		if (!searchValue) {
			setShowSearchTex("");
		}
	};
	return (
		<div>
			{productList && (
				<ProductListComponent
					productList={productList}
					onSubmitSearch={handleSearch}
					searchText={showSearchText}
				/>
			)}
			{loading && <LoadingData />}
		</div>
	);
}

export default ProductList;
