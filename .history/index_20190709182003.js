/**
 * @format
 */

import { AppRegistry, ActivityIndicator, View } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';
import configureStore from './store';

//const store = configureStore()
renderLoading = () => {
  <View>
    <ActivityIndicator />
  </View>
}

const RNRedux = () => (
  <Provider store={store}>
    <PersistGate loading={this.renderLoading} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
AppRegistry.registerComponent(appName, () => RNRedux);
