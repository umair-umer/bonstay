import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from the right package
import rootReducer from './reducers/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // Specify AsyncStorage as the storage engine for React Native
  whitelist: ['auth'], // Only persist the 'auth' reducer or any other reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);