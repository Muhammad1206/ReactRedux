import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => (
    <div>
    <Post messages={p.message} likesCount={p.likesCount}  key ={p.id}/>
    </div>
  ));

  //Создать ссылка textarea , с методам createRef.
  const newPostElement = React.createRef();

  //Функция addPost для добавить поста
  const onAddPost = () => {
   props.addPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div className={classes.text}>
          <textarea
            ref={newPostElement}
            value={props.newPostsText}
            onChange={onPostChange}
          />
        </div>
        <div className={classes.addBTN}>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};
export default MyPosts;
