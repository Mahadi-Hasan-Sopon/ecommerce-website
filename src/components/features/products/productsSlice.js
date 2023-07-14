import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productAdded(state, action) {
            state.push(action.payload);
        },
        /**
         * postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        }
      },
    },
         */
    },
});

export const { productAdded } = productsSlice.actions;

export default productsSlice.reducer;
