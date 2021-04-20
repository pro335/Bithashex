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

const data = [
    {
        image: 'blog1.png',
        title: 'Why does Litecoin need MimbleWimble?',
        content: 'Lorem iprum is a dummy text. Lorem iprum is a dummy text. Lorem iprum is a dummy text...',
        contentAdmin: 'Admin',
        contentDate: '30 Mar, 2020 | 2:30 pm'
    },
    {
        image: 'blog2.png',
        title: 'How to securely store your HD wallet seeds?',
        content: 'Lorem iprum is a dummy text. Lorem iprum is a dummy text. Lorem iprum is a dummy text...',
        contentAdmin: 'Admin',
        contentDate: '30 Mar, 2020 | 2:30 pm'
    },
    {
        image: 'blog3.png',
        title: 'Exclusive interview with Xinxi Wang of Litecoin',
        content: 'Lorem iprum is a dummy text. Lorem iprum is a dummy text. Lorem iprum is a dummy text...',
        contentAdmin: 'Admin',
        contentDate: '30 Mar, 2020 | 2:30 pm'
    },
    {
        image: 'blog1.png',
        title: 'Why does Litecoin need MimbleWimble?',
        content: 'Lorem iprum is a dummy text. Lorem iprum is a dummy text. Lorem iprum is a dummy text...',
        contentAdmin: 'Admin',
        contentDate: '30 Mar, 2020 | 2:30 pm'
    },
    {
        image: 'blog2.png',
        title: 'How to securely store your HD wallet seeds?',
        content: 'Lorem iprum is a dummy text. Lorem iprum is a dummy text. Lorem iprum is a dummy text...',
        contentAdmin: 'Admin',
        contentDate: '30 Mar, 2020 | 2:30 pm'
    },
    {
        image: 'blog3.png',
        title: 'Exclusive interview with Xinxi Wang of Litecoin',
        content: 'Lorem iprum is a dummy text. Lorem iprum is a dummy text. Lorem iprum is a dummy text...',
        contentAdmin: 'Admin',
        contentDate: '30 Mar, 2020 | 2:30 pm'
    },
    {
        image: 'blog1.png',
        title: 'Why does Litecoin need MimbleWimble?',
        content: 'Lorem iprum is a dummy text. Lorem iprum is a dummy text. Lorem iprum is a dummy text...',
        contentAdmin: 'Admin',
        contentDate: '30 Mar, 2020 | 2:30 pm'
    },
    {
        image: 'blog2.png',
        title: 'How to securely store your HD wallet seeds?',
        content: 'Lorem iprum is a dummy text. Lorem iprum is a dummy text. Lorem iprum is a dummy text...',
        contentAdmin: 'Admin',
        contentDate: '30 Mar, 2020 | 2:30 pm'
    },
    {
        image: 'blog3.png',
        title: 'Exclusive interview with Xinxi Wang of Litecoin',
        content: 'Lorem iprum is a dummy text. Lorem iprum is a dummy text. Lorem iprum is a dummy text...',
        contentAdmin: 'Admin',
        contentDate: '30 Mar, 2020 | 2:30 pm'
    }
]

export default class Blogs extends Component {

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

      let {contentData} = this.state;

      return (
         <div className="blank-wrapper">
           <Helmet>
              <title>Bithashex</title>
              <meta name="description" content="Bithashex Page" />
           </Helmet>

           <div className="News">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <span className="NewsTitle">Blogs</span>
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

                <div className="row BlogsCardBody">

                    {contentData.map((eachContent, key) => (
                        <div className="col-sm-12 col-md-4 BlogsOneCard" key={key}>
                            <RctCard>
                                <div className="card-image">
                                    <img src={require(`Assets/pic/${eachContent.image}`)} alt="about card" className="img-fluid" width="100%" height="100%" />
                                </div>
                                <div className="card-content p-30">
                                    <h2 className="title BlogsCardTitle">{eachContent.title}</h2>
                                    <span className="d-block mb-20 BlogsCardContent">{eachContent.content}</span>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <span className="d-block mb-20 BlogsCardContentAdmin">{eachContent.contentAdmin}</span>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <span className="d-block mb-20 BlogsCardContentDate">{eachContent.contentDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </RctCard>
                        </div>
                    ))}

                </div>
            </div>            

        </div>
      );
   }
}