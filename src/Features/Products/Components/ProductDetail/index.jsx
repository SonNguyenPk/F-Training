import React from "react";
import PropTypes from "prop-types";
import CardActionComponent from "../../../../Components/CardProduct/CardAction";

ProductDetail.propTypes = {
	product: PropTypes.object,
};

function ProductDetail({ product }) {
	return (
		<div className='productDetail'>
			<div className='productDetail__Image'>
				<img src={`${product.idDrinkThumb}`} alt={product.strDrink} />
			</div>
			<div className='productDetail__Content'>
				<h3>{product.strDrink}</h3>
				<h4>Ingredient</h4>
				<h4>Recipe</h4>
				<p>{product.strInstructions}</p>
				<CardActionComponent />
			</div>
		</div>
	);
}

export default ProductDetail;
