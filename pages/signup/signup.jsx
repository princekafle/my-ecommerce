'use client';

import React, { useState } from 'react';
import useAuthStore from '@/store/authStore';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const signup = useAuthStore((state) => state.signup);
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    city: '',
    province: '',
    roles: ['USER'], // You can allow multiple role selection
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signup(form);

    if (result.success) {
      router.push('/dashboard');
    } else {
      alert(result.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} />
      <input name="confirmPassword" placeholder="Confirm Password" type="password" value={form.confirmPassword} onChange={handleChange} />
      <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
      <input name="province" placeholder="Province" value={form.province} onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
