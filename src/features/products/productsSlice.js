import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../../Services/config';

const initialState ={
    loading : false,
    products:[],
    error:""
}
const fetchProducts = createAsyncThunk("product/fetchProducts",() => {
    return api.get("/products")
})
const productSlice = createSlice({
    name:"product",
    initialState,
    extraReducers: builder =>{
        builder.addCase(fetchProducts.pending , (state) => {
            state.loading = true,state.loading=false,
            state.products=[],
            state.error="";
        })
        builder.addCase(fetchProducts.fulfilled,(state,action) =>{
            state.loading=false,
            state.products=action.payload,
            state.error="";
        })
        builder.addCase(fetchProducts.rejected,(state,action) =>{
            state.loading=false,
            state.products=[],
            state.error=action.error.message
        })
    }
})
export default productSlice.reducer;
export {fetchProducts}