import React from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import PropTypes from 'prop-types';

const menuWithoutLogin = [
   {
      link: "/app/exchange",
      icon: <SwapHorizIcon />,
      label: "EXCHANGE"
   },
   {
      link: "/app/news",
      icon: <FiberNewIcon />,
      label: "NEWS"
   },
   {
      link: "/",
      icon: <AttachMoneyIcon />,
      label: "WALLET"
   },
   {
      link: "/app/login",
      label: "LOGIN"
   },
   {
      link: "/app/signup",
      label: "SIGN UP"
   },
];

const menuWithLogin = [
   {
      link: "/app/userDashboard",
      icon: <DashboardIcon />,
      label: "DASHBOARD"
   },
   {
      link: "/app/userExchange",
      icon: <SwapHorizIcon />,
      label: "EXCHANGE"
   },
   {
      link: "/app/userProfile",
      icon: <PersonIcon />,
      label: "PROFILE"
   },
   {
      link: "/app/userLogout",
      icon: <PowerSettingsNewIcon />,
      label: "LOG OUT"
   },
]

function ListItemLink(props) {
   const { label, link, icon } = props;

   const handleMenuClick = (event, newLink) => {
      window.location = newLink;
   }
 
   return (
      <ListItem button onClick={(event) => handleMenuClick(event, link)}>
         {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
         <ListItemText primary={label} />
      </ListItem>
   );
 }
 
 ListItemLink.propTypes = {
   icon: PropTypes.element,
   label: PropTypes.string.isRequired,
   link: PropTypes.string.isRequired,
 };


const ChatSidebar = ({authUser}) => (
   <div className="chat-sidebar rct-customizer">
      {authUser.isLogin && (
         <AppBar position="static" color="primary">
            <Toolbar>
               <img
                  src={require('Assets/avatars/user-15.jpg')}
                  alt="user profile"
                  className="img-fluid rounded-circle"
                  width="50"
                  height="100"
               />
               <div className="user-info">
                  <span className="user-name ml-4">Lucile Beck</span>
                  <i className="zmdi zmdi-chevron-down dropdown-icon mx-4"></i>
               </div>
            </Toolbar>
         </AppBar>
      )}
      {!authUser.isLogin && menuWithoutLogin.map((menu, key) => (
         <ListItem key={key} button className="chat-list-item">
            <ListItemLink
               icon={menu.icon}
               label={menu.label}
               link={menu.link}
            />
         </ListItem>
      ))}

      {authUser.isLogin && menuWithLogin.map((menu, key) => (
         <ListItem key={key} button className="chat-list-item">
            <ListItemLink
               icon={menu.icon}
               label={menu.label}
               link={menu.link}
            />
         </ListItem>
      ))}

   </div>
);

// map state to props
const mapStateToProps = ({ authUser }) => {
	return { authUser };
};

export default connect(mapStateToProps, null)(ChatSidebar);
