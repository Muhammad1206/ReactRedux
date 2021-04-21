import {addPost,updateNewPostText} from "../../../redux/Redusers/profile-reducer.js";
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
    dispatch(addPost());
  },
  updateNewPostText: (text) => {
    const action = updateNewPostText(text);
    dispatch(action);
  }
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
