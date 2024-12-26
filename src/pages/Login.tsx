import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/common/AuthInput';
import { AuthFormData, ValidationErrors } from '../types/auth';
import { validateAuthForm } from '../utils/validation';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateAuthForm(formData, false);
    
    if (Object.keys(validationErrors).length === 0) {
      const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const user = storedUsers.find((user: AuthFormData) => user.email === formData.email && user.password === formData.password);
      
      if (user) {
        navigate('/');
      } else {
        setErrors({ general: 'Login failed. Please check your email and password.' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to access your account"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          type="email"
          label="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          placeholder="you@example.com"
        />

        <AuthInput
          type="password"
          label="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
          placeholder="••••••••"
        />

        {errors.general && <p className="text-red-500">{errors.general}</p>}

        <button type="submit" className="btn-primary">Sign In</button>
      </form>
      <Link to="/forgot-password" className="text-sm text-blue-500">Forgot your password?</Link>
    </AuthLayout>
  );
}