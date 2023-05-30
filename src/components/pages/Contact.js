import React, { useState } from 'react';

const styles = {
  h1: {
    fontSize: '40px',
    margin: '20px',
    color: '#333',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  formContainer: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  label: {
    color: '#664E4C',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #E2D58B',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    height: '200px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #E2D58B',
    borderRadius: '4px',
  },
  error: {
    color: '#F9D4BB',
    fontSize: '14px',
  },
  submitButton: {
    background: '#F0E2A3',
    color: '#664E4C',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission logic here
      console.log('Form submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (

    <div>
      <h1 className="text-center" style={styles.h1}>Contact Page</h1>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              style={styles.input}
            />
            {errors.name && <span style={styles.error}>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              style={styles.input}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="message" style={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleInputChange}
              style={styles.textarea}
            ></textarea>
            {errors.message && <span style={styles.error}>{errors.message}</span>}
          </div>
          <button type="submit" disabled={isSubmitting} style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
