import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    taskName: null,
    taskDescription: null,
    completed:false
}


//payload es de toolkit
//el cambio de estado va gracias al action
export const taskSlice = createSlice({
name:"task",
initialState,
reducers: {
addTask: (state,action)=>{
    const {taskName,taskDescription,completed}=action.payload;
    state.taskName= taskName;
    state.taskDescription= taskDescription;
    state.completed=completed;
},
changeCompleted: (state,action)=>{
    state.completed= action.payload
},

},
})

export const {addTask, changeCompleted} = taskSlice.actions;
//Este actions no lo hemos creado pero ya está dentro al estar utilizando {createSlice} 