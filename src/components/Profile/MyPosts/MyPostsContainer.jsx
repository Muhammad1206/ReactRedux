import {addPostActionCreator,updateNewPostTextActionCreator} from "../../../redux/Redusers/profile-reducer.js";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostsText: state.profilePage.newPostsText
  }
}
const mapDispatchToProps = (dispatch) => {
return {
  addPost: ()=>{
    dispatch(addPostActionCreator());
  },
  updateNewPostText: (text) => {
    const action = updateNewPostTextActionCreator(text);
    dispatch(action);
  }
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
