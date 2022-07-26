import { POST_BOOKING_DETAILS,POST_USER_DATA,POST_CART_DATA } from "./Booking.type";
import axios from "axios";

export const postDetails=(details)=>async(dispatch)=>
{
    try
    {
       const data= await axios(
            {
                method:"POST",
                url:"http://localhost:4000/api/booking",
                data:{details}
            }
        )

        return dispatch({type:POST_BOOKING_DETAILS,payload:data})
    }
    catch(error)
    {
        return dispatch({type:"ERROR",payload:error})
    }
}
export const postCartDetails=(details)=>async(dispatch)=>
{
    try
    {
        await axios(
            {
                method:"POST",
                url:"http://localhost:4000/api/booking/cart",
                data:{details}
            }
        )

        return dispatch({type:POST_CART_DATA,payload:details})
    }
    catch(error)
    {
        return dispatch({type:"ERROR",payload:error})
    }
}
export const postUserDetails=(details)=>async(dispatch)=>
{
    try
    {
        const data=await axios(
            {
                method:"POST",
                url:"http://localhost:4000/api/booking/guest",
                data:{details}
            }
        )

        return dispatch({type:POST_USER_DATA,payload:data})
    }
    catch(error)
    {
        return dispatch({type:"ERROR",payload:error.message})
    }
}