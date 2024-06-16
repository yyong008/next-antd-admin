import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './features/user-info';

export const makeStore = () => {
  return configureStore({
    reducer: {
      userInfo: userInfoReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ['userInfo/setUserInfo'],
          // // Ignore these field paths in all actions
          // ignoredActionPaths: ['payload.createdAt', 'payload.updatedAt'],
          // // Ignore these paths in the state
          // ignoredPaths: ['items.dates'],
        },
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
