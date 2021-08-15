import React from 'react'
import HeaderComponent from './HeaderComponent'
import {HEADER_TYPE} from "../../config/contanst";

export default {
    title: 'Components/Header',
    component: HeaderComponent,
    argTypes: {
        open: {
            control: 'boolean'
        },
        setOpen: {

        },
        type: {

        }
    }
}

export const HeaderOfAllCampaigns = () => <HeaderComponent type={HEADER_TYPE.ALL_CAMPAIGNS} />
export const HeaderOfACampaign = () => <HeaderComponent type={HEADER_TYPE.ONE_CAMPAIGN} />
export const HeaderOfCreateCampaign = () => <HeaderComponent type={HEADER_TYPE.CREATE_CAMPAIGN} />