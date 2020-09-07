import { createSlice } from '@reduxjs/toolkit';

const bugs = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        ADD_BUG: (bugs,action) => {
            let index = bugs.length - 1;
            bugs.push({
                id: index,
                bug: action.payload.bug,
                description: action.payload.description,
                userId: action.payload.userId,
            })
        },
        GET_BUGS: (bugs, action) => {
            return [...action.payload]
        }
    }
})

export const {ADD_BUG, GET_BUGS} = bugs.actions;
export default bugs.reducer;