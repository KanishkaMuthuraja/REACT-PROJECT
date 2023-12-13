import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './Components/Assets/LoginSignup/LoginSignup';
import Register from './Components/Assets/LoginSignup/Register';
import './App.css'

function App() {
 return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
 );
}

export default App;