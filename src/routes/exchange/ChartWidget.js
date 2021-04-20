import React, { Component } from 'react';

import ChartLine from './ChartLine';

export default class ChartWidget extends Component {
    render() {
        const { labels, datasets } = this.props

        return (
            <ChartLine
                labels={labels}
                datasets={datasets}
            />
        )
    }
}