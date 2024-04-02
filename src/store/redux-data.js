import {createStore} from 'redux'

const reducerFun = (state={counter:0}, action) => {
    if(action.type === "INCREASE_BY_FIVE"){
        return{
            counter: state.counter + 5,
        }
    }

    if(action.type === "DECREASE_BY_FIVE"){
        return{
            counter: state.counter - 5,
        }
    }
    return state;
}

const store = createStore(reducerFun);

export default store;