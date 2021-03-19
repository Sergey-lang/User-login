import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {App} from './u-1-app/App';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './u-1-app/store';

import './index.css';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);

reportWebVitals();
