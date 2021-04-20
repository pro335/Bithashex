/**
 * Rct Card Title
 */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const RctCardHeading = ({ title, customClasses }) => (
    <div className="rct-block-title-TradeHistoryRctCardHeadingDiv">
        <h1 className="TradeHistoryRctCardHeading">{title}</h1>
    </div>
);

// type checking props
RctCardHeading.propTypes = {
    title: PropTypes.any
}

export { RctCardHeading };