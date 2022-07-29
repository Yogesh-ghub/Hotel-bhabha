import { PUT_DATE,PUT_USER } from "./date.type";

export const  putDate=(data)=>async(dispatch)=>
{
    try
    {
        let dateData={
            date:{}
        }
        dateData.date=data;
        localStorage.setItem("dateDetails", JSON.stringify({ date: dateData.date }));
        return dispatch({type:PUT_DATE,payload:dateData.date})
    }
    catch(error)
    {
        return dispatch({type:"ERROR",payload:error})
    }
}
export const  putUser=(user)=>async(dispatch)=>
{
    try
    {
        let userData={
            user:{}
        }
        userData.user=user;
        localStorage.setItem("userDetails", JSON.stringify({ date: userData.user }));
        return dispatch({type:PUT_USER,payload:userData.user})
    }
    catch(error)
    {
        return dispatch({type:"ERROR",payload:error})
    }
}