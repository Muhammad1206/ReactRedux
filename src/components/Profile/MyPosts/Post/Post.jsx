import React from "react";
import classes from "./Post.module.css";
import avatarPhoto from '../../../../assets/images/avatar.jpg';
import likePhoto from '../../../../assets/images/like.png';

const Post = (props) => {
  const [counter, setCounter] = React.useState(props.likesCount)


  const incrementLike =()=>{
  setCounter(counter +1)
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
            <div className={classes.likebnt}>
            <img src={likePhoto} alt='Like' onClick={incrementLike} />
            </div>
          </div>
      </div>
    </div>
  );
};
export default Post;
