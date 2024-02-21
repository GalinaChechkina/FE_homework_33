import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Post{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {rate: number, count: number}
}
export const loadProducts = createAsyncThunk<Post[]>(
    "products/loadProducts",
    async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return data;
    }
  );

const initialState: Post[] =[];

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder.addCase(loadProducts.fulfilled, (state, {payload})=>{
            state=payload;
            console.log(payload);
        });
    }
});

export const selectProducts = (state: RootState) => state.products;

// Экспорт reducer и actions
export default productsSlice.reducer;