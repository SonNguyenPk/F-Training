import React from "react";
import PropTypes from "prop-types";
import "./Loading.scss";

export function LoadingImage() {
	return (
		<div className='loading'>
			<div class='spinner-box'>
				<div class='configure-border-1'>
					<div class='configure-core'></div>
				</div>
				<div class='configure-border-2'>
					<div class='configure-core'></div>
				</div>
			</div>
		</div>
	);
}

export function LoadingData() {
	return (
		<div className='loading'>
			<div class='spinner-box'>
				<div class='pulse-container'>
					<div class='pulse-bubble pulse-bubble-1'></div>
					<div class='pulse-bubble pulse-bubble-2'></div>
					<div class='pulse-bubble pulse-bubble-3'></div>
				</div>
			</div>
		</div>
	);
}
