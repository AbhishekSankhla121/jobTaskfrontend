import { server } from "../store"

import axios from "axios"




export const getDetails = (condition = "new") => async dispatch => {
    try {
        dispatch({ type: 'getDetailsRequest' });


        console.log(server)
        const { data } = await axios.get(

            `${server}/inventory?condition=${condition}`
        );

        dispatch({
            type: 'getDetailsSuccess', payload: data
        });
    } catch (error) {
        dispatch({
            type: 'getDetailsFail',
            payload: error.response.data,
        });
    }
};

