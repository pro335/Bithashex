/**
 * Rct Card Content
 */
import React from 'react';

const RctCardContent = ({ children, customClasses, noPadding }) => (
    <div className={`${noPadding ? 'rct-full-block' : 'rct-block-contentUserDashboardRecentActivities'} ${customClasses ? customClasses : ''}`}>
        {children}
    </div>
);

export { RctCardContent };
