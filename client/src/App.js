// App.js
import './App.css';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Navbar from './Pages/Navbar';
import { Routes, Route } from 'react-router-dom';
import Read from './Pages/Read';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/nav' element={<Navbar></Navbar>}>
          <Route path='/nav/create' element={<Create />} />
          <Route path='/nav' element={<Read />} />
          <Route path='/nav/:id' element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


