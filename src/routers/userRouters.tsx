import React from 'react';
//-------------------------------------

const CampaignsList = React.lazy(() =>
    import('../screens/Campaigns/Lists'),
);
const NotFound = React.lazy(() =>
    import('../screens/NotFound'),
);


export const userRoutes = [
    {
        path: '',
        component: CampaignsList,
    },
    {
        path: '/campaigns',
        component: CampaignsList,
        protected: true,
    },
    {
        path: '/not-found',
        component: NotFound,
    },
];
