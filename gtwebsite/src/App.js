import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AppNavbar from './components/navbar';

function App() {
  return (
    <div className="App">
      < AppNavbar />
      <BrowserRouter>
          <Routes>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
