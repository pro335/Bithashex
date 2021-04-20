/**
 * Contact Request Widget
 */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SweetAlert from 'react-bootstrap-sweetalert'

// intl messages
import IntlMessages from 'Util/IntlMessages';

class FaqItem extends Component {

   constructor(props) {
      super(props);
   }

   state = {
      successAlert: false
   }

   onAccept() {
      this.setState({ successAlert: true });
   }

   onReject() {
      this.setState({ successAlert: false });
   }

   onConfirm() {
      this.setState({ successAlert: false });
   }

   render() {
      let { no, title, content } = this.props;

      return (
         <div className="lazy-up" className="FaqItem">
               <div className="media">
                  <div className="media-left mr-15">
                     <span className="FaqItemNo">{no}</span>
                  </div>
                  <div className="media-body">
                     <h4 className="mb-5 FaqItemTitle">{title}</h4>
                     <span className="text-muted fs-14 mb-15 d-block FaqItemContent">{content}</span>
                  </div>
               </div>
         </div>
      );
   }
}

export default FaqItem;
