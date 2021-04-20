import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { FormGroup, Input } from 'reactstrap';

import FormControl from '@material-ui/core/FormControl';

// components
import { RctCard } from 'Components/RctCard';

var SectionImage = require('../../assets/pic/banner.png');

var sectionStyle = {
    backgroundImage: "url(" + SectionImage + ")"
};

export default class ContactUs extends Component {

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
            
            <div className="ContactUs" customclasses="text-center" >
               <div className="row ContactUsBody">
                  <div className="col-xl-4 col-md-6 col-sm-12">
                     <div className="ContactUsBodyLeftItem">
                        <img src={require('Assets/pic/location.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                        <span className="ContactUsBodyLeftItemText text-center">204-1590 Bellevue Ave West Vancouver BC Canada</span>
                     </div>

                     <div className="ContactUsBodyLeftItem">
                        <img src={require('Assets/pic/phone.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                        <span className="ContactUsBodyLeftItemText text-center">(+880) 1243 665566</span>
                     </div>

                     <div className="ContactUsBodyLeftItem ContactUsBodyLeftItemMail">
                        <img src={require('Assets/pic/mail.png')} alt="about gallery" className="img-fluid" width="" height="" />                              
                        <span className="ContactUsBodyLeftItemText ContactUsBodyLeftItemTextMail text-center">info@whartstreetst<span style={{fontSize: '5px'}}> </span>rat<span style={{fontSize: '5px'}}> </span>eg<span style={{fontSize: '5px'}}> </span>aies<span style={{fontSize: '5px'}}> </span>.com</span>
                     </div>

                  </div>

                  <div className="col-xl-8 col-md-6 col-sm-12 w-xs-half-block ContactUsRight">
                     <div className="row ContactUsRightFirst">

                        <div className="col-xl-6 ContactUsRightFirstInput">
                           <FormControl aria-describedby="weight-helper-text">
                              <Input
                                 className="ContactUsRightInput"
                                 placeholder="Full name"
                                 onChange={this.handleChange}
                              />
                           </FormControl>
                        </div>

                        <div className="col-xl-6 ContactUsRightEmail">
                           <FormControl aria-describedby="weight-helper-text">
                              <Input
                                 className="ContactUsRightInput"
                                 placeholder="Email ID"
                                 onChange={this.handleChange}
                              />
                           </FormControl>
                        </div>
                     </div>

                     <div className="row ContactUsRightSecond" >
                        <div className="col-xl-12">
                           <FormControl aria-describedby="weight-helper-text">
                              <Input
                                 type="textarea"
                                 className="ContactUsRightMultiInput"
                                 placeholder="Tell us what we can help you with..."
                                 onChange={this.handleChange}
                              />
                           </FormControl>
                        </div>
                     </div>

                     <div className="row">
                        <a className="contactUsSendMessageBtn">
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