export interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  name?: string;
}