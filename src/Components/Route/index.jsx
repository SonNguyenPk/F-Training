import React from "react";
import { Redirect, Route } from "react-router-dom";
import { router } from "../../Constants/constant";
import { checkLogin } from "../../Utilise/Utilise";

export const AuthRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			checkLogin() ? <Redirect to={router.home} /> : <Component {...props} />
		}
	/>
);

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			checkLogin() ? <Component {...props} /> : <Redirect to={router.login} />
		}
	/>
);
