import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserData extends Component {
    render() {

        let {data} = this.props;

        return (
            <div className="UserProfileWallet">
                <div className="row UserProfileWalletTitleRow">
                    <div className="col-md-10 col-lg-6">
                        <h2 className="UserProfileWalletTitleText">{data.name}</h2>
                    </div>
                    <div className="col-md-2 col-lg-6">
                        <h2 className="UserProfileWalletEdit">
                            <Link to="/app/userProfile">
                                Edit
                            </Link>
                        </h2>
                    </div>
                </div>

                <div className="row UserProfileWalletEachRow">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <img
                            src={require('Assets/avatars/user-15.jpg')}
                            alt="user profile"
                            className="img-fluid rounded-circle"
                            width="100%"
                            height="100%"
                        />
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-8">

                        <div className="UserProfileRightItem">
                            <img src={require('Assets/pic/phone.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                            <span className="UserProfileRightItemText text-center">{data.tel}</span>
                        </div>
                        
                        <div className="UserProfileRightItem">
                            <img src={require('Assets/pic/mail.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                            <span className="UserProfileRightItemText UserProfileRightItemTextEmail text-center">hello@examp<span style={{fontSize: '5px'}}> </span>le<span style={{fontSize: '5px'}}> </span>.com</span>
                        </div>

                        <div className="UserProfileRightItem">
                            <img src={require('Assets/pic/location.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                            <span className="UserProfileRightItemText text-center">{data.location}</span>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}