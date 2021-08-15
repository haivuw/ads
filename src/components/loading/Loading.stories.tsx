import React, {useState, useEffect} from 'react'
import LoadingComponent from './LoadingComponent'
import {HEADER_TYPE} from "../../config/contanst";

export default {
    title: 'Loading',
    component: LoadingComponent,
    // args: {
    //     children: 'Button'
    // }
}

export const Loading = () => {
    const [loaded, setLoaded] = useState(true);
    useEffect(() => {
        // visible true -> false
        if (!loaded) {
            //setTimeout(() => setLoaded(true), 250); // 0.25초 뒤에 해제
            //debugger;
            setTimeout(() => setLoaded(true), 5000); // 10초 뒤에
        }

        //setLoaded(loaded);
    }, [loaded]);


    return <LoadingComponent loading={loaded} children={loaded}/>
}