import { useState } from 'react';

// --- Styles ---
const pageStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #6a0dad, #1a1a1a, #2a0c4d)',
  backgroundSize: '400% 400%',
  animation: 'gradientBG 15s ease infinite',
  color: '#f0f0f0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  padding: '20px',
  overflow: 'hidden',
};

const contentContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.07)',
  padding: '40px 50px',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(106, 13, 173, 0.6)',
  width: '100%',
  maxWidth: '800px',
  animation: 'fadeInUp 0.8s ease forwards',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  position: 'relative',
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

const sectionStyle = {
  marginBottom: '2rem',
  backgroundColor: 'rgba(167, 139, 250, 0.1)',
  borderRadius: '14px',
  padding: '24px',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(167, 139, 250, 0.25)',
  backdropFilter: 'blur(4px)',
};

const sectionHoverStyle = {
  transform: 'translateY(-5px)',
  boxShadow: '0 12px 24px rgba(106, 13, 173, 0.5)',
  background: 'rgba(167, 139, 250, 0.2)',
  border: '1px solid rgba(167, 139, 250, 0.4)',
};

const sectionHeadingStyle = {
  fontSize: '1.9rem',
  fontWeight: '700',
  marginBottom: '1rem',
  color: '#c4b5fd',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const textStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.7',
  marginBottom: '1rem',
  color: '#e9d5ff',
};

const serviceItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  marginBottom: '12px',
  padding: '10px 14px',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
};

const serviceItemHoverStyle = {
  backgroundColor: 'rgba(167, 139, 250, 0.2)',
  transform: 'translateX(5px)',
};

const iconStyle = {
  fontSize: '1.5rem',
  color: '#a78bfa',
  minWidth: '30px',
  textAlign: 'center',
};

const testimonialCardStyle = {
  backgroundColor: 'rgba(167, 139, 250, 0.1)',
  borderRadius: '12px',
  padding: '20px',
  marginBottom: '16px',
  border: '1px solid rgba(167, 139, 250, 0.2)',
  transition: 'all 0.3s ease',
};

const testimonialCardHoverStyle = {
  transform: 'translateY(-3px)',
  boxShadow: '0 8px 16px rgba(106, 13, 173, 0.4)',
  background: 'rgba(167, 139, 250, 0.15)',
};

const testimonialNameStyle = {
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#d8b4fe',
  marginBottom: '6px',
};

const testimonialTitleStyle = {
  fontSize: '1rem',
  color: '#c4b5fd',
  marginBottom: '12px',
  opacity: '0.8',
};

const testimonialTextStyle = {
  fontSize: '1.1rem',
  color: '#e9d5ff',
  fontStyle: 'italic',
};

const formInputStyle = {
  width: '100%',
  padding: '12px 16px',
  marginBottom: '16px',
  borderRadius: '8px',
  border: '1px solid rgba(167, 139, 250, 0.4)',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  color: '#f0f0f0',
  fontSize: '1.1rem',
  outline: 'none',
};

const formTextareaStyle = {
  ...formInputStyle,
  minHeight: '120px',
  resize: 'vertical',
};

const formButtonStyle = {
  width: '100%',
  padding: '14px',
  borderRadius: '10px',
  border: 'none',
  backgroundColor: '#a78bfa',
  color: '#1a1a1a',
  fontWeight: '700',
  fontSize: '1.2rem',
  cursor: 'pointer',
  boxShadow: '0 6px 12px rgba(167, 139, 250, 0.6)',
  marginTop: '1rem',
};

const formButtonHoverStyle = {
  backgroundColor: '#7c3aed',
};

const logsContainerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  padding: '16px',
  marginTop: '2rem',
  border: '1px solid rgba(167, 139, 250, 0.2)',
  maxHeight: '200px',
  overflowY: 'auto',
};

const logItemStyle = {
  padding: '8px 0',
  borderBottom: '1px solid rgba(167, 139, 250, 0.1)',
  color: '#e9d5ff',
  fontSize: '0.95rem',
};

const navButtonStyle = {
  backgroundColor: 'rgba(167, 139, 250, 0.2)',
  color: '#d8b4fe',
  border: '1px solid rgba(167, 139, 250, 0.4)',
  borderRadius: '8px',
  padding: '8px 16px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontWeight: '600',
  margin: '0 8px',
};

