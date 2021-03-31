import React from "react";
import VideoForm from "./VideoForm/VideoForm";

const videoItems = [
  {
    id: 1,
    name: "58_-_React_JS_-_mapDispatchToProps_лайф-хак",
    src: "./items/58_-_React_JS_-_mapDispatchToProps_лайф-хак.mp4",
  },
  {
    id: 2,
    name: "59_-_React_JS_-_profile_page,_ajax,_api",
    src: "./items/59_-_React_JS_-_profile_page,_ajax,_api (1).mp4",
  },
  {
    id: 3,
    name: "60_-_React_JS_-_withRouter,_props.match.params",
    src: "./items/60_-_React_JS_-_withRouter,_props.match.params (1).mp4",
  },
  {
    id: 4,
    name: "61_-_React_JS_-_cookie,_login_в_теории,_auth_me",
    src: "./items/60_-_React_JS_-_withRouter,_props.match.params (1).mp4",
  },
  {
    id: 5,
    name: "62_-_React_JS_-_практика,_follow-unfollow_api",
    src: "./items/62_-_React_JS_-_практика,_follow-unfollow_api (1).mp4",
  },
  {
    id: 6,
    name: "63_-_React_JS_-_практика,_DAL,_axios.create",
    src: "./items/63_-_React_JS_-_практика,_DAL,_axios.create (1).mp4",
  },
  {
    id: 7,
    name: "64_-_React_JS_-_практика,_button_disabled_(followunfollow)",
    src:
      "./items/64_-_React_JS_-_практика,_button_disabled_(followunfollow) (1).mp4",
  },
  {
    id: 8,
    name: "65_-_React_JS_-_урок_redux-thunk_в_деталях_(теория)",
    src: "./items/65_-_React_JS_-_урок_redux-thunk_в_деталях_(теория).mp4",
  },
];
const Video = () => {
  const videoArray = videoItems.map((m) => (
    <VideoForm srcs={m.src} name={m.name} id={m.id}/>
  ));
  return <div>{videoArray}</div>;
};

export default Video;
