import { createSlice } from '@reduxjs/toolkit';
let id = 0;

const projects = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        ADD_PROJECT: (projects, action) => {
            projects.push({
                id: ++id,
                name: action.payload.name
            })
        },
        REMOVE_PROJECT: (projects, action) => {
            return projects.filter((project) => project.id !== action.payload.id)
        }
    }
});

export const { ADD_PROJECT, REMOVE_PROJECT } = projects.actions;
export default projects.reducer;