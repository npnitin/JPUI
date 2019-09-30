import { createStore,applyMiddleware ,compose } from "redux"
import { RootReducer } from "../reducers/RootReducer";
import thunk from 'redux-thunk';

export const ConfigureStore  = () =>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(RootReducer,composeEnhancers(applyMiddleware(thunk)));
    return store;
}