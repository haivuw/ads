import React from 'react'
import HeaderAllComponent from './HeaderAllComponent'
import {HEADER_TYPE} from "../../config/contanst";

export default {
    title: 'Header',
    component: HeaderAllComponent,
    // args: {
    //     children: 'Button'
    // }
}

export const HeaderOfAllCampaigns = () => <HeaderAllComponent type={HEADER_TYPE.ALL_CAMPAIGNS}/>
export const HeaderOfACampaign = () => <HeaderAllComponent type={HEADER_TYPE.ONE_CAMPAIGN}/>
export const HeaderOfCreateCampaign = () => <HeaderAllComponent  type={HEADER_TYPE.CREATE_CAMPAIGN}/>

// const Template = args => <HeaderAllComponent {...args} />

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