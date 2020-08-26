import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import reducers from './reducers/combinedReducers'
import reducers from './reducers/cartReducer'
import App from './App';
import BaseLayout from './components/layout/BaseLayout'
import Cart from './components/Cart'
import thunk from 'redux-thunk'

// set-up redux

const store = createStore(reducers, applyMiddleware(thunk))
// let store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //reducer

//wrap application with provider

ReactDOM.render(
<Provider store={store}> 
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/cart" component={Cart}/>
                <Route component={App}/>
            </Switch>
        </BaseLayout>
    
    </BrowserRouter>
</Provider>   
   

   
  ,
  document.getElementById('root')
);