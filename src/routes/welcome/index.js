import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { FormGroup, Input } from 'reactstrap';

import FormControl from '@material-ui/core/FormControl';

// components
import PricingBlockV1 from './PricingBlockV1';
import CreateCryptocurrencyItem from './CreateCryptocurrencyItem';
import WelcomeWhatwedoItem from './WelcomeWhatwedoItem';
import { RctCard } from 'Components/RctCard';

var SectionImage = require('../../assets/pic/banner.png');

var sectionStyle = {
    backgroundImage: "url(" + SectionImage + ")"
};

export default class Welcome extends Component {

   constructor(props) {

      super(props);

      this.state = {
         sendVal: "125.00 USD",
         getVal: "125.00 USD"
      }
   }

   onChange = e => {
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

           <div className="section-image" style={ sectionStyle }>
               <div className="row">
                  <div className="col-xl-6 col-lg-12 col-md-12 w-xs-half-block leftSection">
                     <span className="financialHub">The Financial Hub of Digital Assets</span>
                     <span className="provideSecure">Provide secure and reliable digital assets trading and assets management services to millions of users in over XXX countries around the world.</span>
                     
                     <div className="row sectionButtons">
                        <a className="getStartedBtn">
                           Get Started
                        </a>
                     
                        <a className="browseNowBtn">
                           Browse Now
                        </a>
                     </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-md-12 w-xs-half-block">
                     <div className="welcomeExchangeForm">
                        <div className="row">
                           <span className="sendLabel">Send</span>
                        </div>
                        <div className="row welcomeSendDiv">
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

                        <div className="row">
                           <span className="sendLabel">Get</span>
                        </div>
                        <div className="row welcomeSendDiv">
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

                        <div className="row">
                           <div className="col-xl-7">
                              <span className="monthlyLimitLabel">Monthly Limit</span>
                           </div>

                           <div className="col-xl-5 welcomeSendLabel">
                              <span className="remainingLabel">$49750 remaining</span>
                           </div>
                        </div>

                        <div className="row">
                           <a className="exchangeNowBtn" fullWidth>
                              Exchange now <span className="exchangeArrowSymbol">&#8594;</span>
                           </a>
                        </div>

                     </div>
                  </div>

               </div>
            </div>
            
            <div className="price-list welcomeSeveralMoney">
					<div className="row row-eq-height welcomeSeveralMoneyFirstRow">
                  <PricingBlockV1   
                     className="welcomeSeveralMoneyBCH"
                     icon="bitcoin-cash.png"
							type="BCH"
                     money="USD 0.03810000"
                     percentRate="0.00%"
                     lineColor="#e19d48"
						/>

                  <PricingBlockV1   
                     className="welcomeSeveralMoneyBCH"
                     icon="ethereum.png"
							type="Ethereum"
                     money="USD 1.00000000"
                     percentRate="+1.00%"
                     lineColor="#a6a8a7"
						/>

                  <PricingBlockV1   
                     className="welcomeSeveralMoneyBCH"
                     icon="litecoin.png"
							type="Litecoin"
                     money="USD 0.03810000"
                     percentRate="0.00%"
                     lineColor="#4588bc"
						/>

                  
                  <PricingBlockV1   
                     className="welcomeSeveralMoneyBCH"
                     icon="ripple.png"
							type="Ripple"
                     money="USD 0.03810000"
                     percentRate="0.00%"
                     lineColor="#4588bc"
						/>
					</div>

               <div className="row row-eq-height welcomeSeveralMoneySecondRow">
                  <PricingBlockV1   
                     className="welcomeSeveralMoneyBCH"
                     icon="bitcoin.png"
							type="Bitcoin"
                     money="USD 0.03810000"
                     percentRate="0.00%"
                     lineColor="#e19d48"
						/>

                  <PricingBlockV1   
                     className="welcomeSeveralMoneyBCH"
                     icon="indian-rupee.png"
							type="Indian Rupee"
                     money="USD 1.00000000"
                     percentRate="+1.00%"
                     lineColor="#a6a8a7"
						/>

                  <PricingBlockV1   
                     className="welcomeSeveralMoneyBCH"
                     icon="stellar.png"
							type="Stellar Lumens"
                     money="USD 0.03810000"
                     percentRate="0.00%"
                     lineColor="#4588bc"
						/>

               </div>
				</div>

            <div className="welcomeGetStarted" customClasses="text-center" >
               <h2 className="welcomeGetStartedTitle text-center">Get started in a few minutes</h2>
               <p className="welcomeGetStartedSubtitle text-center">Trade Bitcoin, ETH, and hundreds of other cryptocurrencies in minutes.</p>
               <div className="row welcomeGetStartedIcons">
                  <div className="col-md-4">
                     <img className="welcomeGetStartedCreaingAccountIcon" src={require(`Assets/pic/create-account.png`)} alt="Create account icon" width="" height=""/>
                     <span className="welcomeGetStartedCreaingAccountTitle text-center">Create an account</span>
                  </div>
                  <div className="col-md-4">
                     <img className="welcomeGetStartedLinkBankAccountIcon" src={require(`Assets/pic/link-bank-account.png`)} alt="Create account icon" width="" height=""/>
                     <span className="welcomeGetStartedLinkBankAccountTitle text-center">Link your back account</span>
                  </div>
                  <div className="col-md-4">
                     <img className="welcomeGetStartedCreaingAccountIcon" src={require(`Assets/pic/buy-sell.png`)} alt="Create account icon" width="" height=""/>
                     <span className="welcomeGetStartedCreaingAccountTitle text-center">Start buying and selling</span>
                  </div>
               </div>
            </div>

            <div className="welcomeCreateCryptocurrency" customClasses="text-center" >
               <h2 className="welcomeCreateCryptocurrencyTitle text-center">Create your cryptocurrency portfolio today</h2>
               <p className="welcomeCreateCryptocurrencySubtitle text-center">BithashEx has a variety of features that make it the best place to start trading</p>

               <div className="row welcomeCreateCryptocurrencySecond">
                  <div className="col-sm-6 col-md-6 col-xl-6 w-xs-full">
                     <div className="row row-eq-height">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 w-xs-half-block">
                           <CreateCryptocurrencyItem 
                              icon="manage-portfolio.png"
                              title="Manage your portfolio"
                              content="Buy and sell popular digital currencies, keep track of them in the one place."
                           />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 w-xs-half-block">
                           <CreateCryptocurrencyItem 
                              icon="recurring-buy.png"
                              title="Recurring buys"
                              content="Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly."
                           />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 w-xs-half-block">
                           <CreateCryptocurrencyItem 
                              icon="vault-protection.png"
                              title="Vault protection"
                              content="For added security, store your funds in a vault with time delayed withdrawals."
                           />
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 w-xs-half-block">
                           <CreateCryptocurrencyItem 
                              icon="24-7.png"
                              title="24/7 live chat support"
                              content="For added security, store your funds in a vault with time delayed withdrawals."
                           />
                        </div>

                     </div>
                  </div>

                  <div className="col-xl-6 col-md-4 w-xs-half-block">
                     <img src={require(`Assets/pic/portfolio.jpg`)} className="WelcomePortfolio" alt="Create account icon" width="" height=""/>
                  </div>

               </div>
            </div>

            <div className="WelcomeWhatwedo" customClasses="text-center" >
               <h2 className="WelcomeWhatwedoTitle text-center">What we do?</h2>
               <p className="WelcomeWhatwedoSubtitle text-center">BitHashEx is the best decentralized, fast and reliable P2P exchange which provides robust solutions to the on-going problems.</p>
               <div className="price-list welcomeSeveralMoney">
                  <div className="row row-eq-height WelcomeWhatwedoItemFirstRow">
                     <WelcomeWhatwedoItem   
                        icon="trade.png"
                        title="Trade Securely"
                        content="All the power of BithashEx's cryptocurrency exchange, in the palm of your hand. All the power of BithashEx's cryptocurrency exchange, in the palm of your hand. All the power of BithashEx's cryptocurrency exchange, in the palm of your hand."
                     />

                     <WelcomeWhatwedoItem   
                        icon="exchange (2).png"
                        title="Exchange Rates"
                        content="All the power of BithashEx's cryptocurrency exchange, in the palm of your hand. All the power of BithashEx's cryptocurrency exchange, in the palm of your hand. All the power of BithashEx's cryptocurrency exchange, in the palm of your hand."
                     />

                     <WelcomeWhatwedoItem   
                        icon="education.png"
                        title="Education"
                        content="All the power of BithashEx's cryptocurrency exchange, in the palm of your hand. All the power of BithashEx's cryptocurrency exchange, in the palm of your hand. All the power of BithashEx's cryptocurrency exchange, in the palm of your hand."
                     />
                  </div>
               </div>
            </div>

            <div className="welcomeCreateCryptocurrency WelcomeWhatOurCustomerSay" customClasses="text-center" >
               <h2 className="welcomeCreateCryptocurrencyTitle WecomeWhatOurCustomerSayTitle text-center">What our customer says</h2>
               <p className="welcomeCreateCryptocurrencySubtitle WecomeWhatOurCustomerSaySubTitle text-center">Trusted by 2 million customers</p>

               <div className="welcomeWhatOurCustomerContent">
                  <RctCard>
                     <div className="row">
                        <div className="col-sm-12 col-md-6 order-2 welcomeWhatOurCustomerRight">
                           <img src={require('Assets/pic/inverted-comma.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                           <span className="d-block mb-20 welcomeWhatOurCustomerRightContent">They store the vast majority of the digital assets in secure offline storage. BithashEx's supports a variety of the most popular digital currencies.</span>
                           <h2 className="title welcomeWhatOurCustomerRightName">Mr Abraham</h2>
                           <p className="fs-14 welcomeWhatOurCustomerRightJob">CEO, Nestle Company</p>
                        </div>
                        <div className="col-sm-12 col-md-6 order-1">
                           <div className="about-image WelcomeTestimonialImg">
                              <img src={require('Assets/pic/testimonial-img.png')} alt="about gallery" className="img-fluid" width="" height="" />
                           </div>
                        </div>
                     </div>
                  </RctCard>
               </div>
            </div>
            
            <div className="WelcomeGetInTouch" customClasses="text-center" >
               <h2 className="WelcomeWhatwedoTitle text-center">Get in touch</h2>
               <p className="WelcomeWhatwedoSubtitle WelcomeGetInTouchSubtitle text-center">Let us hear from you directly!</p>
               <div className="row WelcomeGetInTouchBody">
                  <div className="col-xl-4 col-md-6 col-sm-12">
                     <div className="WelcomeGetInTouchBodyLeftItem">
                        <img src={require('Assets/pic/location-white.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                        <span className="WelcomeGetInTouchBodyLeftItemText text-center">204-1590 Bellevue Ave West Vancouver BC Canada</span>
                     </div>

                     <div className="WelcomeGetInTouchBodyLeftItem">
                        <img src={require('Assets/pic/phone-white.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                        <span className="WelcomeGetInTouchBodyLeftItemText text-center">(+880) 1243 665566</span>
                     </div>

                     <div className="WelcomeGetInTouchBodyLeftItem">
                        <img src={require('Assets/pic/mail-white.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                        <span className="WelcomeGetInTouchBodyLeftItemText text-center">info@whartstreetstrat<span style={{fontSize: '5px'}}> </span>eg<span style={{fontSize: '5px'}}> </span>aies<span style={{fontSize: '5px'}}> </span>.com</span>
                     </div>

                  </div>

                  <div className="col-xl-8 col-md-6 col-sm-12 w-xs-half-block WelcomeGetInTouchRight">
                     <div className="row WelcomeGetInTouchRightFirst">

                        <div className="col-xl-6 WelcomeGetInTouchRightFirstInput">
                           <FormControl aria-describedby="weight-helper-text">
                              <Input
                                 className="WelcomeGetInTouchRightInput"
                                 placeholder="Full name"
                                 onChange={this.handleChange}
                              />
                           </FormControl>
                        </div>

                        <div className="col-xl-6">
                           <FormControl aria-describedby="weight-helper-text">
                              <Input
                                 className="WelcomeGetInTouchRightInput WelcomeGetInTouchRightEmailInput"
                                 placeholder="Email ID"
                                 onChange={this.handleChange}
                              />
                           </FormControl>
                        </div>
                     </div>

                     <div className="row WelcomeGetInTouchRightSecond" >
                        <div className="col-xl-12">
                           <FormControl aria-describedby="weight-helper-text">
                              <Input
                                 type="textarea"
                                 className="WelcomeGetInTouchRightMultiInput"
                                 placeholder="Tell us what we can help you with..."
                                 onChange={this.handleChange}
                              />
                           </FormControl>
                        </div>
                     </div>

                     <div className="row">
                        <a className="sendMessageBtn">
                           Send Message
                        </a>
                     </div>

                  </div>

               </div>
            </div> 

        </div>
      );
   }
}