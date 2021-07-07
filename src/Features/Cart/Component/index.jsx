import React from "react";
import PropTypes from "prop-types";
import CardProduct from "../../../Components/CardProduct";

Cart.propTypes = {};

function Cart({ cartList, handleUpdateCart }) {
	const { totalCharge, totalQuantity, cartDetail } = cartList;

	const handleBuyClick = (productQuantity, product) => {
		if (handleUpdateCart) {
			handleUpdateCart(productQuantity, product);
		}
	};

	return (
		<div>
			<div className='container'>
				<h3>Your Cart </h3>
				<p>Total Charge ${totalCharge}</p>
				<div className='cardList'>
					{cartDetail?.map((product, idx) => (
						<CardProduct
							key={product.id}
							product={product.product}
							quantity={product.quantity}
							handleBuy={handleBuyClick}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Cart;
