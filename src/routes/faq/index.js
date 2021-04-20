import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import FaqItem from './FaqItem';

const data = [
    {
        no: 1,
        title: "How does BithashEx work?",
        content:  "BithashEx is a radical product of Wharf Street Financials that aims to change the game of Global Crypto Remittance Services. A renowned Malta registered Fintech organization - Wharf Street Financials along with it's experienced charismatic Founder - Jafar Safari, have a long - standing specialization in provision of full flock Financial Services for the adoption of technologically enhanced Digital Assets by users from all-speheres of life. Wharf Street Financials aspires to 'Bank the Unbanked' via the emerging revolutionary Blockchain Technology deemed to be the driving force behind the Forth Industrial Revolution, alongside Artificial Intelligence."
    },
    {
        no: 2,
        title: "Why should I trust you?",
        content:  "BithashEx is a radical product of Wharf Street Financials that aims to change the game of Global Crypto Remittance Services. A renowned Malta registered Fintech organization - Wharf Street Financials along with it's experienced charismatic Founder - Jafar Safari, have a long - standing specialization in provision of full flock Financial Services for the adoption of technologically enhanced Digital Assets by users from all-speheres of life. Wharf Street Financials aspires to 'Bank the Unbanked' via the emerging revolutionary Blockchain Technology deemed to be the driving force behind the Forth Industrial Revolution, alongside Artificial Intelligence."
    },
    {
        no: 3,
        title: "Does BithashEx fixes rates?",
        content:  "BithashEx is a radical product of Wharf Street Financials that aims to change the game of Global Crypto Remittance Services. A renowned Malta registered Fintech organization - Wharf Street Financials along with it's experienced charismatic Founder - Jafar Safari, have a long - standing specialization in provision of full flock Financial"
    },
    {
        no: 4,
        title: "Does BithashEx fixes rates?",
        content:  "BithashEx is a radical product of Wharf Street Financials that aims to change the game of Global Crypto Remittance Services. A renowned Malta registered Fintech organization - Wharf Street Financials along with it's experienced charismatic Founder - Jafar Safari, have a long - standing specialization in provision of full flock Financial Services for the adoption of technologically enhanced Digital Assets by users from all-speheres of life. Wharf Street Financials aspires to 'Bank the Unbanked' via the emerging revolutionary Blockchain Technology deemed to be the driving force behind the Forth Industrial Revolution, alongside Artificial Intelligence."    
    },
    {
        no: 5,
        title: "Does BithashEx fixes rates?",
        content:  "BithashEx is a radical product of Wharf Street Financials that aims to change the game of Global Crypto Remittance Services. A renowned Malta registered Fintech organization - Wharf Street Financials along with it's experienced charismatic Founder - Jafar Safari, have a long - standing specialization in provision of full flock Financial Services for the adoption of technologically enhanced Digital Assets by users from all-speheres of life. Wharf Street Financials aspires to 'Bank the Unbanked' via the"    
    },
]

export default class Faq extends Component {

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

           <div className="Compliance FAQ">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 ComplianceTopPart">
                        <span className="AboutUsTitle">FAQs</span>
                        <span className="AboutUsSubTitle">Frequently Asked Questions</span>
                    </div>
                    <div className="col-sm-0 col-md-1 col-lg-3">

                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-3 FaqSearch">
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

                {data.map((eachContent, key) => (
                    <FaqItem 
                        key={key}
                        no={eachContent.no}
                        title={eachContent.title}
                        content={eachContent.content}
                    />
                ))}

            </div>            

        </div>
      );
   }
}