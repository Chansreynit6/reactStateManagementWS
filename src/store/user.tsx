import { createSlice,PayloadAction} from "@reduxjs/toolkit";


interface User{
    names:string;
}
const initialState: User ={
    names: "Nit",
};
const user=createSlice({
    name:"shopping",
    initialState,
    reducers:{
        adduser:(state,action:PayloadAction<string>) =>{
            state.names= action.payload
        },
    },
});
export const {adduser} =user.actions;
export default user.reducer;