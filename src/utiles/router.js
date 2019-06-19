import React, { Component } from 'react';
import { Redirect } from 'dva/router';
// import { getCookie } from '../until/cookies';
import Cookies from 'js-cookie'
const HocPrivateRoute = Wrap =>
    class extends Component {
        render() {
            return (
                Cookies.get('token') ?
                    <Wrap {...this.props} /> :
                    <Redirect to='/login' />
            )
        }
    }


export default HocPrivateRoute;
