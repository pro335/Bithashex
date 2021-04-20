import React, { Component } from 'react';

import { FormGroup, Input } from 'reactstrap';

import FormControl from '@material-ui/core/FormControl';

export default class Sell extends Component {

    constructor(props) {

        super(props);
            this.state = {
                sellCurrencyVal: "125.00 USD",
                sellAmountVal: "0.0412 BTC"
            }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     render() {
        return(
            <div className="SellForm">
                <div className="row SellFormFirstRow">
                    <span className="fw-bold SellHeading">Sell</span>
                </div>
                <div className="row">
                    <span className="SellCurrencyLabel">Currency</span>
                </div>
                <div className="row SellSendDiv">
                    <div className="col-xl-7 SellSendSelectbox">
                        <div className="SellAppSendSelectbox">
                            <FormGroup className="SellSendFormGroup">
                                <Input type="select" name="select" className="SellSendSelectInput">
                                <option>Bitcoin</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>

                    <div className="col-xl-5 SellSendLabel">
                        <FormControl aria-describedby="weight-helper-text" fullwidth="true">
                            <Input
                                className="SellSendInput"
                                name="sellCurrencyVal"
                                value={this.state.sellCurrencyVal}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                    </div>
                </div>

                <div className="row">
                    <span className="SellCurrencyLabel UserExchangeSellPaymentMethod">Payment Method</span>
                </div>
                <div className="row SellSendDiv">
                    <div className="col-xl-12 SellSendSelectBox">
                        <div className="SellAppSendSelectbox">
                            <FormGroup className="SellSendFormGroup">
                                <Input type="select" name="select" className="SellSendSelectInput">
                                    <option>Bitcoin</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <span className="SellCurrencyLabel">Enter your amount</span>
                </div>
                <div className="row SellSendDiv">
                    <div className="col-xl-12 SellSendSelectBox">
                        <FormControl aria-describedby="weight-helper-text" fullwidth="true">
                            <Input
                                className="SellSendInput"
                                name="sellAmountVal"
                                value={this.state.sellAmountVal}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-7">
                        <span className="monthlyLimitLabel">Monthly Limit</span>
                    </div>

                    <div className="col-xl-5 SellSendLabel">
                        <span className="remainingLabel">$49750 remaining</span>
                    </div>
                </div>

                <div className="row">
                    <a className="sellNowBtn" fullwidth="true">
                        Sell now
                    </a>
                </div>

            </div>
        )
    }
}