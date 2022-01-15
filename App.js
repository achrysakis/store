import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import Navigator from './navigation/navigator';

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