const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post!", likesCount: 15 },
    { id: 3, message: "My friend is ...", likesCount: 35 },
    { id: 4, message: "Khujand", likesCount: 46 },
  ],
  newPostsText: "Salom hammaga!",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostsText,
        likesCount: 0,
      };
     return {...state, 
        posts: [...state.posts, newPost], 
        newPostsText: ''
      };
    case UPDATE_NEW_POST_TEXT: 
      return {...state, 
      newPostsText: action.newText
    };  
    case SET_USERS_PROFILE:
      return { ...state,
      profile: action.profile,
      }

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export var setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
