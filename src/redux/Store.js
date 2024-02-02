import { configureStore } from "@reduxjs/toolkit";
import TodoList from './Reducer'
export const store = configureStore({
    reducer: {
        todolist: TodoList
    }
})