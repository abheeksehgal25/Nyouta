import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [requiresOtp, setRequiresOtp] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (!requiresOtp) {
        const response = await fetch('http://localhost:5000/api/v1/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        console.log('Register response:', data);

        if (response.ok) {
          if (data.requiresOtp) {
            setRequiresOtp(true);
            setWelcomeMessage(`Welcome ${name}, please enter the OTP sent to your email.`);
            setSuccess(data.message || 'Registration successful. OTP sent to email.');
          } else {
            setSuccess(data.message || 'Registration successful!');
            setWelcomeMessage(`Welcome ${name}`);
            setTimeout(() => navigate('/login'), 2000);
          }
        } else {
          setError(data.message || 'Registration failed.');
        }
      } else {
        // OTP verification
        const response = await fetch('http://localhost:5000/api/v1/auth/verify-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, otp }),
        });
        const data = await response.json();
        console.log('OTP verification response:', data);

        if (response.ok) {
          setSuccess('Email verified successfully. You can now log in.');
          setWelcomeMessage(`Welcome ${name}`);
          setTimeout(() => navigate('/login'), 2000);
        } else {
          setError(data.message || 'Invalid or expired OTP.');
        }
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '4rem auto',
      padding: '2.5rem',
      background: 'linear-gradient(135deg, #7a4a00, #653100)',
      color: 'white',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(101, 49, 0, 0.6)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: '700', letterSpacing: '1px' }}>
        {requiresOtp ? 'Verify OTP' : 'Sign Up'}
      </h2>

      {error && <p style={{ color: '#f87171', marginBottom: '1rem', fontWeight: '600' }}>{error}</p>}
      {success && <p style={{ color: '#86efac', marginBottom: '1rem', fontWeight: '600' }}>{success}</p>}
      {welcomeMessage && <p style={{ color: '#86efac', marginBottom: '1rem', fontWeight: '600' }}>{welcomeMessage}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {!requiresOtp ? (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </>
        ) : (
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            maxLength={6}
            style={inputStyle}
          />
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
            color: '#653100',
            padding: '0.85rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '1.1rem',
            boxShadow: '0 4px 12px rgba(251, 191, 36, 0.6)',
            transition: 'background 0.3s, box-shadow 0.3s'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(251, 191, 36, 0.8)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #fbbf24, #f59e0b)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(251, 191, 36, 0.6)';
          }}
        >
          {loading ? (requiresOtp ? 'Verifying OTP...' : 'Signing up...') : (requiresOtp ? 'Verify OTP' : 'Sign Up')}
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  borderRadius: '6px',
  border: '1px solid #d1d5db',
  marginTop: '0.5rem',
  backgroundColor: 'white',
  color: '#333',
  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
  transition: 'border-color 0.3s, box-shadow 0.3s'
};

export default Signup;
