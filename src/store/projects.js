import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
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

const projectMembers = createSlice({
    name: 'Team Members',
    initialState: [],
    reducers: {
        ADD_TEAM_MEMBER: (team, action) => {
           team.push({
                name: action.payload.name,
                projects: []
            });
        },
        ADD_PROJECT_TO_TEAM_MEMBER: (team, action) => {
            return team.map((member) => {
                return member.name === action.payload.name ?
                {...member, projects: [...member.projects, action.payload.project]}
                : member
            })
        }
    }
})

export const {ADD_TEAM_MEMBER, ADD_PROJECT_TO_TEAM_MEMBER} = projectMembers.actions;
export const {ADD_PROJECT, REMOVE_PROJECT} = projects.actions;

export default function() {
    return combineReducers({
        teamproject: projectMembers.reducer,
        projects: projects.reducer
    })
}