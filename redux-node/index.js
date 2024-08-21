
const { createStore } = require('redux');


let INITIAL_VALUE = {
    count: 0
}


// Define a reducer function
const counterReducer = (store = INITIAL_VALUE, action) => {
    if (action.type === 'ADDONE') {
        return { count: store.count + action.payload.inc };
    } else if (action.type === 'SUBTRACTONE') {
        return { count: store.count - 1 };
    }
};

// Create a Redux store
const store = createStore(counterReducer);

// Define a subscriber function to log state changes
store.subscribe(() => {
    const state = store.getState();
    console.log('State:', state);
});

// Dispatch some actions to test Redux
// store.dispatch({ type: 'ADDONE' });
// store.dispatch({ type: 'ADDONE' });
// store.dispatch({ type: 'ADDONE' });
// store.dispatch({ type: 'ADDONE' });
// store.dispatch({ type: 'SUBTRACTONE' });

store.dispatch({ type: 'ADDONE' , payload: {inc : 5}});