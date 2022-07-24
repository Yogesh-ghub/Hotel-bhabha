import { PUT_DATE } from "./date.type";

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