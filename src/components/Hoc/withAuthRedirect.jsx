import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return  {
    isAuth: state.auth.isAuth
    }
};


export const withAuthRedirect = (Component) => {
    
    class RedirectComponent extends React.Component {

        render () {
            if (!this.props.isAuth) { return <Redirect to={'/login'} />}
             return <Component {...this.props} />
        }
    }
    const connectedRedirectComponent = connect (mapStateToProps) (RedirectComponent)

    return connectedRedirectComponent;
}