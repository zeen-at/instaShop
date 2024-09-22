import { INewProduct } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface IProducts {
    products: INewProduct[]
}

  const initialState: IProducts = {
    products: [],
  };

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    createProduct: (state, action: PayloadAction<INewProduct>) => {
      const newProduct: INewProduct = {
        id: uuidv4(),
        productTitle: action.payload.productTitle,
        productCollection: action.payload.productCollection,
        productDescription: action.payload.productDescription,
        productImages: action.payload.productImages,
        inventory: action.payload.inventory,

      };
      state.products.push(newProduct);
    },
    
    editTodo: (state, action: PayloadAction<INewProduct>) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    
  },
});

export const { createProduct, editTodo } = productSlice.actions;
export default productSlice.reducer;
