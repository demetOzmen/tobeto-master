import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./auth/authSlice";
import {loadingReducer} from "./loading/loadingSlice";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	loading: loadingReducer,
	user: userReducer,
});

export const store = configureStore({reducer: rootReducer});