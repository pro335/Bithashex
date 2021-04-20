/**
 * Pricing Component
 */
import React from 'react';
import { Button } from 'reactstrap';

// component
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import TrafficSourcesWidget from './TrafficSources';

// traffic sources
export const trafficSources = {
   totalActiveUsers: '359,234',
   chartData: {
       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
       data: [40, 30, 85, 50, 90, 45, 55, 45, 80, 72, 78, 63]
   }
}

const PricingBlockV1 = ({ icon, type, money, percentRate, lineColor }) => (
   <RctCollapsibleCard colClasses="col-md-3">
      <div className="pricing-icon mb-40">
         <img src={require(`Assets/pic/${icon}`)} alt="pricing icon" width="" height="" />
         <span className="text-muted welcomeSeveralMoney_FisrtBCH">{type}</span>

         <a className="welcomeSeveralMoneyBuyBtn">BUY</a>
      </div>
      <h2 className="amount-title">{money}</h2>
      <h1 className="welcomeSeveralMoneyPercent">{percentRate}</h1>

      <TrafficSourcesWidget data={trafficSources} color={lineColor} />

   </RctCollapsibleCard>
);

export default PricingBlockV1;
