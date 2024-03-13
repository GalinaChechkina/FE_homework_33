import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: {rate: number, count: number}
}
export const loadProducts = createAsyncThunk<Product[]>(
    "products/loadProducts",
    async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    }
  );

const initialState: Product[] =[];

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder.addCase(loadProducts.fulfilled, (state, {payload})=>{
            state.push(...payload);
            console.log(state);
        });
    }
});

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;