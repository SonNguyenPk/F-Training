import React from "react";
import { Route, Switch } from "react-router";
import Header from "../../Components/Header";
import { router } from "../../Constants/constant";
import DetailProductPage from "./Pages/DetailProduct";
import ProductList from "./Pages/ProductList";

ProductPage.propTypes = {};

function ProductPage(props) {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path={router.products} component={ProductList} />
				<Route
					path={`${router.products}/:productId`}
					component={DetailProductPage}
				/>
			</Switch>
		</div>
	);
}

export default ProductPage;
