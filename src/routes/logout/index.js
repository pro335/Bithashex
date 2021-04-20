import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    logoutAction
} from 'Actions';

class Logout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.props.logoutAction();
        return (
            <>
            </>
        )
    }
}

export default connect(null, {
    logoutAction
})(Logout);