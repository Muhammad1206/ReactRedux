import { connect } from 'react-redux';
import { follow, setCurrentPage, 
setUsers, unFollow,
setUsersTotalCount,toggleIsFetching } from './../../redux/Redusers/users-reducer';
import React from "react";
import Users from "./Users.jsx";
import axios from 'axios';
import Prelaoder from '../common/Prelaoder/Prelaoder';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageCount: state.usersPage.pageCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
};

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCount}`)
        .then((responce) => {
          this.props.toggleIsFetching (false);
          this.props.setUsers(responce.data.items);
          this.props.setUsersTotalCount(responce.data.totalCount);
        });
    }
    onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCount}`)
      .then((responce) => {
        this.props.toggleIsFetching (false);
        this.props.setUsers(responce.data.items);
      });
    }
    render() {
  
      return <>
      {this.props.isFetching ?<Prelaoder/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
      pageCount= {this.props.pageCount}
      currentPage= {this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users = {this.props.users}
      unfollow = {this.props.unfollow}
      follow = {this.props.follow}
      />
      </>
    }
};


export default connect(mapStateToProps, {
  follow,
  unFollow, 
  setUsers,
  setCurrentPage,
  setUsersTotalCount,
  toggleIsFetching,
  })(UsersContainer); 