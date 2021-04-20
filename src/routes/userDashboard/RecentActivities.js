/**
 * RecentActivities Component
*/
import React, { Component, Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Badge } from 'reactstrap';

import { RctCard, RctCardHeading, RctCardContent } from './RecentActivitiesRctCard';

export default class RecentActivities extends Component {

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
               title="RECENT ACTIVITIES"
            />
            <RctCardContent>
               <Fragment>
                  <Scrollbars className="rct-scroll" autoHeight autoHeightMin={600} autoHeightMax={600} autoHide>
                     <Table className="UserDashboardTradeHistoryTable">
                        <TableBody>
                           {data.map((list, index) => {
                              return (
                                 <TableRow key={index}>
                                    <TableCell><span className="UserDashboardTradeHistoryTableStatus">{list.status}</span></TableCell>
                                    <TableCell>
                                       <img src={require(`Assets/pic/${list.icon}`)} alt="user profile" className="media-object rounded-circle" width="" height="" />&nbsp;&nbsp;
                                       <span className="UserDashboardTradeHistoryTableType">{list.type}</span>
                                    </TableCell>
                                    <TableCell>{list.bank}</TableCell>
                                    <TableCell style={{color: list.color}}>{list.bitcoinAmount}</TableCell>
                                    <TableCell>{list.dollarAmount}</TableCell>
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
