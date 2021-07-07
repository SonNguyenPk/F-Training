import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { router } from "../../Constants/constant";
import "./LoginForm.scss";

LoginPage.propTypes = {};
const initialError = {
	errorName: { isErrorName: false, errorNameMessage: "" },
	errorPassword: { isErrorPass: false, errorPassMessage: "" },
};

function LoginPage(props) {
	const [userName, setUserName] = useState();
	const [userPassword, setUserPassword] = useState();
	const [error, setError] = useState(initialError);
	const history = useHistory();

	const handleTypingUserID = (e) => {
		const userID = e.target.value.trim();
		if (userID === "") {
			const newError = {
				...error,
				errorName: {
					isErrorName: true,
					errorNameMessage: "You must enter your name",
				},
			};
			setError(newError);
		}
		if (userID) {
			setUserName(userID);
			const resetError = {
				...error,
				errorName: { isErrorName: false, errorNameMessage: "" },
			};
			setError(resetError);
		}
	};
	const handleTypingPassword = (e) => {
		const userPassword = e.target.value.trim();
		if (userPassword === "") {
			const newError = {
				...error,
				errorPassword: {
					isErrorPass: true,
					errorPassMessage: "You must enter your pass",
				},
			};
			console.log(newError);
			setError(newError);
		}
		if (!!userPassword) {
			setUserPassword(userPassword);
			const resetError = {
				...error,
				errorPassword: { isErrorPass: false, errorPassMessage: "" },
			};
			setError(resetError);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			id: userName,
			password: userPassword,
		};
		if (user.id && user.password) {
			window.localStorage.setItem("user", JSON.stringify(user));
			history.push(router.home);
		}
	};
	return (
		<div className='login'>
			<form onSubmit={handleSubmit} className='login__Form'>
				<h3>LOG IN</h3>
				<input
					id='userId'
					type='text'
					placeholder='Enter your Id'
					onBlur={handleTypingUserID}
				/>
				{error.errorName.isErrorName && (
					<p>{error.errorName.errorNameMessage}</p>
				)}
				<input
					id='userPassword'
					type='password'
					placeholder='Enter your password'
					onBlur={handleTypingPassword}
				/>
				{error.errorPassword.isErrorPass && (
					<p>{error.errorPassword?.errorPassMessage}</p>
				)}
				<button type='submit'>Log in</button>
			</form>
		</div>
	);
}

export default LoginPage;
