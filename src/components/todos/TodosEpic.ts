import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GET_TODOS } from '../../store/actionTypes';
import { getTodosFail, getTodosSuccess } from './TodosAction';

export const getTodosEpic = (action$: any, store$: any, { getTodosService }: { getTodosService: any }) =>
  action$.pipe(
    ofType(GET_TODOS),
    switchMap(({ payload }) =>
      getTodosService(payload).pipe(
        map((res) => getTodosSuccess(res)),
        catchError((err) => of(getTodosFail(err)))
      )
    )
  );

export default combineEpics(getTodosEpic);
