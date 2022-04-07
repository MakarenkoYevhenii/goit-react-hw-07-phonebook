import {fetchContacts,addContact,deleteContact} from "./contacts-operations"
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:[],
    loading:false,
    error:null,
}

const contactSlise=createSlice({
        name:"contacts",
        initialState,
        extraReducers:{
          
            [fetchContacts.pending]:(state)=>{
                state.loading=true;
                state.error=null;
            },
            [fetchContacts.fulfilled]:(state,{payload})=>{
                state.items=[...payload];
                state.loading=false;

            },
            [fetchContacts.rejected]:(state,{payload})=>{
                state.loading=false;
                state.error=payload;
            },
            [addContact.pending]:(state)=>{
                state.loading=true;
                state.error=null;
            },
            [addContact.fulfilled]:(state,{payload})=>{
                state.items.push(payload);
                state.loading=false;
            },
            [addContact.rejected]:(state,{payload})=>{
                state.loading=false;
                state.error=payload;
            },
            [deleteContact.pending]:(state)=>{
                state.loading=true;
                state.error=null;
            },
            [deleteContact.fulfilled]:(state,{payload})=>{
                state.items=state.items.filter(item=>item.id !== payload);
                state.loading=false;
            },
            [deleteContact.rejected]:(state,{payload})=>{
                state.loading=false;
                state.error=payload;
            }
        }
})


export default contactSlise.reducer;