import React from 'react'
import HeaderComponent from './HeaderComponent'
import {HEADER_TYPE} from "../../config/contanst";

export default {
    title: 'Header',
    component: HeaderComponent,
    // args: {
    //     children: 'Button'
    // }
}

export const HeaderOfAllCampaigns = () => <HeaderComponent type={HEADER_TYPE.ALL_CAMPAIGNS} />
export const HeaderOfACampaign = () => <HeaderComponent type={HEADER_TYPE.ONE_CAMPAIGN} />
export const HeaderOfCreateCampaign = () => <HeaderComponent type={HEADER_TYPE.CREATE_CAMPAIGN} />

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