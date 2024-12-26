import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/common/AuthInput';
import { AuthFormData, ValidationErrors } from '../types/auth';
import { validateAuthForm } from '../utils/validation';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    name: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAuthForm(formData, true);
    
    if (Object.keys(validationErrors).length === 0) {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = storedUsers.some((user: AuthFormData) => user.email === formData.email);
      
      if (userExists) {
        setErrors({ general: 'User already exists. Please use a different email.' });
      } else {
        storedUsers.push(formData);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        navigate('/login');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start your learning journey today"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          type="text"
          label="Full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <AuthInput
          type="email"
          label="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <AuthInput
          type="password"
          label="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.general && <p className="text-red-500">{errors.general}</p>}
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
      <Link to="/login" className="text-sm text-blue-500">Already have an account? Sign in</Link>
    </AuthLayout>
  );
}