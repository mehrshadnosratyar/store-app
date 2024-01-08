import {configureStore} from "@reduxjs/toolkit"
import productReducer from "../features/products/productsSlice"

const store = configureStore({
    reducer:{
    product:productReducer
    },
})
export default store