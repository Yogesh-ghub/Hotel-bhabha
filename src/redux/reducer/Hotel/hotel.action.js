import { GET_HOTEL, GET_SPECIFIC_ROOM } from "./hotel.type";
import axios from "axios"

export const getHotel=()=>async(dispatch)=>
{
    try
    {
        const hotelList=await axios({
            method:"GET",
            url:"http://localhost:4000/api/room/" ,
        })

        return dispatch({type:GET_HOTEL,payload:hotelList.data});
    }
    catch(error)
    {
        return dispatch({type:"error",payload:error})
    }
}

export const getSpecificROOM=(_id)=>async(dispatch)=>
{
    try
    {
        const room=await axios(
            {
                method:"GET",
                url:`http://localhost:4000/api/room/${_id}`
            }
        )

        return dispatch({type:GET_SPECIFIC_ROOM,payload:room.data})
    }
    catch(error)
    {
        return dispatch({type:"error",payload:error})
    }
}