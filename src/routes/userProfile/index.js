import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import Wallet from './Wallet';
import UserData from './UserData';

const walletData = {
    availableBTC: "0.0230145 BTC",
    totalEquity: "78950.35 USD",
    availableMargin: "56845.25 USD",
    buyMonth: "3.0215485 BTC",
    sellMonth: "3.0215485 BTC"
}

const userData = {
    avatar: "user-15.jpg",
    name: "MARIA PASCLE",
    tel: "+1 235 5547",
    email: "hello@example.com",
    location: "House 14, Road 9, Gulshan, Dhaka"
}

export default class UserProfile extends Component {

   constructor(props) {

       super(props);
       
       this.state = {
           sendVal: "125.00 USD",
           getVal: "125.00 USD"
       }
   }

   render() {
      return (
         <div className="blank-wrapper Exchange">
           <Helmet>
              <title>Bithashex</title>
              <meta name="description" content="Bithashex Page" />
           </Helmet>

            <div className="row UserDashboardTitle">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <span className="UserDashboardTitle">Welcome Back, <span className="UserDashboardName">Maria Pascle</span></span>
                </div>
            </div>

            <div className="row UserDashboardFirstRow">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <Wallet data={walletData}/>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <UserData data={userData}/>
                </div>
            </div>

        </div>
      )}
}