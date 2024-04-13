import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    taskName: null,
    taskDescription: null,
    completed:false
}

export const taskSlice = createSlice({
name:"task",
initialState,
reducers: {
addTask: {state,action}
}

})