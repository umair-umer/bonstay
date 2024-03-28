/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import {store,persistor} from './src/store';
// Ensure this is the correct path to your store and persistor
import { PersistGate } from 'redux-persist/integration/react';
const AppWithRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    <App />
    </PersistGate>
    {/* <FlashMessage position="top" /> */}
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithRedux);
