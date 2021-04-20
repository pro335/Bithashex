import React, { Component } from "react";

export default class Item extends Component {
    render() {

        let {data} = this.props;

        return (
            <div className="UserDashboardItem">
                <div className="row UserDashboardTitleRow">
                    <h2 className="UserDashboardItemTitle">{data.title}</h2>
                </div>
                <h3 className="UserDashboardItemContent">{data.content}</h3>
                <h4 className="UserDashboardItemSubContent">{data.subContent}</h4>
            </div>
        )
    }
}