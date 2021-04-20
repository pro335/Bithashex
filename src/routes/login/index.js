import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import browserHistory from 'react-router'

import {
    Button as MaterialBtn,
} from '@material-ui/core';

import {
    loginAction
} from 'Actions';

var LoginImage = require('../../assets/pic/login-image.png');

var LoginStyle = {
    backgroundImage: "url(" + LoginImage + ")"
};

class Login extends Component {

   constructor(props) {
       super(props);

       this.state = {
           name: "Johnatan Doe",
           password: "johnatandoe"
       }
   }

   handleChange = (e) => {
       this.setState({
            [e.target.name]: e.target.value
       })
   }


   render() {

    const LoginBtn = withStyles(theme => ({
        root: {
            width: '100%',
            height: '100%',
            color: 'white',
            backgroundColor: '#1d275a',
            fontSize: '20px',
            borderRadius: '10px',
            '&:hover': {
                backgroundColor: '#404d8f',
            },
        },
    }))(MaterialBtn);

    
    const LoginBtnClicked = () => {
        this.props.loginAction();
        this.props.history.push('/app/userDashboard')
    }

    const SignupBtn = withStyles(theme => ({
        root: {
            width: '100%',
            height: '100%',
            color: 'white',
            backgroundColor: 'none',
            fontSize: '20px',
            border: 'white 1px solid',
            borderRadius: '10px',
            '&:hover': {
                backgroundColor: '#1d275a',
                opacity: '0.3'
            },
        },
    }))(MaterialBtn);

    
    const SignupBtnClicked = () => {
        this.props.history.push('/app/signup');
    }

      return (
         <div className="blank-wrapper Login">
           <Helmet>
              <title>Bithashex</title>
              <meta name="description" content="Bithashex Page" />
           </Helmet>

            <div className="row LoginRow">
                <div className="col-sm-12 col-md-12 col-lg-8 LoginLeft">
                    <h2 className="title LoginRowWelcomeback">Welcome back</h2>
                    <div className="form-group">
                        <TextField name="name" className="LoginName" fullWidth label="NAME" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <TextField type="password" name="password" className="LoginPassword" fullWidth label="PASSWORD" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <Link to="/app/login">
                        <p className="fs-14 LoginForgotPassword">Forgot password?</p>
                    </Link>
                    <LoginBtn
                        onClick={LoginBtnClicked}>
                            Login
                    </LoginBtn>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 LoginRight" style={LoginStyle}>
                    <h2 className="title LoginRowNewHere">New Here?</h2>
                    <span className="title LoginRowRightText">Sign up and discover great new opportunities</span>
                    <SignupBtn
                        onClick={SignupBtnClicked}>
                            Sign up
                    </SignupBtn>
                </div>
            </div>
        </div>
      )}
}

export default connect(null, {
    loginAction
})(Login);