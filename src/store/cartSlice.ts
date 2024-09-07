import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  _id: string;
  name: string;
  description: string;
  ref: string;
  price: number;
  imageUrl?: string;
  stock: number;
  discount?: number;
  color?: string;
  material?: string;
  status?: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Load cart state from localStorage or use initialState if not available
const loadCartState = (): CartState => {
  const savedState = localStorage.getItem("cart");
  if (savedState) {
    return JSON.parse(savedState);
  }
  return { items: [] };
};

const initialState: CartState = loadCartState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartState(state);
    },

    removeItem: (state, action: PayloadAction<{ _id: string }>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item._id !== action.payload._id
          );
        }
      }
      saveCartState(state);
    },

    updateItemQuantity(
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) {
      const { _id, quantity } = action.payload;
      const item = state.items.find((i) => i._id === _id);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i._id !== _id);
        }
      }
      saveCartState(state);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartState(state);
    },
  },
});

// Save cart state to localStorage
const saveCartState = (state: CartState) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

export const { addItem, clearCart, removeItem, updateItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;