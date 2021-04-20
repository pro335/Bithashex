import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class AboutUs extends Component {

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

           <div className="AboutUs">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <span className="AboutUsTitle">About us</span>
                        <span className="AboutUsSubTitle">BithashEx has a variety of features that make it the best place to start trading</span>
                    </div>
                </div>

               <div className="AboutUsBody">

                  <div className="AboutUsBodyRow">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 order-2 AboutUsBodyRight">
                            <span className="d-block mb-20 AboutUsBodyRightContent">BithashEx is a radical product of Wharf Street Financials that aims to change the game of Global Crypto Remittance Services. A renowned Malta registered Fintech organization- Wharf Street Financials along with it's experienced charismatic Founder - Jafar Safari, have a long-standing specialization in provision of full flock Financial Services for the adoption of technologically enhanced Digital Assets by users from all-spheres of life. Wharf Street Financials aspires to 'Bank the Unbanked' via the emerging revolutionary Blockchain Technology deemed to be the driving force behind the Forth Industrial Revolution, alongside Artificial Intelligence.</span>
                        </div>
                        <div className="col-sm-12 col-md-6 order-1">
                        <div className="about-image">
                            <img src={require('Assets/pic/about-us.png')} alt="about gallery" className="img-fluid" width="" height="" />
                        </div>
                        </div>
                    </div>
                 </div>

               </div>

               <span className="d-block mb-20 AboutUsBodyBottomContent">Backed by nearly Two-Decades of inviolable expertise in the Global Fiscal Remittance and Monetary Excahnges, patrons of Wharf Street Financials - Jafar Safari and Dr.Farrokh Amini - have come up with a unique proffer of a One-stop destination for Fiat and Crypto Trading, Listing, Funding and Training for global remittance services. Developed with keeping simplicity, functionality, and security in mind, Wharf Street Financials aims to provide a well-protected, risk-free entry for novices and experienced traders into the Digital Asset Markets for accessing value-added services through the use of BithashEx token and platform.</span>

            </div>            

        </div>
      );
   }
}