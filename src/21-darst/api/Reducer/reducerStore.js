import { actionType } from "./actionType/actionType"
export const initialState = {
    data:[
        {
            id:1,
            nama:"tplin"
        }
    ]
}
export const reducer = ( state = initialState,{type,payload})=>{
    switch (type) {
        case actionType.add:
            return{
                ...state,
                data:[...state.data,payload]
            }            
    
        default:
           return state
    }
}