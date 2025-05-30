// import { useState } from 'react';

// const styles = {
//   page: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #6a0dad, #1a1a1a, #2a0c4d)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: '#f0f0f0',
//     animation: 'gradientBG 15s ease infinite',
//     backgroundSize: '400% 400%',
//   },
//   container: {
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     padding: '40px',
//     borderRadius: '20px',
//     width: '100%',
//     maxWidth: '400px',
//     boxShadow: '0 8px 32px rgba(106, 13, 173, 0.4)',
//     backdropFilter: 'blur(12px)',
//     animation: 'fadeInUp 0.8s ease forwards',
//     border: '1px solid rgba(255, 255, 255, 0.1)',
//   },
//   title: {
//     fontSize: '2rem',
//     fontWeight: '700',
//     textAlign: 'center',
//     marginBottom: '24px',
//     color: '#d8b4fe',
//   },
//   input: {
//     width: '100%',
//     padding: '12px 16px',
//     marginBottom: '16px',
//     borderRadius: '10px',
//     border: '1px solid rgba(167, 139, 250, 0.3)',
//     backgroundColor: 'rgba(255, 255, 255, 0.08)',
//     color: '#fff',
//     fontSize: '1rem',
//     outline: 'none',
//   },
//   checkboxContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '16px',
//   },
//   checkbox: {
//     marginRight: '10px',
//   },
//   button: {
//     width: '100%',
//     padding: '12px',
//     borderRadius: '10px',
//     border: 'none',
//     backgroundColor: '#a78bfa',
//     color: '#1a1a1a',
//     fontWeight: '700',
//     fontSize: '1.1rem',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//     boxShadow: '0 6px 12px rgba(167, 139, 250, 0.6)',
//   },
//   buttonHover: {
//     backgroundColor: '#7c3aed',
//   },
//   error: {
//     color: '#f87171',
//     marginBottom: '16px',
//     textAlign: 'center',
//   },
//   footer: {
//     marginTop: '16px',
//     textAlign: 'center',
//     color: '#c4b5fd',
//     fontSize: '0.9rem',
//     opacity: 0.85,
//   },
// };

// const fadeInKeyframes = `
// @keyframes fadeInUp {
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// @keyframes gradientBG {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
// `;

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '', remember: false });
//   const [hover, setHover] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.email || !form.password) {
//       setError('Please enter both email and password.');
//       return;
//     }
//     // You can replace this with real login logic
//     alert(`Welcome, ${form.email}!`);
//     setError('');
//   };

//   return (
//     <>
//       <style>{fadeInKeyframes}</style>
//       <div style={styles.page}>
//         <form style={styles.container} onSubmit={handleSubmit}>
//           <h2 style={styles.title}>Login to Dot</h2>

//           {error && <div style={styles.error}>{error}</div>}

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//           <div style={styles.checkboxContainer}>
//             <input
//               type="checkbox"
//               name="remember"
//               checked={form.remember}
//               onChange={handleChange}
//               style={styles.checkbox}
//             />
//             <label htmlFor="remember">Remember Me</label>
//           </div>
//           <button
//             type="submit"
//             style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//           >
//             Login
//           </button>

//           <div style={styles.footer}>
//             <p>Don't have an account? <a href="#" style={{ color: '#a78bfa' }}>Sign up</a></p>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      navigate('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={e => setCredentials({ ...credentials, username: e.target.value })}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={e => setCredentials({ ...credentials, password: e.target.value })}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          Login
        </button>
        <p className="text-center mt-4 text-sm text-gray-600">
  Don't have an account?{' '}
  <Link to="/signup" className="text-blue-500 hover:underline">
    Sign Up
  </Link>
</p>
      </form>
    </div>
  )
}

export default Login
