import React, { useState } from "react";
import PropTypes from "prop-types";
import { LoadingImage } from "../../Components/Loading";
import "./home.scss";
import Header from "../../Components/Header";

HomePage.propTypes = {};

function HomePage(props) {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div>
			<Header />
			<div className='homeBanner'>
				<h2>Welcome to drink and drunk shop</h2>
			</div>
		</div>
	);
}

export default HomePage;
