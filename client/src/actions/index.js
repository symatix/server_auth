import axios from "axios";
import { FETCH_USER, SIGN_OUT } from "./types";

// use this at entry point
export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const signOut = () => async dispatch => {
	const res = await axios.get("/api/signout");

	dispatch({ type: SIGN_OUT, payload: res.data });
}
