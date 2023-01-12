import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmaoun: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
      }
    },
    removeFromCart(state, action) {
      const nextCart = state.cartItem.filter(
        (Item) => Item.id !== action.payload.id
      );

      state.cartItem = nextCart;
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (itemIndex) => itemIndex.id === action.payload.id
      );

      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCart = state.cartItem.filter(
          (Item) => Item.id !== action.payload.id
        );

        state.cartItem = nextCart;
      }
    },

    getTotals(state, action) {
     let {total,quantity} = state.cartItem.reduce(
        (cartTotal, cItem) => {
          const { price, cartQuantity } = cItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity
      state.cartTotalAmaoun =total
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart ,getTotals} = cartSlice.actions;

export default cartSlice.reducer;
