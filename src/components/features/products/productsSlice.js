import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      productAdded(state, action) {
            state.push(action.payload);
        },
    },
});

export const { productAdded } = productsSlice.actions;

export default productsSlice.reducer;
