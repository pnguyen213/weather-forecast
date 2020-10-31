import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationForecastContainer from './containers/LocationForecastContainer';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <LocationForecastContainer />
    </Provider>
  );
}

export default App;
