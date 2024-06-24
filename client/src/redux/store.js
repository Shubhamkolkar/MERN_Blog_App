import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Combine your reducers into a root reducer
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if needed
});

// Configure redux-persist
const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

// Create a persisted reducer using persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Create the persistor for Redux persist
export const persistor = persistStore(store);
