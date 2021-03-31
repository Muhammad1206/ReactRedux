import React from "react";
import setUserProfile from "../../redux/Redusers/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
  profile: state.profilePage.profile
}
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(responce => {
        this.props.setUserProfile(responce.data);
        console.log(responce.data.fullName);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}



export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
