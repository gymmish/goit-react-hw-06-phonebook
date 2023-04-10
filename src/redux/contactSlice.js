import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, removeContacts } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload.reverse();
    },
    [fetchContacts.rejected]: handleRejected,

    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addContacts.rejected]: handleRejected,

    [removeContacts.pending]: handlePending,
    [removeContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [removeContacts.rejected]: handleRejected,
  },
});

//   reducers: {
//     addContacts(state, action) {
//       state.items.push(action.payload);
//     },
//     removeContacts(state, action) {
//       state.items = state.items.filter(
// contact => contact.id !== action.payload
//       );
//     },
//   },
// });

export const contactsReducer = myContactsSlice.reducer;
// export const { addContacts, removeContacts } = myContactsSlice.actions;
