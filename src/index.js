import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
//React Router
import { BrowserRouter as Router } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './redux/reducers'

const store = createStore(reducer)

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL} >
      <Provider store={store}>
        <App />
      </Provider>
    </Router>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
