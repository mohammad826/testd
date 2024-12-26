import { AuthFormData, ValidationErrors } from '../types/auth';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validateAuthForm = (data: AuthFormData, isRegister: boolean): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.password || !validatePassword(data.password)) {
    errors.password = 'Password must be at least 8 characters long';
  }

  if (isRegister && !data.name) {
    errors.name = 'Name is required';
  }

  return errors;
};