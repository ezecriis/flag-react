import React, { useEffect, useState } from 'react';
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
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  return (
    <main className="mainClass">
      <Provider store={store}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/country/:id" component={CountryPage} />
            <Route pah="/">
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
