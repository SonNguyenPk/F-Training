import React, { useState } from "react";
import PropTypes from "prop-types";
import CardProduct from "../../../../Components/CardProduct";
import "./productList.scss";
import SearchBar from "../../../../Components/SearchBar";
import { handleUpdateCart } from "../../../../Utilise/Utilise";

ProductListComponent.propTypes = {
	onSubmitSearch: PropTypes.func,
};

function ProductListComponent({ productList, onSubmitSearch, searchText }) {
	const onSubmit = (searchValue) => {
		onSubmitSearch(searchValue);
	};

	const handleBuyClick = (productQuantity, product) => {
		handleUpdateCart(productQuantity, product);
	};
	// const handleBuyClick = (productQuantity, product) => {
	// 	const cartInformation = JSON.parse(window.localStorage.getItem("cart"));
	// 	if (cartInformation) {
	// 		const cloneCart = { ...cartInformation };
	// 		const cloneCartDetail = [...cartInformation.cartDetail];
	// 		const findIdxProduct = cloneCartDetail.findIndex(
	// 			(x) => x.idDrink === product.idDrink
	// 		);

	// 		const newTotalQuantity = cloneCart?.totalQuantity + productQuantity;
	// 		const newCharge = productQuantity * 100;
	// 		const newTotalCharge = newCharge + cartInformation.totalCharge;

	// 		//already in cart
	// 		if (findIdxProduct >= 0) {
	// 			const newQuantity =
	// 				cloneCartDetail[findIdxProduct].quantity + productQuantity;
	// 			const newCartItem = {
	// 				...cloneCartDetail[findIdxProduct],
	// 				quantity: newQuantity,
	// 			};
	// 			cloneCartDetail[findIdxProduct] = newCartItem;
	// 			const newCart = {
	// 				...cloneCart,
	// 				totalCharge: newTotalCharge,
	// 				totalQuantity: newTotalQuantity,
	// 				cartDetail: cloneCartDetail,
	// 			};

	// 			window.localStorage.setItem("cart", JSON.stringify(newCart));
	// 		}

	// 		// new buy product
	// 		if (findIdxProduct < 0) {
	// 			const newCartItem = {
	// 				id: product.idDrink,
	// 				quantity: productQuantity,
	// 				product: product,
	// 			};
	// 			cloneCartDetail.push(newCartItem);
	// 			const newCart = {
	// 				...cloneCart,
	// 				totalCharge: newTotalCharge,
	// 				totalQuantity: newTotalQuantity,
	// 				cartDetail: cloneCartDetail,
	// 			};

	// 			window.localStorage.setItem("cart", JSON.stringify(newCart));
	// 		}
	// 	}

	// 	// if have no cart before
	// 	if (!cartInformation) {
	// 		const cart = {
	// 			totalCharge: productQuantity * 100,
	// 			totalQuantity: productQuantity,
	// 			cartDetail: [
	// 				{
	// 					id: product.idDrink,
	// 					quantity: productQuantity,
	// 					product: product,
	// 				},
	// 			],
	// 		};
	// 		window.localStorage.setItem("cart", JSON.stringify(cart));
	// 	}
	// };

	return (
		<div>
			<div className='container'>
				<h3>Drink for serving</h3>
				<SearchBar handleSearchValue={onSubmit} />
				{searchText}
				<div className='cardList'>
					{productList?.map((product) => (
						<CardProduct
							key={product.idDrink}
							product={product}
							handleBuy={handleBuyClick}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProductListComponent;
