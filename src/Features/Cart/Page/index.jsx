import React, { useState } from "react";
import PropTypes from "prop-types";
import Cart from "../Component";
import Header from "../../../Components/Header";

CartPage.propTypes = {};

function CartPage(props) {
	const cartList = JSON.parse(window.localStorage.getItem("cart"));
	const [isUpdate, setIsUpdate] = useState(false);
	console.log({ cartList });
	const handleUpdate = (productQuantity, product) => {
		setIsUpdate(false);
		console.log({ product });
		const cloneCart = { ...cartList };
		const cloneCartDetail = [...cartList.cartDetail];
		const findIdxProduct = cloneCartDetail.findIndex(
			(x) => x.id === product.idDrink
		);
		console.log(findIdxProduct);
		const gapQuantity =
			productQuantity - cloneCartDetail[findIdxProduct]?.quantity;
		const gapCharge = gapQuantity * 100;
		const newTotalQuantity = cloneCart.totalQuantity + gapQuantity;
		const newTotalCharge = gapCharge + cartList.totalCharge;

		const newQuantity = productQuantity;
		if (newQuantity === 0) {
			cloneCartDetail.splice(findIdxProduct, 1);
		}
		if (newQuantity > 0) {
			const newCartItem = {
				...cloneCartDetail[findIdxProduct],
				quantity: newQuantity,
			};
			cloneCartDetail[findIdxProduct] = newCartItem;
		}

		const newCart = {
			...cloneCart,
			totalCharge: newTotalCharge,
			totalQuantity: newTotalQuantity,
			cartDetail: cloneCartDetail,
		};

		window.localStorage.setItem("cart", JSON.stringify(newCart));
		setIsUpdate(true);
	};
	return (
		<div>
			<Header />
			{!!cartList ? (
				<Cart cartList={cartList} handleUpdateCart={handleUpdate} />
			) : (
				<p>Your cart is empty</p>
			)}
		</div>
	);
}

export default CartPage;
