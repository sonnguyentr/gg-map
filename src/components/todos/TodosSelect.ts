import { createSelector } from 'reselect';

const todosSelector = (state: any) => state.todosReducer.dataTodos;

export const getTodoIdsSelector = createSelector(todosSelector, (items) => items.map((item: any) => item.id));
