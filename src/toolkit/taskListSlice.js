

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

    },

    deleteAll: (state) => {
      return state = []
    }
    
  }
  
  
  
})



export const {
  addTask,
  deleteTask,
  deleteAll,
} = taskListSlice.actions

export default taskListSlice.reducer;
