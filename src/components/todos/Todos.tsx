import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './TodosAction';
import { getTodoIdsSelector } from './TodosSelect';

const Profile = () => {
  const dataTodos = useSelector(getTodoIdsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <section className="profile">
      {dataTodos.map((item: any) => (
        <div> {item} </div>
      ))}
    </section>
  );
};

export default Profile;
