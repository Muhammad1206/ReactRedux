import {connect} from "react-redux";
import {
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  unfollow, 
  follow
} from "./../../redux/Redusers/users-reducer";
import React from "react";
import Users from "./Users.jsx";
import Prelaoder from "../common/Prelaoder/Prelaoder";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageCount: state.usersPage.pageCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.currentPage,
      this.props.pageCount
    );
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(
      pageNumber,
      this.props.pageCount
    );
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Prelaoder /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageCount={this.props.pageCount}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

export default connect(mapStateToProps, {
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
  follow,
  unfollow
})(UsersContainer);
