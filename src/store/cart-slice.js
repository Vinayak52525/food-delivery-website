import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  subTotal: 0,
  cartOpened: false,
};

const cartSlice = createSlice({
  name: "Cart Slice",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const { mealId, name, image, price } = action.payload;
      state.subTotal += action.payload.price;
      const cartMealItem = state.cartList.find(
        (item) => item.mealId === action.payload.mealId
      );

      if (!cartMealItem) {
        state.cartList.push({
          name,
          image,
          mealId,
          price,
          quantity: 1,
        });
        return;
      }

      const cartMealItemIndex = state.cartList.indexOf(cartMealItem);
      state.cartList[cartMealItemIndex].quantity += 1;
    },
    removeCartItem: (state, action) => {
      const { mealId } = action.payload;
      const itemToRemove = state.cartList.find(
        (cartItem) => cartItem.mealId === mealId
      );
      const itemIndex = state.cartList.indexOf(itemToRemove);
      console.log(itemToRemove.price);

      state.subTotal = state.subTotal - itemToRemove.price;

      if (itemToRemove.quantity > 1) {
        state.cartList[itemIndex].quantity -= 1;
      } else {
        const newList = state.cartList.filter(
          (cartItem) => cartItem.mealId !== mealId
        );
        state.cartList = newList;
      }
    },
    toggleCartView: (state) => {
      state.cartOpened = !state.cartOpened;
    },
  },
});

export const { addCartItem, removeCartItem, toggleCartView } =
  cartSlice.actions;

export default cartSlice.reducer;
