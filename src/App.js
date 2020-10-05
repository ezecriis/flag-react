import React from 'react';
import './App.css';
import CountryList from './components/CountryList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './components/Reducer';
import ActionList from './components/ActionsList';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryPage from './components/CountryPage';

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
      <Router>
        <Header />
        <Switch>
          <Route path="/country/:id" component={CountryPage} />
          <Route pah="/">
            <ActionList />
            <CountryList />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
