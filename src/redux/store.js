import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoList'

const store = configureStore({
    reducer:{
        todos : todoReducer
    }
})

export default store