import React, { useState } from "react";
import PropTypes from "prop-types";
import "./cardAction.scss";

CardActionComponent.propTypes = {
	handleBuyClick: PropTypes.func,
	quantity: PropTypes.number.isRequired,
};

CardActionComponent.defaultProps = {
	quantity: 0,
};

function CardActionComponent({ quantity, handleBuyClick }) {
	const [productQuantity, setProductQuantity] = useState(quantity);
	const handleDecreaseClick = () => {
		const newQuantity = productQuantity - 1;
		console.log(newQuantity);
		setProductQuantity(newQuantity);
	};
	const handleIncreaseClick = () => {
		const newQuantity = productQuantity + 1;
		setProductQuantity(newQuantity);
	};

	const handleAddToCart = () => {
		if (handleBuyClick) {
			handleBuyClick(productQuantity);
		}
	};

	return (
		<div className='cardAction'>
			<div className='cardAction__ChangeQuantity'>
				<button
					disabled={productQuantity > 0 ? false : true}
					onClick={handleDecreaseClick}
				>
					-
				</button>
				<p>{productQuantity}</p>
				<button onClick={handleIncreaseClick}>+</button>
			</div>
			<button className='cardAction__AddToCart' onClick={handleAddToCart}>
				Add to cart
			</button>
		</div>
	);
}

export default CardActionComponent;
