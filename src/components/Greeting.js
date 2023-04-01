import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);
  const message = useSelector((state) => state.greeting);
  return (
    <div>
      <h1>Greetings</h1>
      {
        message.loading ? (<p>loading...</p>) : (
          <div>
            <h1>{message.greet.message}</h1>
            <p>
              Created at:
              {message.greet.created_at}
            </p>
          </div>
        )
      }
    </div>
  );
};
export default Greeting;
