import { createSlice } from "@reduxjs/toolkit";

const initState = {    
    isSection1Modal: false    
}

const section1ModalReducer = createSlice({
    name:'section1Main',
    initialState: initState,
    reducers: {
        section1Modal: (state, action)=>{
            state.isSection1Modal = action.payload
        }
    }
});

export default section1ModalReducer.reducer;
export const {section1Modal} = section1ModalReducer.actions;