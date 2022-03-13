import { ADD_TO_WISH } from "./actionType";

export const addWish=(payload)=>
({
    type:ADD_TO_WISH,
    payload:payload
})

export const deleteWish=(id)=>
({
    type:DELETE_FROM_WISH,
    payload:id
})