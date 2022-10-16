import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Form/>} path='/new' />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
