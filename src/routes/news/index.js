import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import { FormGroup, Input } from 'reactstrap';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';

import { RctCard } from 'Components/RctCard';

import {
	ContactRequestWidget
} from "Components/Widgets";

export default class News extends Component {

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

           <div className="News">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <span className="NewsTitle">Latest News</span>
                    </div>
                    <div className="col-sm-0 col-md-1 col-lg-3">

                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-3">
                        <TextField
                            id="search"
                            name="search"
                            value={this.state.search}
                            onChange={this.onChange}
                            placeholder="Search"
                            variant="outlined"
                            size="medium"
                            className="float-right NewsSearch"
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

               <div className="NewsBody">

                  <div className="NewsBodyRow">
                    <RctCard>
                        <div className="row">
                            <div className="col-sm-12 col-md-7 order-2 NewsRight">
                                <h2 className="title NewsRightName">LAUNCH OF EXCHANGE, BITHASHEX</h2>
                                <span className="d-block mb-20 NewsRightAuthor">BY JOHNDOE, OCT 20, 2019 | 3:00 PM</span>
                                <span className="d-block mb-20 NewsRightContent">Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.Test launch</span>
                                <a className="title NewsRightReadMore">READ MORE</a>
                            </div>
                            <div className="col-sm-12 col-md-5 order-1 NewsBodyImageDiv">
                                <div className="about-image NewsBodyImage">
                                    <img src={require('Assets/pic/news-img1.png')} alt="about gallery" className="img-fluid" width="" height="" />
                                </div>
                            </div>
                        </div>
                    </RctCard>
                </div>

                <div className="NewsBodyRow">
                  <RctCard>
                     <div className="row">
                        <div className="col-sm-12 col-md-7 order-2 NewsRight">
                           <h2 className="title NewsRightName">FOREIGN CURRENCIES INCLUDED IN EXCHANGE</h2>
                           <span className="d-block mb-20 NewsRightAuthor">BY JOHNDOE, OCT 20, 2019 | 3:00 PM</span>
                           <span className="d-block mb-20 NewsRightContent">Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.Test launch</span>
                           <a className="title NewsRightReadMore">READ MORE</a>
                        </div>
                        <div className="col-sm-12 col-md-5 order-1 NewsBodyImageDiv">
                            <div className="about-image NewsBodyImage">
                              <img src={require('Assets/pic/news2-img.png')} alt="about gallery" className="img-fluid" width="" height="" />
                           </div>
                        </div>
                     </div>
                  </RctCard>
                </div>

                  <div className="NewsBodyRow">
                    <RctCard>
                        <div className="row">
                            <div className="col-sm-12 col-md-7 order-2 NewsRight">
                                <h2 className="title NewsRightName">LAUNCH OF EXCHANGE, BITHASHEX</h2>
                                <span className="d-block mb-20 NewsRightAuthor">BY JOHNDOE, OCT 20, 2019 | 3:00 PM</span>
                                <span className="d-block mb-20 NewsRightContent">Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.Test launch</span>
                                <a className="title NewsRightReadMore">READ MORE</a>
                            </div>
                            <div className="col-sm-12 col-md-5 order-1 NewsBodyImageDiv">
                                <div className="about-image NewsBodyImage">
                                    <img src={require('Assets/pic/news-img1.png')} alt="about gallery" className="img-fluid" width="" height="" />
                                </div>
                            </div>
                        </div>
                    </RctCard>
                </div>

                <div className="NewsBodyRow">
                  <RctCard>
                     <div className="row">
                        <div className="col-sm-12 col-md-7 order-2 NewsRight">
                           <h2 className="title NewsRightName">FOREIGN CURRENCIES INCLUDED IN EXCHANGE</h2>
                           <span className="d-block mb-20 NewsRightAuthor">BY JOHNDOE, OCT 20, 2019 | 3:00 PM</span>
                           <span className="d-block mb-20 NewsRightContent">Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.  Test launch news article bithashex.Test launch</span>
                           <a className="title NewsRightReadMore">READ MORE</a>
                        </div>
                        <div className="col-sm-12 col-md-5 order-1 NewsBodyImageDiv">
                           <div className="about-image NewsBodyImage">
                              <img src={require('Assets/pic/news2-img.png')} alt="about gallery" className="img-fluid" width="" height="" />
                           </div>
                        </div>
                     </div>
                  </RctCard>
                </div>

               </div>
            </div>            

        </div>
      );
   }
}