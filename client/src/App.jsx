
// import { Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// function App() {
//   return (
//     <Routes>
//     <Route path="/" element={<Login/>}/>
//     <Route path="/dash" element={<Dashboard/>}/>
//     </Routes>
        
//   );
// }

// export default App;
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
