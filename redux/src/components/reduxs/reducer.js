import { DELETE } from "./actiontypes";

const init=[
    {
        id:Math.random(),
        action:"learn css",
        isDone:true
    },
    {
        id:Math.random(),
        action:"learn redux",
        isDone:false
    }
]
const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case DELETE:
            return state.filter(el=>el.id!==payload)
            
    
        default:
            return state;
    }
}
export default reducer