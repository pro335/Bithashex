import React, { Component } from "react";

import { withStyles } from '@material-ui/core/styles';
import {
    Button as MaterialBtn,
} from '@material-ui/core';

export default class Wallet extends Component {
    render() {

        let {data} = this.props;

        const BuyBtn = withStyles(theme => ({
            root: {
                width: '100%',
                height: '100%',
                color: 'white',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
                backgroundColor: '#10d876',
                fontSize: '20px',
                '&:hover': {
                    backgroundColor: '#6ce4a9',
                },
            },
        }))(MaterialBtn);

        
        const BuyBtnClicked = () => {
        }

        const SellBtn = withStyles(theme => ({
            root: {
                width: '100%',
                height: '100%',
                color: 'white',
                borderTopRightRadius: '10px',
                borderBottomRightRadius: '10px',
                backgroundColor: '#ed1b24',
                fontSize: '20px',
                '&:hover': {
                    backgroundColor: '#dc676c',
                },
            },
        }))(MaterialBtn);

        
        const SellBtnClicked = () => {
        }

        return (
            <div className="UserProfileWallet">
                <div className="row UserProfileWalletTitleRow">
                    <h2 className="UserProfileWalletTitleText">WALLET</h2>
                </div>

                <div className="row UserProfileWalletEachRow">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h4 className="UserProfileWalletAvailableBTC">Available BTC</h4>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h3 className="UserProfileWalletAvailableBTCAmount">{data.availableBTC}</h3>
                    </div>
                </div>

                <div className="row UserProfileWalletEachRow">
                    <div className="col-sm-12 col-md-12 col-lg-6 UserProfileWalletEachRowLeft">                   
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h4 className="UserProfileWalletTotalEquity">Total Equity</h4>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3 className="UserProfileWalletTotalEquityAmount">{data.totalEquity}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 UserProfileWalletEachRowLeft UserProfileWalletAvailableMarginDiv">                   
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h4 className="UserProfileWalletAvailableMargin">Available Margin</h4>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3 className="UserProfileWalletAvailableMarginAmount">{data.availableMargin}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row UserProfileWalletEachRow">
                    <div className="col-sm-12 col-md-12 col-lg-6 UserProfileWalletEachRowLeft">                   
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h4 className="UserProfileWalletTotalEquity">Buy this month</h4>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3 className="UserProfileWalletTotalEquityAmount">{data.buyMonth}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 UserProfileWalletEachRowLeft UserProfileWalletEachRowLeftSellThisMonth">                   
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h4 className="UserProfileWalletAvailableMargin">Sell this month</h4>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <h3 className="UserProfileWalletAvailableMarginAmount">{data.sellMonth}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row UserProfileWalletEachRow">
                    <div className="col-sm-12 col-md-12 col-lg-6 UserProfileWalletBuyBtn">   
                        <BuyBtn
                            className="UserProfileBuyBtn"
                            onClick={BuyBtnClicked}>
                            Buy
                        </BuyBtn>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 UserProfileWalletBuyBtn">   
                        <SellBtn
                            className="UserProfileSellBtn"
                            onClick={BuyBtnClicked}>
                            Sell
                        </SellBtn>
                    </div>
                </div>
            </div>
        )
    }
}