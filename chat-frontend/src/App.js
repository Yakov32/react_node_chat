import React from 'react';
import Chat from './components/chat/chat';
import Login from './components/auth/login';
import Register from './components/auth/register';
//import ProtectedRoute from './components/auth/router/ProtectedRoute';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import './App.scss';

function App(props) {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element= { <Chat /> } />
            <Route path='/login' element={ <Login />} />
            <Route path='/register' element={ <Register />} />
            <Route path="*" element={ <h1>404 Page not found.</h1> } />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
