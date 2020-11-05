import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationForecastContainer from './containers/LocationForecastContainer';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import RuntimeErrorBoundary from './components/Error/RuntimeErrorBoundary';
import ApiErrorContainer from './containers/ApiErrorContainer';

const store = configureStore();

function App() {
  return (
    <RuntimeErrorBoundary>
      <Provider store={store}>
        <ApiErrorContainer />
        <LocationForecastContainer />
      </Provider>
    </RuntimeErrorBoundary>
  );
}

export default App;
