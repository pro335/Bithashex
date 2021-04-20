import React, { Component } from 'react';
import { Helmet } from "react-helmet";

const data = [
    {
        image: "affiliates1.png"
    },
    {
        image: "affiliates2.png"
    },
    {
        image: "affiliates3.png"
    },
    {
        image: "affiliates4.png"
    },
    {
        image: "affiliates1.png"
    },
    {
        image: "affiliates2.png"
    },
    {
        image: "affiliates3.png"
    },
    {
        image: "affiliates4.png"
    },
]

export default class Affiliate extends Component {

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

           <div className="Compliance Affiliate">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 ComplianceTopPart">
                        <span className="AboutUsTitle">Our Affiliates</span>
                        <span className="AboutUsSubTitle">BithashEx has a variety of features that make it the best place to start trading</span>
                    </div>
                </div>

                <div className="row">
                    <span className="d-block mb-20 ResourcesContentItem"> BithashEx is a radical product of Wharf Street Financials that aims to change the game of Global Crypto Remittance Services. A renowned Malta registered Fintech organization - Wharf Street Financials along with it's experienced charismatic Founder - Jafar Safari, have a long - standing specialization in provision of full flock Financial Services for the adoption of technologically enhanced Digital Assets by users from all-spheres of life. Wharf Street Financials aspires to 'Bank the Unbanked' via the emerging revolutionary Blockchain Technology deemed to be the driving force behind the Forth Industrial Revolution, alongside Artificial Intelligence. </span>
                </div>

                <div className="row AffiliateBrandRow">
                    {data.map((eachItem, key) => (
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 ComplianceTopPart" key={key}>
                            <div className="AffiliateEachCell">
                                <img src={require(`Assets/pic/${eachItem.image}`)} alt="about card" className="img-fluid" width="" height=""/>
                            </div>

                        </div>
                    ))}
                </div>

            </div>            

        </div>
      );
   }
}