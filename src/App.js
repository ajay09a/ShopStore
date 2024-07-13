import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
