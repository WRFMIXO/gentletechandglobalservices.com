import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AppNavbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppNavbar />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
