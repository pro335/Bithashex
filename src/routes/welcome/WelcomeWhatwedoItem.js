/**
 * Pricing Component
 */
import React from 'react';
import { Button } from 'reactstrap';

// component
import WelcomeWhatwedoItemCard from './WelcomeWhatwedoItemCard';

// traffic sources
export const trafficSources = {
   totalActiveUsers: '359,234',
   chartData: {
       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
       data: [40, 30, 85, 50, 90, 45, 55, 45, 80, 72, 78, 63]
   }
}

const WelcomeWhatwedoItem = ({ icon, title, content }) => (
   <WelcomeWhatwedoItemCard colClasses="col-md-4">
      <div className="pricing-icon mb-40">
         <img src={require(`Assets/pic/${icon}`)} alt="pricing icon" width="" height="" />
      </div>
      <h2 className="amount-title-welcomeWhatwedo">{title}</h2>
      <h1 className="WelcomeWhatwedoItemContent">{content}</h1>

   </WelcomeWhatwedoItemCard>
);

export default WelcomeWhatwedoItem;
