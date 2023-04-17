import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Add your header component here */}
        <Routes>
          {/* Define your routes here */}
          <Route exact path="/"  element={<App />} />
          {/* Add more routes as needed */}
        </Routes>
        {/* Add your footer component here */}
      </div>
    </Router>
  );
}

export default App;
