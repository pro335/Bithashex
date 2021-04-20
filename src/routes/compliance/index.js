import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const data1 = [
    {
        content:  "Wharf Street Financials has taken a very progressive tactic to virtual currency, positioning itself as a business fully complied in crypto regulation based on FATF regulation and client' jurisdiction regulatory."
    },
    {
        content: "Most governments allow the use of cryptocurrencies. According to the most regulations ( FATF, FINTRAC, MONEVAL, and ...) on digital currencies, you can use digital currencies to buy goods and services on the internet and in stores that accept digital currencies. You may also buy and sell digital currency on open exchanges, called digital currency or cryptocurrency exchanges. However, cryptocurrencies are not considered legal tendar in Canada."
    },
    {
        content: "Based on these laws, virtual currencies, including Bitcoin, has been treated as \"money service businesses\" for purposes of anti-money laundering laws. As a result of the law, companies dealing in virtual currencies are required to register on any jurisdiction, put into effect compliance programs, \"keep and retain prescribed records,\" report suspicious or terrorist-related property transactions, and determine if any of their customers are \"politically exposed persons\"."
    },
    {
        content: "The VFA regulations (effective from November 2018) also introduced the Innovative Technology Arrangements and Services Act which established the regime for the future registration and accountability of crypto service providers. Going forward, the MDIA will be the government authority responsible for creating crypto policy, collaborating with other nations and organizations, and enforcing ethical standards for the use of crypto and blockchain technnology."
    }
]

const data2 = [
    {
        content:  "We strive to protect our Users from fraudulent and scam activities in the crypto assets sphere. It is possible that certain crypto assets are used for the scam or any other criminal activity, as defined by law. To prevent this, it is necessary to take measures to ensure customer verification and security of financial transactions. One of the best measures is AML/KYC procedure, which allows us to confirm, that you are a law-abiding individual or corporation."
    },
    {
        content: "WSF service has a risk scoring system that can spot suspicious activity. If the system flags a transaction, it will put on hold, and the User is asked to pass AML & KYC verification. For the reasons of security, we are not able to disclose specific criteria of our system. However, it has proven to be very effective against money launderers, scammers, etc."
    },
    {
        content: "WSF service reserves the right to apply the AML/KYC procedure to certain User, address and transactions of crypto assets. Application of the AML/KYC procedure is based on WSF service internal policies and aimed at preventing and mitigating possible risks of WSF service have been involved in money laundering as well as any other illegal activities."
    },
    {
        content: "Please be informed, that WSF service reserves the right to appoint Third-party service provider to fulfill AML/KYC procedure on behalf of WSF service. While processing your information, such service provider completely complies our Privacy Policy in respect of your personal information."
    },
    {
        content: "WSF service will not enter a business agreement with individual or entity suspected of or directly involved in money laundering, or in which the funds have been the source of illegal activity."
    }
]

export default class Compliance extends Component {

   constructor(props) {

      super(props);

      this.state = {
          search: ""
      }

   }

   onChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   render() {
      return (
         <div className="blank-wrapper">
           <Helmet>
              <title>Bithashex</title>
              <meta name="description" content="Bithashex Page" />
           </Helmet>

           <div className="Compliance Compliance1">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 ComplianceTopPart">
                        <span className="AboutUsTitle">Compliance</span>
                        <span className="AboutUsSubTitle">BithashEx terms & conditions</span>
                    </div>
                    <div className="col-sm-0 col-md-1 col-lg-3">

                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-3 ComplianceSearch">
                        <TextField
                            id="search"
                            name="search"
                            value={this.state.search}
                            onChange={this.onChange}
                            placeholder="Search"
                            variant="outlined"
                            size="medium"
                            className="float-right"
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </div>

                <div className="row">
                    <span className="ComplianceRegistration">Registration & Legalities</span>
                    {data1.map((eachContent, key) => (
                        <span className="d-block mb-20 ResourcesContentItem" key={key}> {eachContent.content} </span>
                    ))}

                <span className="ComplianceRegistration">AML/KYC</span>
                    {data2.map((eachContent, key) => (
                        <span className="d-block mb-20 ResourcesContentItem" key={key}> {eachContent.content} </span>
                    ))}
                </div>

            </div>            

        </div>
      );
   }
}