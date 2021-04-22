import React from "react";
import {getUserProfile} from "../../redux/Redusers/profile-reducer";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withAuthRedirect } from './../Hoc/withAuthRedirect';
import { compose } from "redux";


let mapStateToProps = (state) => {
  return {
  profile: state.profilePage.profile,
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


export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