const footerStyle = {
  marginTop: '2rem',
  textAlign: 'center',
  color: '#c4b5fd',
  fontSize: '1rem',
  opacity: '0.8',
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

export default function Dashboard() {
  const [aboutHover, setAboutHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [testimonialsHover, setTestimonialsHover] = useState(Array(3).fill(false));
  const [serviceItemHover, setServiceItemHover] = useState(Array(5).fill(false));
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [logs, setLogs] = useState([
    'Welcome to Dot Dashboard!',
    'Your session is active.',
    'Recent activity: Viewed dashboard.',
    'Last login: Today, 11:45 AM',
  ]);

  const handleServiceItemHover = (index, isHover) => {
    const updated = [...serviceItemHover];
    updated[index] = isHover;
    setServiceItemHover(updated);
  };

  const handleTestimonialHover = (index, isHover) => {
    const updated = [...testimonialsHover];
    updated[index] = isHover;
    setTestimonialsHover(updated);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLog = `Message sent by ${formData.name} (${formData.email}) at ${new Date().toLocaleTimeString()}`;
    setLogs([...logs, newLog]);
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const services = [
    { icon: '💻', name: 'Custom Software Development' },
    { icon: '📱', name: 'Web & Mobile App Design' },
    { icon: '☁', name: 'Cloud Solutions' },
    { icon: '🎨', name: 'UI/UX Design' },
    { icon: '🔧', name: 'IT Consulting' },
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      title: 'CEO, TechSolutions Inc.',
      text: 'Dot transformed our workflow with their custom software. The team is responsive, skilled, and truly understands our business needs.',
    },
    {
      name: 'Maria Garcia',
      title: 'Marketing Director, BrandWave',
      text: 'Working with Dot has been a game-changer. Their mobile app design is sleek, intuitive, and has boosted our user engagement significantly.',
    },
    {
      name: 'Raj Patel',
      title: 'CTO, CloudNetworks',
      text: 'Dot’s cloud solutions are top-notch. They delivered ahead of schedule and provided excellent support throughout the process.',
    },
  ];

  return (
    <>
      <style>{fadeInUpKeyframes}</style>
      <div style={pageStyle}>
        <div style={contentContainerStyle}>
          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
            {['about', 'contact', 'services', 'testimonials', 'logs'].map((section) => (
              <button
                key={section}
                style={navButtonStyle}
                onClick={() => document.getElementById(section).scrollIntoView({ behavior: 'smooth' })}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <h1 style={headingStyle}>Dashboard</h1>

          {/* About */}
          <div
            id="about"
            style={aboutHover ? { ...sectionStyle, ...sectionHoverStyle } : sectionStyle}
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
          >
            <h2 style={sectionHeadingStyle}><span style={iconStyle}>🔍</span> About</h2>
            <p style={textStyle}>Dot is a passionate team dedicated to building innovative software solutions that help businesses grow and succeed.</p>
            <p style={textStyle}>Our mission is to empower your business with cutting-edge technology tailored to your unique needs.</p>
          </div>

          {/* Contact */}
          <div
            id="contact"
            style={contactHover ? { ...sectionStyle, ...sectionHoverStyle } : sectionStyle}
            onMouseEnter={() => setContactHover(true)}
            onMouseLeave={() => setContactHover(false)}
          >
            <h2 style={sectionHeadingStyle}><span style={iconStyle}>📞</span> Contact</h2>
            <p style={textStyle}>Have questions or want to discuss your project? Get in touch with us!</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} style={formInputStyle} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} style={formInputStyle} required />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} style={formTextareaStyle} required />
              <button
                type="submit"
                style={formButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = formButtonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = formButtonStyle.backgroundColor}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Services */}
          <div
            id="services"
            style={servicesHover ? { ...sectionStyle, ...sectionHoverStyle } : sectionStyle}
            onMouseEnter={() => setServicesHover(true)}
            onMouseLeave={() => setServicesHover(false)}
          >
            <h2 style={sectionHeadingStyle}><span style={iconStyle}>🛠</span> Services</h2>
            {services.map((service, index) => (
              <div
                key={index}
                style={serviceItemHover[index] ? { ...serviceItemStyle, ...serviceItemHoverStyle } : serviceItemStyle}
                onMouseEnter={() => handleServiceItemHover(index, true)}
                onMouseLeave={() => handleServiceItemHover(index, false)}
              >
                <span style={iconStyle}>{service.icon}</span>
                <span style={textStyle}>{service.name}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div id="testimonials" style={sectionStyle}>
            <h2 style={sectionHeadingStyle}><span style={iconStyle}>🌟</span> Testimonials</h2>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={testimonialsHover[index] ? { ...testimonialCardStyle, ...testimonialCardHoverStyle } : testimonialCardStyle}
                onMouseEnter={() => handleTestimonialHover(index, true)}
                onMouseLeave={() => handleTestimonialHover(index, false)}
              >
                <h3 style={testimonialNameStyle}>{testimonial.name}</h3>
                <p style={testimonialTitleStyle}>{testimonial.title}</p>
                <p style={testimonialTextStyle}>"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* Logs */}
          <div id="logs" style={logsContainerStyle}>
            <h3 style={{ color: '#d8b4fe', marginBottom: '12px' }}>Recent Activity</h3>
            {logs.map((log, index) => (
              <div key={index} style={logItemStyle}>{log}</div>
            ))}
          </div>

          {/* Footer */}
          <div style={footerStyle}>
            <p>© 2024 Dot. All rights reserved. Made with ❤</p>
          </div>
        </div>
      </div>
    </>
  );
}
