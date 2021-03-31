import React from "react";
import classes from "./Post.module.css";
import avatarPhoto from '../../../../assets/images/avatar.jpg';

const Post = (props) => {
  const [counter, setCounter] = React.useState(props.likesCount)
  const [dislike, setDislike] = React.useState(0);

  const incrementLike =()=>{
  setCounter(counter +1)
  }
  const incrementDislike =()=>{
    debugger;
  setDislike(dislike +1)
  }
  return (
    <div>
      <div className={classes.posts}>
        <div className={classes.item}>
          <img alt='avatar' src={avatarPhoto}/>
          {props.messages}
          </div>
          <div className= {classes.like}>
            <span>Like: {counter}</span>  
            <span>Dislike: {dislike}</span>
            <div className={classes.likebnt}>
            <button onClick={incrementLike}>Like</button>
            <button onClick={incrementDislike}>Dislike</button>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Post;
