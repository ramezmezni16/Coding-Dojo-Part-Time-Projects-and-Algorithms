import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Create from './components/Create';
import List from './components/List';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/dashbord' element={<List/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;