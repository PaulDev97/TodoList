import { configureStore } from "@reduxjs/toolkit";
import taskListSlice  from "./taskListSlice";


const store = configureStore({
  reducer:{
    tasks:taskListSlice
  }
})

export default store