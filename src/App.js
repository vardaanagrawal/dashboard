import './App.css';
import Navbar from './Navbar';
import Page1 from './Page1';
import Page2 from './Page2';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1/>}></Route>
        <Route path="/courses" element={<Page2/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
