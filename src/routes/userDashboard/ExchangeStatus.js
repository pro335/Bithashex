/**
 * ExchangeStatus Component
*/
import React, { Component, Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { FormGroup, Input } from 'reactstrap';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '@material-ui/icons/Search';

const columns = ['Pair', 'Price', 'Change'];

export default class ExchangeStatus extends Component {

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
      const { data } = this.props;
      return (
         <Fragment>
            <div className="ExchangeStatusTopRow">
               <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-2">
                     <div className="ExchangeShowingBTC">
                        <FormGroup className="ExchangeShowingBTCFormGroup">
                           <Input type="select" name="select" className="ExchangeShowingBTCSelect">
                              <option>BTC</option>
                           </Input>
                        </FormGroup>
                     </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-2">
                     <div className="ExchangeShowingBTC">
                        <FormGroup className="ExchangeShowingBTCFormGroup">
                           <Input type="select" name="select" className="ExchangeShowingBTCSelect">
                              <option>ETH</option>
                           </Input>
                        </FormGroup>
                     </div>
                  </div>

                  <div className="col-sm-12 col-md-4 col-lg-4 col-xl-2">
                     <div className="ExchangeShowingBTC">
                        <FormGroup className="ExchangeShowingBTCFormGroup">
                           <Input type="select" name="select" className="ExchangeShowingBTCSelect">
                              <option>USD</option>
                           </Input>
                        </FormGroup>
                     </div>
                  </div>

                  <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                     <TextField
                        id="search"
                        name="search"
                        value={this.state.search}
                        onChange={this.onChange}
                        placeholder="Search"
                        variant="outlined"
                        size="medium"
                        className="float-right ExchangeStatusSearch"
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
            </div>
            <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={424} autoHide>
               <Table className="ExchangeStatusTable">
                  <TableHead>
                     <TableRow>
                        {columns.map((th, index) => (
                           <TableCell key={index}>{th}</TableCell>
                        ))}
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {data.map((list, index) => {
                        return (
                           <TableRow key={index}>
                              <TableCell>{list.pair}</TableCell>
                              <TableCell>{list.price}</TableCell>
                              <TableCell style={{color: list.color}}>{list.change}</TableCell>
                           </TableRow>
                        )
                     })}
                  </TableBody>
               </Table>
            </Scrollbars>
         </Fragment>
      );
   }
}
