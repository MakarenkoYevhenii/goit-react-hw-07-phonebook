import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../../shared/api/contactsApi';

export const fetchContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, {rejectWithValue}) => {
    try {
      const result = await contactsAPI.getContacts();
      console.log(result);
      return result;
    } catch (error) {
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
