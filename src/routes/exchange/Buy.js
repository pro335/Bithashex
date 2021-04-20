import React, { Component } from 'react';

import { FormGroup, Input } from 'reactstrap';

import FormControl from '@material-ui/core/FormControl';

export default class Buy extends Component {

    constructor(props) {

        super(props);
            this.state = {
                buyCurrencyVal: "125.00 USD",
                buyAmountVal: "0.0412 BTC"
            }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

     render() {
        return(
            <div className="BuyForm">
                <div className="row BuyFormFirstRow">
                    <span className="fw-bold BuyHeading">BUY</span>
                </div>
                <div className="row">
                    <span className="BuyCurrencyLabel">Currency</span>
                </div>
                <div className="row BuySendDiv">
                    <div className="col-xl-7 BuySendSelectbox">
                        <div className="BuyAppSendSelectbox">
                            <FormGroup className="BuySendFormGroup">
                                <Input type="select" name="select" className="BuySendSelectInput">
                                <option>Bitcoin</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>

                    <div className="col-xl-5 BuySendLabel">
                        <FormControl aria-describedby="weight-helper-text" fullwidth="true">
                            <Input
                                className="BuySendInput"
                                name="buyCurrencyVal"
                                value={this.state.buyCurrencyVal}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                    </div>
                </div>

                <div className="row PaymentMethod">
                    <span className="BuyCurrencyLabel">Payment Method</span>
                </div>
                <div className="row BuySendDiv">
                    <div className="col-xl-12 BuySendSelectBox">
                        <div className="BuyAppSendSelectbox">
                            <FormGroup className="BuySendFormGroup">
                                <Input type="select" name="select" className="BuySendSelectInput">
                                    <option>Bitcoin</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <span className="BuyCurrencyLabel">Enter your amount</span>
                </div>
                <div className="row BuySendDiv">
                    <div className="col-xl-12 BuySendSelectBox">
                        <FormControl aria-describedby="weight-helper-text" fullwidth="true">
                            <Input
                                className="BuySendInput"
                                name="buyAmountVal"
                                value={this.state.buyAmountVal}
                                onChange={this.handleChange}
                            />
                        </FormControl>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-7">
                        <span className="monthlyLimitLabel ExchangeBuyMonthlyLimitLabel">Monthly Limit</span>
                    </div>

                    <div className="col-xl-5 BuySendLabel">
                        <span className="remainingLabel">$49750 remaining</span>
                    </div>
                </div>

                <div className="row">
                    <a className="buyNowBtn" fullwidth="true">
                        Buy now
                    </a>
                </div>

            </div>
        )
    }
}