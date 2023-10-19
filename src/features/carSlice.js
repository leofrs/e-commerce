import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantidade: 0,
    totalQuantidade: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id
        );
        if (exist) {
          exist.quantidade ++;
          exist.totalPrice += productId.price;
          state.totalQuantidade ++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            quantidade: 1,
            image: productId.image,
            totalPrice: productId.price,
            title: productId.title,
            description: productId.description,
            
          });
          state.totalAmount ++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id
        );
        if (exist.quantidade === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id
          );
          state.totalAmount--;
          state.totalPrice -= productId.price;
        } else {
          exist.amount --;
          exist.totalPrice -= productId.price;
          state.totalQuantidade --;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
