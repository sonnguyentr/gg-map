import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import todosReducer from '../components/todos/TodosReducer';

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    todosReducer,
  });

export default createRootReducer;
