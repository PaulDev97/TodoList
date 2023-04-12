

import { createSlice } from '@reduxjs/toolkit'





export const taskListSlice = createSlice({

  name:'tasks',
  initialState : [],
  
  reducers: { 
    addTask: (state,action) => {
      
      return [action.payload, ...state]
    },

    deleteTask: (state,action) => {      
      
      const idItem = action.payload
      
      return state.filter((item) => item.id !== idItem)

    }
    
  }
  
  
  
})



export const {
  addTask,
  deleteTask
} = taskListSlice.actions

export default taskListSlice.reducer;
