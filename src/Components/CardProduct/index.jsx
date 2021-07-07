import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { router } from "../../Constants/constant";
import { LoadingImage } from "../Loading";
import "./card.scss";
import CardActionComponent from "./CardAction";

CardProduct.propTypes = {
	product: PropTypes.object,
	quantity: PropTypes.number,
	handleBuy: PropTypes.func,
};

function CardProduct({ product, quantity, handleBuy }) {
	const [isLoadingImage, setIsLoadingImage] = useState(true);
	const handleBuyClick = (productQuantity) => {
		if (handleBuy) {
			handleBuy(productQuantity, product);
		}
	};
	return (
		<div className='card'>
			<Link to={`${router.products}/${product.idDrink}`}>
				{isLoadingImage && <LoadingImage />}
				<img
					src={product.strDrinkThumb}
					alt='Cocktail'
					onLoad={() => setIsLoadingImage(false)}
				/>
				<div className='cardInformation'>
					<p>{product.strDrink}</p>
					<p>ID:${product.idDrink}</p>
				</div>
			</Link>
			<CardActionComponent
				handleBuyClick={handleBuyClick}
				quantity={quantity}
			/>
		</div>
	);
}

export default CardProduct;
