import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { router } from "../../Constants/constant";
import { checkLogin } from "../../Utilise/Utilise";
import "./header.scss";

Header.propTypes = {};

function Header(props) {
	const [isLogin, setIsLogin] = useState(checkLogin());

	const handleLogout = () => {
		window.localStorage.clear();
		setIsLogin(false);
	};
	return (
		<div className='header'>
			<div className='header__nav'>
				<div>
					<NavLink exact to={router.home} activeClassName='active'>
						<button>Home</button>
					</NavLink>
				</div>
				<div>
					<NavLink to={router.products} activeClassName='active'>
						<button>Products</button>
					</NavLink>
				</div>
				<div>
					<NavLink to={router.cart} activeClassName='active'>
						<button>Cart</button>
					</NavLink>
				</div>
			</div>

			<div className='header__login'>
				{isLogin ? (
					<Link to={router.login}>
						<button onClick={handleLogout}>Logout</button>
					</Link>
				) : (
					<Link to={router.login}>
						<button>Login</button>
					</Link>
				)}
			</div>
		</div>
	);
}

export default Header;
