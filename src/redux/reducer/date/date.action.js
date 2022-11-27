import { PUT_DATE,PUT_USER,GET_USERDATA, } from "./date.type";

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
        localStorage.setItem("userDetails", JSON.stringify({ user: userData.user }));
        return dispatch({type:PUT_USER,payload:userData.user})
    }
    catch(error)
    {
        return dispatch({type:"ERROR",payload:error})
    }
}

export const getUser = () => async (dispatch) => {
    try {

        let userData = { data: [] };

        if (localStorage.userDetails) {
            const { data } = JSON.parse(localStorage.getItem("userDetails"));
            userData.data = data;
        }

        return dispatch({ type: GET_USERDATA, payload: userData.data }); 
    }
    catch (error) {
        return dispatch({ type: "Error", payload: error });
    }
}