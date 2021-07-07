import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsApi from "../../../../api/productApi";
import ProductDetail from "../../Components/ProductDetail";

DetailProductPage.propTypes = {};

function DetailProductPage(props) {
	const { productId } = useParams();
	const [product, setProduct] = useState();

	useEffect(() => {
		getProduct(productId);
		console.log("hello");
	}, []);

	const getProduct = async (productId) => {
		try {
			const { drinks } = await productsApi.getById(productId);
			console.log({ drinks });
			setProduct(drinks[0]);
		} catch (error) {
			console.log(error);
		}
	};

	return <div>{product && <ProductDetail product={product} />}</div>;
}

export default DetailProductPage;
