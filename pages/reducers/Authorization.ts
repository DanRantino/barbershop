import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const AuthHeader = createSlice({
    name: 'authorization',
    initialState:{
        value:''
    },
    reducers:{
        define: (state,action:PayloadAction<string>)=>{
            state.value = action.payload
        },
        undefined: state=>{
            state.value = ''
        }
    }
})

export const {define, undefined} =AuthHeader.actions
export default AuthHeader.reducer
