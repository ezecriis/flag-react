import React from 'react';
import './App.css';
import CountryList from './components/CountryList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/Reducer';
import ActionList from './components/ActionsList';
import Header from './components/Header';

const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ActionList />
      <CountryList />
    </Provider>
  );
}

export default App;
