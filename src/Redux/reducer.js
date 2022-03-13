import { ADD_TO_WISH, DELETE_FROM_WISH } from "./actionType"

const initState={
    wish:[]
}

export const reducer=(state=initState,action)=>
{
    const {type,payload}=action

    switch(type){
        case ADD_TO_WISH:{
            return{
                ...state,
                wish:[...state.wish,payload]
            }
        }
        case DELETE_FROM_WISH:{
            return{ 
                ...state,
                wish:state.wish.filter(e=>e._id!==payload)
            }
        }
        default:
            return state
    }
}