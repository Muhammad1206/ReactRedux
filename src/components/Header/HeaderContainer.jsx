import React from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { getAuthUserData } from './../../redux/Redusers/auth-reducer';




class HeaderContainer extends React.Component {
   componentDidMount () {
        this.props.getAuthUserData()
   }

  render () {
  return (
    <Header {...this.props}/>
  );
}
};



const mapDispathToProps = (state) => ({
isAuth: state.auth.isAuth,
login: state.auth.login,
})


export default connect (mapDispathToProps, {getAuthUserData}) (HeaderContainer);
