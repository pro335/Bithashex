import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { withStyles } from '@material-ui/core/styles';
import {
    Button as MaterialBtn,
} from '@material-ui/core';

import Item from './Item';
import RecentActivities from './RecentActivities';
import Buy from './Buy';
import Sell from './Sell';

const firstRowData = [
    {
        title: "AVAILABLE BTC",
        content: "10,221 BTC",
    },
    {
        title: "TOTAL EQUITY",
        content: "10,221 BTC",
    },
    {
        title: "AVAIL MARGIN",
        content: "10,221 BTC",
    }
];

const dataRecentActivities = [
    {
        status: "SOLD",
        icon: "bitcoin.png",
        type: "BTC",
        bank: "Using - Bank *******5263",
        bitcoinAmount: "-0.000242 BTC",
        dollarAmount: "-0.125 USD",
    },
    {
        status: "SOLD",
        icon: "litecoin.png",
        type: "LTC",
        bank: "Using - Bank *******5263",
        bitcoinAmount: "-0.000242 BTC",
        dollarAmount: "-0.125 USD",
    },
    {
        status: "BUY",
        icon: "ripple.png",
        type: "XRP",
        bank: "Using - Bank *******5263",
        bitcoinAmount: "-0.000242 BTC",
        dollarAmount: "-0.125 USD",
    },
    {
        status: "SOLD",
        icon: "bitcoin.png",
        type: "BTC",
        bank: "Using - Bank *******5263",
        bitcoinAmount: "-0.000242 BTC",
        dollarAmount: "-0.125 USD",
    },
]

export default class UserExchange extends Component {

   constructor(props) {

       super(props);
       
       this.state = {
           sendVal: "125.00 USD",
           getVal: "125.00 USD"
       }
   }

   render() {

    const BuyNowBtn = withStyles(theme => ({
        root: {
            width: '80%',
            height: '80%',
            color: 'white',
            backgroundColor: '#10d876',
            fontSize: '20px',
            '&:hover': {
                backgroundColor: '#6ce4a9',
            },
        },
    }))(MaterialBtn);

    
    const BuyNowBtnClicked = () => {
    }

    const SellNowBtn = withStyles(theme => ({
        root: {
            width: '80%',
            height: '80%',
            color: 'white',
            backgroundColor: '#ed1b24',
            fontSize: '20px',
            '&:hover': {
                backgroundColor: '#dc676c',
            },
        },
    }))(MaterialBtn);

    
    const SellNowBtnClicked = () => {
    }

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
                {firstRowData.map((eachContent, key) => (
                    <div className="col-sm-12 col-md-12 col-lg-3" key={key}>
                        <Item data={eachContent}/>
                    </div>
                ))}
                <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="row">
                        <div className="col-sm-12 UserExchangeBuyNowBtn">
                            <BuyNowBtn
                                onClick={BuyNowBtnClicked}>
                                Buy now
                            </BuyNowBtn>
                        </div>
                        <div className="col-sm-12">
                            <SellNowBtn
                                onClick={SellNowBtnClicked}>
                                Sell now
                            </SellNowBtn>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
               <div className="col-xl-6 col-md-12 w-xs-half-block">
                  <Buy />
               </div>

               <div className="col-xl-6 col-md-12 w-xs-half-block">
                  <Sell />
               </div>
            </div>

            <div className="row UserExchageRecentActivities">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <RecentActivities data={dataRecentActivities} />
                </div>
            </div>


        </div>
      )}
}