import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Styles (matching Home and Dashboard) ---
const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a0b3e, #0a0822, #6a0dad, #2a0c4d)',
  backgroundSize: '400% 400%',
  animation: 'gradientBG 15s ease infinite',
  color: '#f8f9ff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  padding: '20px',
  overflow: 'hidden',
};

const formContainerStyle = {
  backgroundColor: 'rgba(26, 11, 62, 0.7)',
  padding: '40px 50px',
  borderRadius: '24px',
  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(100, 255, 218, 0.3)',
  width: '100%',
  maxWidth: '450px',
  animation: 'fadeInUp 1s ease forwards',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'center',
  backdropFilter: 'blur(12px)',
};

const headingStyle = {
  fontSize: '2.8rem',
  fontWeight: '900',
  marginBottom: '1.5rem',
  textAlign: 'center',
  textShadow: '3px 3px 8px rgba(0,0,0,0.9)',
  color: '#d8b4fe',
  letterSpacing: '2px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: '600',
  fontSize: '1.1rem',
  color: '#a2f2ea',
  textAlign: 'left',
};

const inputStyle = {
  width: '100%',
  padding: '12px 15px',
  marginBottom: '20px',
  borderRadius: '8px',
  border: '1px solid rgba(166, 77, 255, 0.3)',
  fontSize: '1rem',
  outline: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.13)',
  color: '#f8f9ff',
  boxShadow: 'inset 0 0 5px rgba(100, 255, 218, 0.15)',
  transition: 'background-color 0.3s, border-color 0.3s',
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: '#a64dff',
  color: '#f8f9ff',
  fontWeight: '700',
  fontSize: '1.2rem',
  cursor: 'pointer',
  boxShadow: '0 6px 12px rgba(166, 77, 255, 0.5)',
  transition: 'background-color 0.3s, box-shadow 0.3s',
  marginTop: '10px',
};

const buttonHoverStyle = {
  backgroundColor: '#64ffda',
  color: '#0a0822',
  boxShadow: '0 8px 16px rgba(100, 255, 218, 0.6)',
};

const errorTextStyle = {
  color: '#f87171',
  fontSize: '0.95rem',
  marginTop: '-15px',
  marginBottom: '15px',
  textAlign: 'left',
};

const fadeInUpKeyframes = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [buttonHover, setButtonHover] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear error on input change
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Sign up successful! 🎉');
      navigate('/dash', { replace: true });
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <>
      <style>{fadeInUpKeyframes}</style>
      <div style={pageStyle}>
        <form style={formContainerStyle} onSubmit={handleSubmit} noValidate>
          <h1 style={headingStyle}>Create Account</h1>

          <label htmlFor="fullName" style={labelStyle}>
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your full name"
            value={formData.fullName}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="name"
          />
          {errors.fullName && (
            <p style={errorTextStyle}>{errors.fullName}</p>
          )}

          <label htmlFor="email" style={labelStyle}>
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="email"
          />
          {errors.email && <p style={errorTextStyle}>{errors.email}</p>}

          <label htmlFor="password" style={labelStyle}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="new-password"
          />
          {errors.password && (
            <p style={errorTextStyle}>{errors.password}</p>
          )}

          <label htmlFor="confirmPassword" style={labelStyle}>
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={inputStyle}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <p style={errorTextStyle}>{errors.confirmPassword}</p>
          )}

          <button
            type="submit"
            style={buttonHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
