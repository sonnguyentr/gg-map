import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';
import rootEpic from '../epics';
import rootReducer from '../reducers';
import ApiService from '../services/apiService';

export const history = createBrowserHistory();

const initialState = {};

const enhancers = [];
const epicMiddleware = createEpicMiddleware({
  dependencies: {
    // new api
    getTodosService: ApiService.getTodos,
  },
});

const middleware = [routerMiddleware(history), epicMiddleware];

if (process.env.NODE_ENV === 'development') {
  if (typeof window !== 'undefined') {
    // @ts-ignore
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  // autoRehydrate(), // FIXME: remove when deploying to production
  ...enhancers
);

const store = createStore(rootReducer(history), initialState, composedEnhancers);
epicMiddleware.run(rootEpic);
// persistStore(store); // FIXME: remove when deploying to production

export default store;
