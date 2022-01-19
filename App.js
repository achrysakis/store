import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';

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
    cart: cartReducer,
    orders: ordersReducer
  })
);

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;