import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { FormGroup, Input } from 'reactstrap';
import FormControl from '@material-ui/core/FormControl';

import ExchangeStatus from './ExchangeStatus';
import TradeHistory from './TradeHistory';
import Item from './Item';
import RecentActivities from './RecentActivities';

import ChartWidget from './ChartWidget';
import ChartConfig from 'Constants/chart-config';


const dataExchangeStatus = [
    {
        pair: "BCH/BTC",
        price: "0.03810000",
        change: "0.00%",
        color: "black"
    },
    {
        pair: "ETH/BTC",
        price: "1.00000000",
        change: "1.00%",
        color: "#6cc291"
    },
    {
        pair: "BCH/BTC",
        price: "0.03810000",
        change: "0.00%",
        color: "black"
    },
    {
        pair: "BCH/BTC",
        price: "0.03810000",
        change: "-6.17%",
        color: "red"
    },
    {
        pair: "BCH/BTC",
        price: "0.00000000",
        change: "-6.17%",
        color: "black"
    },
    {
        pair: "BCH/BTC",
        price: "0.03810000",
        change: "1.92%",
        color: "#6cc291"
    },
]

const dataTradeHistory = [
    {
        firstCell: "0.00928",
        secondCell: "18.8",
        thirdCell: "09:53:20",
        color: "red"
    },
    {
        firstCell: "0.00928",
        secondCell: "2,245.7",
        thirdCell: "10:52:02",
        color: "#6cc291"
    },
    {
        firstCell: "0.00928",
        secondCell: "149.0",
        thirdCell: "09:53:20",
        color: "#6cc291"
    },
    {
        firstCell: "0.00928",
        secondCell: "53.6",
        thirdCell: "09:53:20",
        color: "red"
    },
    {
        firstCell: "0.00928",
        secondCell: "425.0",
        thirdCell: "09:53:20",
        color: "#6cc291"
    },
    {
        firstCell: "0.00928",
        secondCell: "0.1",
        thirdCell: "09:53:20",
        color: "#6cc291"
    },
]

const chartLabels = ['', '2018', 'Jul', '2019', 'Jul', '2020', ''];
const chartDatasets = [
   {
      label: 'Series A',
      fill: false,
      tension: 0,
      backgroundColor: ChartConfig.color.primary,
      borderColor: ChartConfig.color.primary,
      borderWidth: 1,
      // hoverBackgroundColor: ChartConfig.color.primary,
      // hoverBorderColor: ChartConfig.color.primary,
      data: [2000, 20000, 6270, 3980, 14000, 7600, 4500]
   }
];

const firstRowData = [
    {
        title: "YOUR PORTFOLIO",
        content: "$63411.00(Total Balance)",
        subContent: ""
    },
    {
        title: "BITCOIN",
        content: "0.000242 BTC",
        subContent: "0.125 USD"
    },
    {
        title: "LITECOIN",
        content: "0.000242 LTC",
        subContent: "0.125 USD"
    },
    {
        title: "RIPPLE",
        content: "0.000242 XRP",
        subContent: "0.125 USD"
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
        color: "red"
    },
    {
        status: "SOLD",
        icon: "bitcoin.png",
        type: "BTC",
        bank: "Using - Bank *******5263",
        bitcoinAmount: "-0.000242 BTC",
        dollarAmount: "-0.125 USD",
        color: "red"
    },
    {
        status: "SOLD",
        icon: "bitcoin.png",
        type: "BTC",
        bank: "Using - Bank *******5263",
        bitcoinAmount: "-0.000242 BTC",
        dollarAmount: "-0.125 USD",
        color: "red"
    },
    {
        status: "SOLD",
        icon: "bitcoin.png",
        type: "BTC",
        bank: "Using - Bank *******5263",
        bitcoinAmount: "-0.000242 BTC",
        dollarAmount: "-0.125 USD",
        color: "red"
    },
]

export default class UserDashboard extends Component {

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
                {firstRowData.map((eachContent, key) => (
                    <div className="col-sm-12 col-md-12 col-lg-3" key={key}>
                        <Item data={eachContent}/>
                    </div>
                ))}
            </div>

           <div className="row">
               <div className="col-sm-12 col-md-12 col-lg-5">
                    <ExchangeStatus data={dataExchangeStatus}/>
                    <TradeHistory data={dataTradeHistory} />
               </div>

               <div className="col-sm-12 col-md-12 col-lg-7">

                  <ChartWidget
                     labels={chartLabels}
                     datasets={chartDatasets}
                  />
               </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <div className="UserDashboardExchangeForm">
                        <div className="row UserDashboardExchangeDlg">
                            <h2 className="UserDashboardItemTitle">EXCHANGE</h2>
                        </div>
                        <div className="row UserDashboardExchangeFromSendLabel">
                            <span className="sendLabel">Send</span>
                        </div>
                        <div className="row welcomeSendDiv UserDashboardExchangeFromSendLabel">
                            <div className="col-xl-7 welcomeSendSelectbox">
                                <div className="app-sendSelectbox">
                                    <FormGroup className="welcomeSendFormGroup">
                                    <Input type="select" name="select" className="welcomeSendSelectInput">
                                        <option>Bitcoin</option>
                                    </Input>
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="col-xl-5 welcomeSendLabel">
                                <FormControl aria-describedby="weight-helper-text" fullWidth>
                                    <Input
                                    className="welcomeSendInput"
                                    value={this.state.sendVal}
                                    onChange={this.handleChange}
                                    />
                                </FormControl>
                            </div>
                        </div>

                        <div className="row UserDashboardExchangeFromSendLabel">
                            <span className="sendLabel">Get</span>
                        </div>
                        <div className="row welcomeSendDiv UserDashboardExchangeFromSendLabel">
                            <div className="col-xl-7 welcomeSendSelectbox">
                                <div className="app-sendSelectbox">
                                    <FormGroup className="welcomeSendFormGroup">
                                    <Input type="select" name="select" className="welcomeSendSelectInput">
                                        <option>Bitcoin</option>
                                    </Input>
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="col-xl-5 welcomeSendLabel">
                                <FormControl aria-describedby="weight-helper-text" fullWidth>
                                    <Input
                                    className="welcomeSendInput"
                                    value={this.state.sendVal}
                                    onChange={this.handleChange}
                                    />
                                </FormControl>
                            </div>
                        </div>

                        <div className="row UserDashboardExchangeFromSendLabel">
                            <div className="col-xl-7">
                                <span className="monthlyLimitLabel">Monthly Limit</span>
                            </div>

                            <div className="col-xl-5 welcomeSendLabel">
                                <span className="remainingLabel">$49750 remaining</span>
                            </div>
                        </div>

                        <div className="row UserDashboardExchangeFromSendLabel">
                            <a className="exchangeNowBtn" fullWidth>
                                Exchange now <span className="exchangeArrowSymbol">&#8594;</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-7">
                    <RecentActivities data={dataRecentActivities} />
                </div>

            </div>


        </div>
      )}
}