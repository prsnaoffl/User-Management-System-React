import React from 'react';
import Home from "./Pages/Home";
import User from "./Pages/User";
import Contact from "./Pages/Contact";
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom"; 
import Navbar from "./Components/Navbar";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux"; 
import userReducer from "./Store/Reducer/User";

 const rootReducer=combineReducers({
   data:userReducer,
 })

 const store= createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={User} />
        <Route exact path="/contacts" component={Contact} />
      </Switch>
    </Router>
    </Provider>
  )
}

export default App
