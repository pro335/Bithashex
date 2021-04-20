/**
 * Contact Request Widget
 */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SweetAlert from 'react-bootstrap-sweetalert'

// intl messages
import IntlMessages from 'Util/IntlMessages';

class CreateCryptocurrencyItem extends Component {

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
      let { icon, title, content } = this.props;

      return (
         <div className="lazy-up">
               <div className="media">
                  <div className="media-left mr-15">
                     <img
                        src={require(`Assets/pic/${icon}`)}
                        className="img-fluid"
                        alt="user profile"
                     />
                  </div>
                  <div className="media-body mt-20">
                     <h4 className="mb-5 welcomeCreateCryptocurrencyItemTitle">{title}</h4>
                     <span className="text-muted fs-14 mb-15 d-block welcomeCreateCryptocurrencyItemContent">{content}</span>
                  </div>
               </div>
         </div>
      );
   }
}

export default CreateCryptocurrencyItem;
