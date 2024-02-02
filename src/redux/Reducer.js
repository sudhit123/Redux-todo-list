import { createSlice } from "@reduxjs/toolkit";

export const TodoList = createSlice({
    name: "List",
    initialState: { list: [] },
    reducers: {
        dataAdd: (state, action) => {
            state.list.push(action.payload)
        },
        dataRemove: (state, action) => {
            state.list.splice(action.payload, 1)
        },
        dataUpdate: (state, action) => {
            state.list.splice(action.payload.id, 1, action.payload)

        }
    }
})

export const { increment, decement, dataAdd, dataRemove, dataUpdate } = TodoList.actions

export default TodoList.reducer