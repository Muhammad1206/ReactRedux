import React from "react";
import {setUserProfile} from "../../redux/Redusers/profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';
import { withRouter } from "react-router";


let mapStateToProps = (state) => {
  return {
  profile: state.profilePage.profile
}
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userid;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(responce => {
        this.props.setUserProfile(responce.data);
        console.log(responce.data.fullName);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const WithUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlContainerComponent);
