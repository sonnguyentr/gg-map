import { combineEpics } from 'redux-observable';
import TodosEpic from '../components/todos/TodosEpic';

const epics = [TodosEpic];

const rootEpic = combineEpics(...epics);

export default rootEpic;
