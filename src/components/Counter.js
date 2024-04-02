import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.buttonContainer}>
      <button onClick={ ()=> dispatch({type:"INCREASE_BY_FIVE"})}>Inc +5</button>
      <button onClick={ ()=> dispatch({type:"DECREASE_BY_FIVE"})}>Dec -5</button>
      </div>
     

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
