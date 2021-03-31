import React from 'react';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";


const  Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageCount);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    
return (
    <div>
        <div>
          {pages.map((p) => {
            return <span className={props.currentPage === p && classes.selectedPage} 
            onClick={(e)=>{props.onPageChanged (p)}}>{p}
            </span>;
          })}
        </div>
        {props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div className={classes.usersPhoto}>
               <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="AvatarPhoto"
                />
                </NavLink>
              </div>
              <div>
                {u.followed ? (<button onClick={() => {props.unfollow(u.id)}}>
                  Follow
                  </button>
                    ) : (
                  <button onClick={() => {props.follow(u.id)}}>
                    Unfollow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
)
}

export default Users;