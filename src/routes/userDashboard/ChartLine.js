/**
 * Product Stats Chart
 */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

// chart config
import ChartConfig from 'Constants/chart-config';

// options
const options = {
    elements: {
        point: {
            radius: 0
        }
    },
    legend: {
        display: false,
        labels: {
            fontColor: ChartConfig.legendFontColor
        }
    },
    scales: {
        xAxes: [{
            gridLines: {
                offsetGridLines: true,
                zeroLineColor: "red"
            },
            ticks: {
                fontColor: ChartConfig.axesColor
            }
        }],
        yAxes: [{
            gridLines: {
                display: true,
                position: 'right',
                drawBorder: false,
                zeroLineColor: "#757376"
            },
            ticks: {
                fontColor: ChartConfig.axesColor,
                stepSize: 2000,
                beginAtZero: true,
                padding: 40
            }
        }]
    }
};

class ChartLine extends Component {
    render() {
        const { labels, datasets } = this.props;
        const data = (canvas) => {
            const ctx = canvas.getContext("2d");
            const _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = 'rgba(0,0,0,0.5)';
                ctx.shadowBlur = 13;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 12;
                _stroke.apply(this, arguments);
                ctx.restore();
            };
            return {
                labels,
                datasets
            }
        }
        return (
            <Line data={data} options={options} height={250} />
        );
    }
}

export default ChartLine;
