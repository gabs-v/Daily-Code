import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Home/>} path='/' />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
