import { handleActions } from 'redux-actions';
import { GET_TODOS, GET_TODOS_FAIL, GET_TODOS_SUCCESS } from '../../store/actionTypes';

const initialState = {
  dataTodos: [],
  err: {},
  isLoading: true,
};

const actions = {
  [GET_TODOS]: (state: any) => ({
    ...state,
    dataTodos: [],
    err: {},
    isLoading: true,
  }),
  [GET_TODOS_SUCCESS]: (state: any, { payload }: { payload: any }) => ({
    ...state,
    dataTodos: payload.data,
    isLoading: false,
  }),
  [GET_TODOS_FAIL]: (state: any, { payload }: { payload: any }) => ({
    ...state,
    err: payload,
    isLoading: false,
  }),
};

export default handleActions(actions, initialState);
