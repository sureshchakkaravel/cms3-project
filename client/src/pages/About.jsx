import { useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a0b3e, #0a0822)',
  backgroundSize: '200% 200%',
  color: '#f8f9ff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  padding: '20px',
  animation: 'gradientBG 12s ease infinite',
};

const contentContainerStyle = {
  backgroundColor: 'rgba(26, 11, 62, 0.7)',
  padding: '40px 50px',
  borderRadius: '24px',
  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
  border: '1px solid rgba(100, 255, 218, 0.3)',
  width: '100%',
  maxWidth: '900px',
  animation: 'fadeInUp 1s ease forwards',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'center',
};

const companyNameStyle = {
  fontSize: '4rem',
  fontWeight: '900',
  marginBottom: '0.8rem',
  background: 'linear-gradient(45deg, #a64dff, #64ffda)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  letterSpacing: '2px',
};

const taglineStyle = {
  fontSize: '2rem',
  marginBottom: '2rem',
  color: '#a2f2ea',
  textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
  fontWeight: '600',
};

const heroTextStyle = {
  fontSize: '1.4rem',
  lineHeight: '1.8',
  marginBottom: '3rem',
  color: '#f8f9ff',
};

const featuresContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px',
  margin: '2.5rem 0',
};

const featureStyle = {
  flex: '1 1 200px',
  backgroundColor: 'rgba(100, 255, 218, 0.08)',
  padding: '20px 15px',
  borderRadius: '15px',
  border: '1px solid rgba(100, 255, 218, 0.2)',
  transition: 'all 0.3s ease',
  minWidth: '180px',
  maxWidth: '220px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
};

const featureHoverStyle = {
  backgroundColor: 'rgba(100, 255, 218, 0.15)',
  transform: 'translateY(-5px)',
  boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
};

const featureIconStyle = {
  fontSize: '2.5rem',
  marginBottom: '0.8rem',
  color: '#64ffda',
};

const featureTextStyle = {
  fontSize: '1.1rem',
  color: '#f8f9ff',
  fontWeight: '500',
};

const calloutStyle = {
  backgroundColor: 'rgba(166, 77, 255, 0.1)',
  borderRadius: '15px',
  padding: '25px',
  margin: '3rem 0 2.5rem',
  border: '1px solid rgba(166, 77, 255, 0.3)',
  color: '#f8f9ff',
  fontSize: '1.2rem',
  lineHeight: '1.7',
  textAlign: 'center',
};

const buttonContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1.5rem',
  marginTop: '2.5rem',
};

const buttonStyle = {
  flex: '1 1 200px',
  padding: '16px 20px',
  borderRadius: '12px',
  border: 'none',
  backgroundColor: '#a64dff',
  color: '#f8f9ff',
  fontWeight: '700',
  fontSize: '1.2rem',
  cursor: 'pointer',
  boxShadow: '0 6px 12px rgba(166, 77, 255, 0.5)',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  textAlign: 'center',
  minWidth: '180px',
  maxWidth: '220px',
};

const buttonHoverStyle = {
  backgroundColor: '#64ffda',
  color: '#0a0822',
  boxShadow: '0 8px 16px rgba(100, 255, 218, 0.6)',
  transform: 'translateY(-3px)',
};

const iconStyle = {
  fontSize: '4rem',
  marginBottom: '1rem',
  opacity: '0.8',
  display: 'inline-block',
  transform: 'translateY(0)',
  animation: 'float 3s ease-in-out infinite',
  color: '#64ffda',
};

const floatKeyframes = `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
`;

const fadeInUpKeyframes = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

const gradientBGKeyframes = `
@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

const bgBlobStyle = {
  position: 'absolute',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: 'radial-gradient(circle, rgba(166,77,255,0.08) 0%, rgba(100,255,218,0.02) 70%, rgba(0,0,0,0) 100%)',
  zIndex: '-1',
  top: '-100px',
  right: '-100px',
  animation: 'float 6s ease-in-out infinite',
};

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [signupHover, setSignupHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);

  return (
    <>
      <style>
        {fadeInUpKeyframes}
        {floatKeyframes}
        {gradientBGKeyframes}
      </style>
      <div style={pageStyle}>
        <div style={contentContainerStyle}>
          <div style={bgBlobStyle}></div>
          <div style={iconStyle} role="img" aria-label="Innovation icon">✨</div>
          <h1 style={companyNameStyle}>Dot</h1>
          <p style={taglineStyle}>Innovative Software Solutions for Your Business</p>
          <p style={heroTextStyle}>
            Ready to take your business to the next level? Join us today and discover the power of modern technology tailored to your needs.
          </p>

          <div style={featuresContainerStyle}>
            {['🚀', '📱', '☁️', '🛠️'].map((icon, index) => (
              <div
                key={index}
                style={{
                  ...featureStyle,
                  ...(hoveredFeature === index ? featureHoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div style={featureIconStyle}>{icon}</div>
                <div style={featureTextStyle}>
                  {[
                    'Custom Software',
                    'Mobile & Web Apps',
                    'Cloud Solutions',
                    'IT Consulting',
                  ][index]}
                </div>
              </div>
            ))}
          </div>

          <div style={calloutStyle}>
            <strong>Why choose Dot?</strong> Our team of experts is dedicated to delivering high-quality, scalable solutions that drive your business forward. We focus on innovation, reliability, and exceptional customer service.
          </div>

          <div style={buttonContainerStyle}>
            <Link
              to="/signup"
              style={signupHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
              onMouseEnter={() => setSignupHover(true)}
              onMouseLeave={() => setSignupHover(false)}
            >
              Get Started
            </Link>
            <Link
              to="/about"
              style={aboutHover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
              onMouseEnter={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
