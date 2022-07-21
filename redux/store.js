import { configureStore } from '@reduxjs/toolkit';
import newMessageDataReducer from './messageDataSlice';
import lessonDataReducer from './lessonDataSlice';


export const store = configureStore({
  reducer: {
    messageData: newMessageDataReducer,
    lessonData: lessonDataReducer
  },
});