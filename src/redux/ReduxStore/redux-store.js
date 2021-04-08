import { combineReducers, createStore } from "redux";
import profileReducer from "../Redusers/profile-reducer";
import dialogsReducer from "../Redusers/dialogs-reducer";
import sidebarReducer from "../Redusers/sidebar-reducer";
import usersReducer from "../Redusers/users-reducer";
import authReducer from "../Redusers/auth-reducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(redusers);
window.store = store;

export default store;
