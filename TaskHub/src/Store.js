import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/Post'


export const store = configureStore({
    reducer:{
        post: postReducer
    }
})