import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  events: [],
}

export const trackSlice = createSlice({
  name: 'tracker',
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

export const { addEvent, removeEvent } = trackSlice.actions
export default trackSlice.reducer