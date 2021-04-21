import { authAPI } from "../../api/api";

//Tupes for Redusers

const SET_USER_DATA = 'SET_USER_DATA';

//initialState пустой шаблон для Redusers 
const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

//Логика для Redusers
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state, 
        ...action.data,
        isAuth: true,          
      };
    default:
      return state;
  }
};

//Функции для ActionCreators
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

//Функция для ThunkCreators 
export const getAuthUserData = () => (dispatch) => {
  authAPI.me()
  .then((responce) => {
    if (responce.data.resultCode === 0) {
    const {id, email, login} = responce.data.data;
    dispatch(setAuthUserData(id, email, login)); 
    }
  });
} 

export default authReducer;
