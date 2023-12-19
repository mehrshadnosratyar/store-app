import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/helper";

const CartContextData = createContext();

const initialState = {
    selectedItems:[],
    itemsCounter:0,
    total:0,
    checkout:false
}
function reducer(state,action){
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id===action.payload.id)){
                state.selectedItems.push({...action.payload,quantity:1})
            }
            return {
                ...state,
                ...sumProducts(state.selectedItems),
                checkout:false
            }
        case "REMOVE_ITEM":
           const newSelectedItems = state.selectedItems.filter((item) => action.payload.id!==item.id)
           return {...state,selectedItems:[...newSelectedItems] ,...sumProducts(newSelectedItems)}

        case "INCREASE":
            const increaseIndex = state.selectedItems.findIndex((item)=> item.id==action.payload.id)
            state.selectedItems[increaseIndex].quantity++
            return{...state,...sumProducts(state.selectedItems)}

            case "DECREASE":
                const decreaseIndex = state.selectedItems.findIndex((item)=> item.id==action.payload.id)
                state.selectedItems[decreaseIndex].quantity--
                return{...state,...sumProducts(state.selectedItems)}
            case "CHECKOUT":
                return{ selectedItems:[],itemsCounter:0,total:0,checkout:true}
        default:
            throw new Error("invalid action")

    }
}

function CartContext({children}) {
    const [state,dispatch] = useReducer(reducer,initialState)

    return (<CartContextData.Provider value={{state,dispatch}}>
        {children}
    </CartContextData.Provider>)
}


function useCart(){
    const {state,dispatch} = useContext(CartContextData)
    return [state,dispatch]
}
export default CartContext;
export {useCart}