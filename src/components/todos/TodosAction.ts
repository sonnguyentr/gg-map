import { createAction } from 'redux-actions';
import { GET_TODOS, GET_TODOS_FAIL, GET_TODOS_SUCCESS } from '../../store/actionTypes';

export const getTodos = createAction(GET_TODOS);
export const getTodosSuccess = createAction(GET_TODOS_SUCCESS);
export const getTodosFail = createAction(GET_TODOS_FAIL);
