// stores/useAuthStore.js

import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: async (credentials) => {
    try {
      const res = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();

      if (res.ok) {
        // Extract token and store full user object
        localStorage.setItem('token', data.token);
        set({ user: data, token: data.token, isAuthenticated: true });
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  },

  signup: async ({ name, email, password, confirmPassword, phone, city, province, roles }) => {
    try {
      const formData = {
        name,
        email,
        password,
        confirmPassword,
        phone,
        address: {
          city,
          province,
        },
        roles,
      };

      const res = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Signup failed');

      const data = await res.json(); // Response includes token and user

      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.setItem('token', data.token);

      // Update Zustand state
      set({
        user: data,
        token: data.token,
        isAuthenticated: true,
      });

      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);
      return { success: false, message: error.message };
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null, isAuthenticated: false });
  },
}));

export default useAuthStore;
