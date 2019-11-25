import { applyMiddleware, createStore, compose } from "redux" ;
import thunk from "redux-thunk" ;
import Reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ,
      composer = composeEnhancers( applyMiddleware( thunk ) ),
      store = createStore( Reducers, composer );

export default store ;
