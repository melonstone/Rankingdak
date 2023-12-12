import { createSlice } from "@reduxjs/toolkit";

const initState = {
    isSub4Modal: false
}

const sub4ModalReducer = createSlice({
    name: 'sub4Modal',
    initialState: initState,
    reducers: {
        sub4Modal: (state, action)=>{
            state.isSub4Modal = action.payload
        }
    }
});

export default sub4ModalReducer.reducer;
export const {sub4Modal} = sub4ModalReducer.actions;