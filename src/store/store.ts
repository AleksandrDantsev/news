import { configureStore } from '@reduxjs/toolkit'
import articleReducer from './reducers/articleReducer';

const store = configureStore({
    reducer: {
        articleReducer,
    },
  })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;