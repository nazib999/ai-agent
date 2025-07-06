import { configureStore } from '@reduxjs/toolkit';
import agentReducer from './slices/agentSlice';

export const store = configureStore({
  reducer: {
    agent: agentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export hooks for use in components
export * from './hooks';
