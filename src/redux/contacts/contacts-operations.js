import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../shared/api/contactsApi';

export const fetchContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, {rejectWithValue}) => {
    try {
      const result = await contactsAPI.getContacts();
      return result;
    } catch (error) {
      alert(error.message)
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contact/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await contactsAPI.addContact(data);
      return result;
    } catch (error) {
      alert(`Sorry can't add new users ${error.message}`)
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/remove',
  async (id, { rejectWithValue }) => {
    try {
      const result = await contactsAPI.deleteContact(id);
      return result.id;
    } catch (error) {
      alert(`Sorry can't remove users ${error.message}`)
      return rejectWithValue(error);
    }
  }
);

const operations = {
  addContact,
  deleteContact,
  fetchContacts,
};

export default operations;
