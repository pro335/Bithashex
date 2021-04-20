import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { withStyles } from '@material-ui/core/styles';

import {
    Button as MaterialBtn,
} from '@material-ui/core';

import WarehouseTabs from './ResourcesTabs';

export default class ForexTradingPart1 extends Component {

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

           <div className="AboutUs">
                <div className="row">
                    
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <span className="AboutUsTitle">Resources</span>
                    </div>

                    <div className="col-sm-0 col-md-1 col-lg-4">

                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-2">
                        <DownloadPDFBtn
                            onClick={downloadPDFBtnClicked}>
                            DOWNLOAD PDF
                        </DownloadPDFBtn>
                    </div>
                </div>

                <WarehouseTabs index={1}/>

            </div>            

        </div>
      );
   }
}