import { configureStore } from '@reduxjs/toolkit'
import messageDataReducer from './messageDataSlice'


export const store = configureStore({
  reducer: {
    messageData: messageDataReducer,
  },
});