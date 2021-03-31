import profileReducer from "./Redusers/profile-reducer";
import dialogsReducer from "./Redusers/dialogs-reducer";
import sidebarReducer from "./Redusers/sidebar-reducer";;

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post!", likesCount: 15 },
        { id: 3, message: "My friend is ...", likesCount: 35 },
        { id: 4, message: "Khujand", likesCount: 46 },
      ],
      newPostsText: "Salom hammaga!",
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Masha" },
        { id: 2, name: "Nastiya" },
        { id: 3, name: "Medved" },
        { id: 4, name: "Valera" },
        { id: 5, name: "Dimitriy" },
        { id: 6, name: "Volk" },
      ],
      messages: [
        { id: 1, message: "Hello how are you?" },
        { id: 2, message: "I am fine thank you!" },
        { id: 3, message: "Evrybody in this country..." },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "Yo" },
      ],

      newMessageBody: "",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed!");
  },
  getState() {
    return this._state;
  },
  subscibe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};


window.store = store;
export default store;
