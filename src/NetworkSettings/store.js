import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import NetwarkSettingsReducer from "./NetworkSettingsReducer";

const reducer = combineReducers({
    form: reduxFormReducer,
    network: NetwarkSettingsReducer
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
