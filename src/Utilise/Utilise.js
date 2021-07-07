// Check user whether log in or not?
export const checkLogin = () => {
	const userInformation = JSON.parse(window.localStorage.getItem("user"));
	if (userInformation) return { isLogin: true, user: userInformation };
	return false;
};

export const handleUpdateCart = (productQuantity, product) => {
	const cartInformation = JSON.parse(window.localStorage.getItem("cart"));
	if (cartInformation) {
		const cloneCart = { ...cartInformation };
		const cloneCartDetail = [...cartInformation.cartDetail];
		const findIdxProduct = cloneCartDetail.findIndex(
			(x) => x.idDrink === product.idDrink
		);

		const newTotalQuantity = cloneCart?.totalQuantity + productQuantity;
		const newCharge = productQuantity * 100;
		const newTotalCharge = newCharge + cartInformation.totalCharge;

		//already in cart
		if (findIdxProduct >= 0) {
			const newQuantity =
				cloneCartDetail[findIdxProduct].quantity + productQuantity;
			const newCartItem = {
				...cloneCartDetail[findIdxProduct],
				quantity: newQuantity,
			};
			cloneCartDetail[findIdxProduct] = newCartItem;
			const newCart = {
				...cloneCart,
				totalCharge: newTotalCharge,
				totalQuantity: newTotalQuantity,
				cartDetail: cloneCartDetail,
			};

			window.localStorage.setItem("cart", JSON.stringify(newCart));
		}

		// new buy product
		if (findIdxProduct < 0) {
			const newCartItem = {
				id: product.idDrink,
				quantity: productQuantity,
				product: product,
			};
			cloneCartDetail.push(newCartItem);
			const newCart = {
				...cloneCart,
				totalCharge: newTotalCharge,
				totalQuantity: newTotalQuantity,
				cartDetail: cloneCartDetail,
			};

			window.localStorage.setItem("cart", JSON.stringify(newCart));
		}
	}

	// if have no cart before
	if (!cartInformation) {
		const cart = {
			totalCharge: productQuantity * 100,
			totalQuantity: productQuantity,
			cartDetail: [
				{
					id: product.idDrink,
					quantity: productQuantity,
					product: product,
				},
			],
		};
		window.localStorage.setItem("cart", JSON.stringify(cart));
	}
};
