/**
 * App Header
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import screenfull from 'screenfull';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter } from 'react-router-dom';

import { Collapse } from 'reactstrap';

// actions
import { collapsedSidebarAction } from 'Actions';

// helpers
import { getAppLayout } from "Helpers/helpers";

// components
import Notifications from './Notifications';
import ChatSidebar from './ChatSidebar';
import DashboardOverlay from '../DashboardOverlay/DashboardOverlay';
import LanguageProvider from './LanguageProvider';
import SearchForm from './SearchForm';
import QuickLinks from './QuickLinks';
import MobileSearchForm from './MobileSearchForm';
import Cart from './Cart';

import UserBlock from './UserBlock';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class Header extends Component {

	state = {
		customizer: false,
		isMobileSearchFormVisible: false
	}

	// function to change the state of collapsed sidebar
	onToggleNavCollapsed = (event) => {
		const val = !this.props.navCollapsed;
		this.props.collapsedSidebarAction(val);
	}

	// open dashboard overlay
	openDashboardOverlay(e) {
		var el = document.getElementsByClassName('dashboard-overlay')[0];
		el.classList.toggle("d-none");
		el.classList.toggle("show");
		if (el.classList.contains('show')) {
			document.body.style.overflow = "hidden";
		}
		else {
			document.body.style.overflow = "";
		}
		e.preventDefault();
	}

	// close dashboard overlay
	closeDashboardOverlay() {
		var e = document.getElementsByClassName('dashboard-overlay')[0];
		e.classList.remove('show');
		e.classList.add('d-none');
		document.body.style.overflow = "";
	}

	// toggle screen full
	toggleScreenFull() {
		screenfull.toggle();
	}

	// mobile search form
	openMobileSearchForm() {
		this.setState({ isMobileSearchFormVisible: true });
	}

	render() {
		
		const { isMobileSearchFormVisible } = this.state;
		const { horizontalMenu, agencyMenu, location } = this.props;
		return (
			<AppBar position="static" className="rct-header">
				<Toolbar className="d-flex justify-content-between w-100 pl-0">
					<div className="d-inline-flex align-items-center" >
						<div className="rct-headerLogo">
							<Link to="/">
								<img src={require('Assets/pic/bithash-logo.png')} className="img-fluid" alt="site-logo" width="148" height="70" />
							</Link>
						</div>
						{/* <ul className="list-inline mb-0 navbar-left">
							<li className="list-inline-item" onClick={(e) => this.onToggleNavCollapsed(e)}>
								<Tooltip title="Sidebar Toggle" placement="bottom">
									<IconButton color="inherit" mini="true" aria-label="Menu" className="humburger p-0">
										<MenuIcon />
									</IconButton>
								</Tooltip>
							</li>
						</ul> */}
					</div>

					<IconButton color="inherit" mini="true" aria-label="Menu" className="humburger p-0" onClick={() => this.setState({ customizer: true })}>
						<MenuIcon />
					</IconButton>

					<ul className="navbar-right list-inline mb-0">
						{!this.props.authUser.isLogin && (
						<>
							<li className="list-inline-item">
								<Tooltip title="Exchange" placement="bottom">
									<Link className="headerMenuExchange" to="/app/exchange">
										EXCHANGE
									</Link>
								</Tooltip>
							</li>

							<li className="list-inline-item">
								<Tooltip title="News" placement="bottom">
									<Link className="headerMenuNews" to="/app/news">
										NEWS
									</Link>
								</Tooltip>
							</li>

							<li className="list-inline-item">
								<Tooltip title="Wallet" placement="bottom">
									<Link className="headerMenuWallet" to="">
										WALLET
									</Link>
								</Tooltip>
							</li>
						</> )}
						
						<LanguageProvider />

						{!this.props.authUser.isLogin && (
						<>
							<li className="list-inline-item">
								<Link className="signupBtn" to="/app/signup">
									SIGN UP
								</Link>
							</li>

							<li className="list-inline-item">
								<Link className="loginBtn" to="/app/login">
									LOGIN
								</Link>
							</li>
						</> 
						)}

						{this.props.authUser.isLogin && (
						<>
							<li className="list-inline-item">
								<UserBlock className="headerMenuUser" />
							</li>
						</> 
						)}

					</ul>
					
					<Drawer
						anchor={'right'}
						open={this.state.customizer}
						onClose={() => this.setState({ customizer: false })}
					>
						<ChatSidebar />
					</Drawer>
				</Toolbar>
				<DashboardOverlay
					onClose={() => this.closeDashboardOverlay()}
				/>
			</AppBar>
		);
	}
}

// map state to props
const mapStateToProps = ({ settings, authUser }) => {
	return { settings, authUser };
};

export default withRouter(connect(mapStateToProps, {
	collapsedSidebarAction
})(Header));
