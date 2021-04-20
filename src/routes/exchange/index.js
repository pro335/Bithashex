import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import ExchangeStatus from './ExchangeStatus';
import TradeHistory from './TradeHistory';
import Buy from './Buy';
import Sell from './Sell';

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

export default class Exchange extends Component {

   render() {
      return (
         <div className="blank-wrapper Exchange">
           <Helmet>
              <title>Bithashex</title>
              <meta name="description" content="Bithashex Page" />
           </Helmet>

           <div className="row">
               <div className="col-sm-12 col-md-12 col-lg-5">
                    <ExchangeStatus data={dataExchangeStatus}/>
                    <TradeHistory data={dataTradeHistory} />
               </div>

               <div className="col-sm-12 col-md-12 col-lg-7 ExchangeChart">

                  <ChartWidget
                     labels={chartLabels}
                     datasets={chartDatasets}
                  />
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
        </div>
      )}
}