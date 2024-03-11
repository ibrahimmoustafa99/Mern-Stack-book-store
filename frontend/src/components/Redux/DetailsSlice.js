import {createSlice } from '@reduxjs/toolkit';


const initialState={
    book:{},
    input:''
    
}

export const DetailsSlice= createSlice({
    name:'DetailsSlice',
    initialState,
    reducers:{
        setBook:(state, action)=>{
            state.book=action.payload
        },
        setInput:(state, action) =>{
            state.input=action.payload
        }
    }
})

export const {setBook,setInput}=DetailsSlice.actions

export default DetailsSlice.reducer