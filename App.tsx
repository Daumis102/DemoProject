import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';
import {RootNavigator} from './src/navigation';
import {store} from './src/redux/store';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <RootNavigator></RootNavigator>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
