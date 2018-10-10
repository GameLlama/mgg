import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import reducers from './reducers'
import HomePage from './containers/HomePage'

const store = createStore(reducers);

const Root = () => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={HomePage} />
        </Router>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();