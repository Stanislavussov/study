import { configureStore } from '@reduxjs/toolkit'
import trackerReducer, {moduleName as trackerModule} from './features/tracker/trackerSlice'

export const store = configureStore({
  reducer: {
    [trackerModule]: trackerReducer,
  },
})