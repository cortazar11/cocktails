import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../components/Home/Home';



class App extends React.Component {

  render(){
    return (
            <div>
              <BrowserRouter>
                <Route path="/" component={Home}/>
              </BrowserRouter>
            </div>
            )
  }
  
}

export default App;