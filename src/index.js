import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './store/ConfigureStore';

const rootElement = document.getElementById('root');
const store = ConfigureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter> 
            <App/>
        </BrowserRouter>
    </Provider>, 
rootElement);

