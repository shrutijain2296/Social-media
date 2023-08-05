
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Detail from './Components/Detail';
import MorePosts from './Components/MorePosts';
import Navbar from './Components/Navbar';

const App = () => {
  return (
   
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/item/:id" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;
