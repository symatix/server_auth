import axios from "axios";
import { FETCH_USER, SIGN_OUT } from "./types";

export function sendEmail(email, success) {
	console.log(email)
	return function (dispatch) {
		axios.post("/api/mail", email)
			.then(response => {
				success(true);
			})
			.catch(response => {
				console.log(response)
				success(false)
			})
	}
}
export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const signOut = () => async dispatch => {
	const res = await axios.get("/api/signout");

	dispatch({ type: SIGN_OUT, payload: res.data });
}
