import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import {
    Button as MaterialBtn,
} from '@material-ui/core';

import Recaptcha from "react-recaptcha";

import AppConfig from 'Constants/AppConfig';

var LoginImage = require('../../assets/pic/login-image.png');

var LoginStyle = {
    backgroundImage: "url(" + LoginImage + ")"
};

export default class Signup extends Component {

   constructor(props) {
       super(props);

       this.state = {
           name: "Abraham Ali",
           email: "abrahamali@gmail.com",
           password: "abrahamali",
           referalId: ""
       }
   }

   handleChange = (e) => {
       this.setState({
            [e.target.name]: e.target.value
       })
   }


   render() {

    const SignupBtn = withStyles(theme => ({
        root: {
            width: '60%',
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

    
    const SignupBtnClicked = () => {
    }

    const SigninBtn = withStyles(theme => ({
        root: {
            width: '100%',
            height: '60%',
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

    
    const SigninBtnClicked = () => {
        this.props.history.push('/app/login');
    }

    const reCapchaCallback = () => {
    }

    const reCapchaVerifyCallback = () => {
    }

      return (
         <div className="blank-wrapper Login">
           <Helmet>
              <title>Bithashex</title>
              <meta name="description" content="Bithashex Page" />
           </Helmet>

            <div className="row SignupRow">
                <div className="col-sm-12 col-md-12 col-lg-4 order-1 SignupLeft" style={LoginStyle}>
                    <h2 className="title SignupRowNewHere">One of us?</h2>
                    <span className="title SignupRowLeftText">If you already have an account, just sign in. We've missed you!</span>
                    <SigninBtn
                        onClick={SigninBtnClicked}>
                            Sign in
                    </SigninBtn>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8 order-2 SignupRight">
                    <h2 className="title SignupRowWelcomeFinancialHub">Welcome To The Financial Hub</h2>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <TextField name="name" className="SignupName" fullWidth label="NAME" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <TextField name="email" className="SignupEmail" fullWidth label="EMAIL ID" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row SignupRightSecondRow">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <TextField type="password" name="password" className="SignupPassword" fullWidth label="PASSWORD" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <TextField name="referalId" className="SignupReferalId" fullWidth label="REFERAL ID(OPTIONAL)" value={this.state.referalId} onChange={this.handleChange} />
                        </div>
                    </div>
                    
                    <div className="SignupRecaptcha">
                        <Recaptcha
                            sitekey={AppConfig.RecapchaSiteKey}
                            render="explicit"
                            verifyCallback={reCapchaVerifyCallback}
                            onloadCallback={reCapchaCallback}
                        />
                    </div>

                    <SignupBtn
                        className="SignupButton"
                        onClick={SignupBtnClicked}>
                            Signup
                    </SignupBtn>
                    <p className="fs-14 SignupPrivacyPolicyText">By continuing I certify that I am 18 years of age, and I agree to the User Agreement and Privacy Policy.</p>
                </div>
            </div>
        </div>
      )}
}