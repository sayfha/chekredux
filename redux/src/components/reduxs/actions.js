import { DELETE } from "./actiontypes"

export const del=(id)=>{
    return{
        type:DELETE,
        payload:id
    }
}