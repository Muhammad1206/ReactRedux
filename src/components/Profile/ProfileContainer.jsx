import React from "react";
import {getUserProfile} from "../../redux/Redusers/profile-reducer";
import Profile from "./Profile";
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
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const WithUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlContainerComponent);
