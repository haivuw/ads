import React from 'react'
import Navigation from './Navigation'
import {HEADER_TYPE} from "../../config/contanst";

export default {
    title: 'Navigation',
    component: Navigation,
    // args: {
    //     children: 'Button'
    // }
}

export const NavigationOfAllCampaigns = () => <Navigation />

// const Template = args => <HeaderComponent {...args} />

// export const PrimaryA = Template.bind({})
// PrimaryA.args = {
//     variant: 'primary',
//     // children: 'Primary Args',
// }

// export const SecondaryA = Template.bind({})
// SecondaryA.args = {
//     variant: 'secondary',
//     // children: 'Secondary Args',
// }
//
// export const LongPrimaryA = Template.bind({})
// LongPrimaryA.args = {
//     ...PrimaryA.args,
//     // children: 'Long Primary Args',
// }