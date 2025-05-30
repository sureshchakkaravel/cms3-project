// const styles = {
//   page: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #6a0dad, #1a1a1a, #2a0c4d)',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     color: '#f0f0f0',
//     textAlign: 'center',
//     padding: '0 20px',
//     animation: 'gradientBG 15s ease infinite',
//     backgroundSize: '400% 400%',
//   },
//   title: {
//     fontSize: '3rem',
//     fontWeight: '700',
//     marginBottom: '20px',
//     color: '#e9d5ff',
//     animation: 'fadeInDown 1s ease forwards',
//   },
//   subtitle: {
//     fontSize: '1.25rem',
//     maxWidth: '600px',
//     marginBottom: '30px',
//     color: '#d8b4fe',
//     lineHeight: '1.6',
//     animation: 'fadeInUp 1.2s ease forwards',
//   },
//   button: {
//     padding: '14px 32px',
//     fontSize: '1.1rem',
//     borderRadius: '12px',
//     border: 'none',
//     backgroundColor: '#a78bfa',
//     color: '#1a1a1a',
//     fontWeight: '700',
//     cursor: 'pointer',
//     boxShadow: '0 6px 12px rgba(167, 139, 250, 0.6)',
//     transition: 'all 0.3s ease',
//     animation: 'fadeInUp 1.5s ease forwards',
//   },
//   buttonHover: {
//     backgroundColor: '#7c3aed',
//   },
// };

// const keyframes = `
// @keyframes fadeInDown {
//   from { opacity: 0; transform: translateY(-30px); }
//   to { opacity: 1; transform: translateY(0); }
// }
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

// import { useState } from 'react';

// export default function Home() {
//   const [hover, setHover] = useState(false);

//   return (
//     <>
//       <style>{keyframes}</style>
//       <div style={styles.page}>
//         <h1 style={styles.title}>Welcome to Dot</h1>
//         <p style={styles.subtitle}>
//           Experience the future of productivity with our sleek dashboard, secure login system, and modern UI design.
//         </p>
//         <button
//           style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
//           onMouseEnter={() => setHover(true)}
//           onMouseLeave={() => setHover(false)}
//         >
//           Get Started
//         </button>
//       </div>
//     </>
//   );
// }
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Welcome to Dot Platform</h1>
      <p>Your tech partner for innovative digital solutions.</p>
      <Link to="/login">
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>Login</button>
      </Link>
    </div>
  )
}

export default Home
