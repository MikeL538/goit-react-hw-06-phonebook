// contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { saveContacts as saveContactsAction } from '../actions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(saveContactsAction, (state, action) => {
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    });
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;