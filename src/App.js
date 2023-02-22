import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <div className="text-center text-dark">
      <Routes >
      <Route path='/*' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
