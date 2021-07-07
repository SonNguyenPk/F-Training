import { Route, Switch } from "react-router-dom";
import "./App.scss";
import NotFoundPage from "./Components/PageNotFound";
import { AuthRoute, PrivateRoute } from "./Components/Route";
import { router } from "./Constants/constant";
import CartPage from "./Features/Cart/Page";
import HomePage from "./Features/Home";
import LoginPage from "./Features/LoginPage";
import ProductPage from "./Features/Products";

function App() {
	return (
		<div>
			<Switch>
				<PrivateRoute exact path={router.home} component={HomePage} />
				<AuthRoute path={router.login} component={LoginPage} />
				<PrivateRoute path={router.products} component={ProductPage} />
				<PrivateRoute path={router.cart} component={CartPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	);
}

export default App;
