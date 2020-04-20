import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'armpoetry/auth/SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };

        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
};



export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});

export const getAuth = () => async (dispatch) => {
        let data = await authAPI.getAuth();

            if (data.resultCode === 0){
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
};

export const login = (email, password, rememberMe) => async (dispatch) => {

        let data = await authAPI.login(email, password, rememberMe);
            if (data.resultCode === 0){
                dispatch(getAuth())
            } else{
                let message = data.messages.length > 0 ? data.messages[0] : "Սխալ տվյալներ";
                dispatch(stopSubmit("login", {_error: message}));
            }
};

export const logout = () => async (dispatch) => {
        let data = await authAPI.logout();
            if (data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false))
            }
};

export default authReducer;