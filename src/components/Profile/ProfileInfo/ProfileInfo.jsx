import React from "react";
import classes from "./ProfileInfo.module.css";
import bannerPhoto from "../../../assets/images/baby.jpg";
import avatarPhoto from "../../../assets/images/avatar.jpg";
import Prelaoder from './../../common/Prelaoder/Prelaoder';

let ProfileInfo = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.bwp}></div>
      <img alt="content" src={bannerPhoto} />
      <div className={classes.descriptionBlock}>
        <div className={classes.avatar}>
          <img src={props.profile.photos.large} alt="Avatar" />
          <div className={classes.info}>
            <h2>Muhammad Yakhshiboev</h2>
            <h5>@MuhammadYakhshiboev</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              mollitia ipsam nobis nostrum alias dolor numquam, minus autem nisi
              suscipit? Tenetur sequi repellat expedita reiciendis ad esse aut
              molestiae aliquid doloremque nihil?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
