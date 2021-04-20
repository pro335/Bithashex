import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { withStyles } from '@material-ui/core/styles';

import {
    Button as MaterialBtn,
} from '@material-ui/core';

import ResourcesTabs from './tabs/ResourcesTabs';

const data = [
    {
        title: "1. Volumes",
        content:  "The term volume means hwo much of a given stock ( Quantity ) was traded in particular period of time."
    },
    {
        title: "2. Accumulation Distribution",
        content: "Accumulation Distribution uses volume to confirm the price trends."
    },
    {
        title: "i. Accumulation: Volume is considered to be accumulated when the day's closing price is higher than the previous day's closing price.",
        content: "ii. Distribution: Volume is distributed when the day's closing price is lower than the previous day's closing price."
    },
    {
        title: "3. Money Flow Index (MFI)",
        content: "It's an oscillator that ranges from 0 to 100 used to show the money flow over several days. MFI uses price & volume concept to create an oversold and overbought indicator that is helpful in confirming trends in price and warning of potential reersals in prices. Oversold levels typically occur below 20 and overbought levels typically occur above 80."
    },
    {
        title: "4. On Balance Volume (OBV)",
        content: "OBV is a technical analasis indicator which is designed to relate price and volume in the stock market. Total volume for each day is assigned a positive or negitive value depending on prices being higher or lower that day. A higher close results in the volume for that day to get a positive value, while a lower close results in negitive value. So, when price closes higher than the previous close, OBV should be positive and If it closes lower than the previous close, OBV should be negative."
    },
]

export default class Resources extends Component {

   constructor(props) {

      super(props);

      this.state = {
          search: "",
          contentData: data
      }

   }

   onChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   render() {

        let contentData = data;

        const DownloadPDFBtn = withStyles(theme => ({
            root: {
                width: '100%',
                height: '100%',
                color: 'white',
                backgroundColor: '#1d275a',
                fontSize: '20px',
                '&:hover': {
                    backgroundColor: '#404d8f',
                },
            },
        }))(MaterialBtn);

        
        const downloadPDFBtnClicked = () => {
        }

      return (
         <div className="blank-wrapper">
           <Helmet>
              <title>Bithashex</title>
              <meta name="description" content="Bithashex Page" />
           </Helmet>

           <div className="Resources">
                <div className="row">
                    
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <span className="AboutUsTitle">Resources</span>
                    </div>

                    <div className="col-sm-0 col-md-1 col-lg-4">

                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-2 ResourcesDownloadPdfBtn">
                        <DownloadPDFBtn
                            onClick={downloadPDFBtnClicked}>
                            DOWNLOAD PDF
                        </DownloadPDFBtn>
                    </div>
                </div>

                <ResourcesTabs index={0}/>

                {data.map((eachContent, key) => (
                    <span className="d-block mb-20 ResourcesContentItem" key={key}>{eachContent.title} <br /> {eachContent.content}</span>
                ))}
            </div>            

        </div>
      );
   }
}