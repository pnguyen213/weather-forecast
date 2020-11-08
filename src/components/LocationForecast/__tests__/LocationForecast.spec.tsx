
import React from 'react'
import { getAllByText, fireEvent, getByPlaceholderText, render, waitFor } from '@testing-library/react'
import LocationForecast from '../../../containers/LocationForecastContainer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reducer from '../../../redux/reducer';
import { StoreState } from '../../../redux/types';

describe('users enter valid locations and see the corresponding forecasts', () => {

  const initialState: StoreState = {
    ui: {
      recentForecasts: null
    },
    error: {
      apiError: null
    }
  }
  let middleware = applyMiddleware(thunk);
  const store = createStore(reducer, initialState, middleware);
  test('User enter "Lond" and information of London city appear', async () => {
    const { container, getByText } = render(<Provider store={store}><LocationForecast /></Provider>);

    fireEvent.change(getByPlaceholderText(container, 'Enter location'), { target: { value: 'Lond' } });

    await waitFor(() =>
      getByText('Name: London'), { timeout: 4000 });

    expect(getByText(/Name: London/)).toBeInTheDocument();
    expect(getAllByText(container, /^Average Temperature.*$/)).toHaveLength(3);

  });
});