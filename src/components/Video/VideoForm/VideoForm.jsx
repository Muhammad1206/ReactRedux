import React from "react";
import {NavLink} from 'react-router-dom'

import classes from "../Video.module.css";

export default function VideoForm(props) {
    const [like, setLike] = React.useState (0);
    const [dislike, setDislike] = React.useState (0);
    function incrementLike() {
        setLike(like + 1 );
    }
    function incrementDislike() {
        setDislike( dislike + 1 );
    }
const videoId = "/video/" + props.id
  return (
<div className={classes.container}>
      <div className={classes.items}>
       <NavLink to={videoId}>
       <video src={props.srcs} controls ></video>
       </NavLink>
    </div>
    <div className={classes.likes}>
        <span>{props.name}</span>
        <div className="counter">
          <span>Like: {like}</span>
          <span>Dislike: {dislike}</span>
          </div>
          <div className={classes.likebtn}>
        <button onClick={incrementLike}>Like</button>
        <button onClick={incrementDislike}>Dislike</button>
          </div>
      </div>
    </div>
  );
}
