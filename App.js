import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import Navigator from './navigation/navigator';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en } from './i18n/en';

i18n.fallbacks = true;
i18n.translations = { en };
i18n.locale = Localization.locale;

const store = createStore(
  combineReducers({
    products: productsReducer,
  })
);

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;