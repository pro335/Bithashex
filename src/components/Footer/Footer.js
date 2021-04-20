/**
 * Footer
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// app config
import AppConfig from 'Constants/AppConfig';

const Footer = () => (
	<div className="rct-footer justify-content-between align-items-center">

		<div className="row FooterRow">
			<div className="col-md-12 col-lg-4 col-xl-4">
				<Link to="/">
					<img src={require('Assets/pic/bithash-logo.png')} alt="about gallery" className="img-fluid" width="220" height="150" />
				</Link>
				<span className="FooterRowFirstText">The Financial Hub of Digital Assets</span>
			</div>
			<div className="col-md-12 col-lg-4 col-xl-4">
				<div className="row">
					<div className="col-md-12 col-lg-6 col-xl-6">
						<ul className="FooterUlCompany">
							<li>
								<span className="FooterRowCompany">Company</span>
							</li>
							<li>
								<Link to="/app/aboutUs">
									<span className="FooterRowAbout">About</span>
								</Link>
							</li>
							<li>
								<Link to="/app/faq">
									<span className="FooterRowAbout">FAQ</span>
								</Link>
							</li>
							<li>
								<Link to="/app/blogs">
									<span className="FooterRowAbout">Blog</span>
								</Link>
							</li>
							<li>
								<Link to="/app/affiliate">
									<span className="FooterRowAbout">Affiliates</span>
								</Link>
							</li>
						</ul>
					</div>

					<div className="col-md-12 col-lg-6 col-xl-6">
						<ul className="FooterUlCompany">
							<li>
								<span className="FooterRowCompany">Support</span>
							</li>
							<li>
								<span className="FooterRowAbout">Help Desk</span>
							</li>
							<li>
								<Link to="/app/compliance">
									<span className="FooterRowAbout">Compliance</span>
								</Link>
							</li>
							<li>
								<Link to="/app/resources">
									<span className="FooterRowAbout">Resources</span>
								</Link>
							</li>
							<li>
								<Link to="/app/contactUs">
									<span className="FooterRowAbout">Contact Us</span>
								</Link>
							</li>
						</ul>
					</div>

				</div>
			</div>

			<div className="col-md-12 col-lg-4 col-xl-4">
				<div className="row">
					<div className="col-md-12 col-lg-6 col-xl-6">
						<ul className="FooterUlCompany">
							<li>
								<span className="FooterRowCompany">Exchange Pair</span>
							</li>
							<li>
								<span className="FooterRowAbout">ETH to BTC</span>
							</li>
							<li>
								<span className="FooterRowAbout">BTC to ETH</span>
							</li>
							<li>
								<span className="FooterRowAbout">LTC to ETH</span>
							</li>
							<li>
								<span className="FooterRowAbout">USDT to BTC</span>
							</li>
						</ul>
					</div>

					<div className="col-md-12 col-lg-6 col-xl-6">
						<ul className="FooterUlCompany">
							<li>
								<span className="FooterRowCompanyFourth">Exchange Pair</span>
							</li>
							<li>
								<span className="FooterRowAbout">BTC to USDT</span>
							</li>
							<li>
								<span className="FooterRowAbout">LTC to BTC</span>
							</li>
							<li>
								<span className="FooterRowAbout">XMR to BTC</span>
							</li>
							<li>
								<span className="FooterRowAbout">ETC to DASH</span>
							</li>
						</ul>
					</div>

				</div>
			</div>
		</div>
		
		<div className="row FooterSecondRow">
			<h5 className="FooterRowCopyRight">{AppConfig.copyRightText}</h5>

			<div className="session-social-icon FooterSocial">
				<IconButton className="text-black" aria-label="youtube">
					<i className="zmdi zmdi-youtube-play"></i>
				</IconButton>
				<IconButton className="text-black" aria-label="facebook">
					<i className="zmdi zmdi-facebook"></i>
				</IconButton>
				<IconButton className="text-black" aria-label="twitter">
					<i className="zmdi zmdi-twitter"></i>
				</IconButton>
				<IconButton className="text-black" aria-label="instagram">
					<i className="zmdi zmdi-instagram"></i>
				</IconButton>
			</div>
		</div>
	</div>
);

export default Footer;
