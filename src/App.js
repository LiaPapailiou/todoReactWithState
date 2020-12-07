import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import List from './components/ListTodos';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <div className="container">
       <h2>My todo list</h2>
        <Route
          path="/"
          component={List}
        />
       </div>
      
     </Router>
    </div>
  );
}

export default App;
