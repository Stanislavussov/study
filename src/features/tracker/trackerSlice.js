import { createSlice } from '@reduxjs/toolkit'
import {createSelector} from 'reselect'

const initialState = {
  events: [{name: "board game"}],
}

export const moduleName = 'tracker'

export const trackSlice = createSlice({
  name: moduleName,
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const {payload} = action
      state.events = [...state.events, payload]
    },
    removeEvent: (state, action) => {
      const {payload} = action
      state.events = state.events.filter(event => event.name === payload.name)
    }
  },
})

const trackerSelector = state => state[moduleName]
export const eventSelector = createSelector(trackerSelector, state => state.events)
export const firstEventSelector = createSelector(eventSelector, state => state[0])
export const countEventSelector = createSelector(eventSelector, state => state.length)

export const { addEvent, removeEvent } = trackSlice.actions
export default trackSlice.reducer