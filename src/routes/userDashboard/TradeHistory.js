/**
 * TradeHistory Component
*/
import React, { Component, Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { RctCard, RctCardHeading, RctCardContent } from './RctCard';

export default class TradeHistory extends Component {

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
         <RctCard>
            <RctCardHeading
               title="TRADE HISTORY"
            />
            <RctCardContent>
               <Fragment>
                  <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={424} autoHide>
                     <Table className="TradeHistoryTable">
                        {/* <TableHead>
                           <TableRow>
                              {columns.map((th, index) => (
                                 <TableCell key={index}>{th}</TableCell>
                              ))}
                           </TableRow>
                        </TableHead> */}
                        <TableBody>
                           {data.map((list, index) => {
                              return (
                                 <TableRow key={index}>
                                    <TableCell style={{color: list.color}}>{list.firstCell}</TableCell>
                                    <TableCell>{list.secondCell}</TableCell>
                                    <TableCell>{list.thirdCell}</TableCell>
                                 </TableRow>
                              )
                           })}
                        </TableBody>
                     </Table>
                  </Scrollbars>
               </Fragment>
            </RctCardContent>
         </RctCard>
      );
   }
}
