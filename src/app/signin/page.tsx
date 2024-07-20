"use client";

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { pic4 } from "../../../public/image";
import Image from 'next/image';
import React from 'react';



const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    const result = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    });

    if (result?.ok) {
      router.push('/');
    } else {
      setError('Failed to sign in. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex items-center  justify-center min-h-screen relative bg-gray-100">
      <div className="bg-black/60 opactiy-80 absolute h-full w-full"></div>
      <Image className="w-full h-screen " src={pic4} alt="pic" />
      <div className="bg-white absolute p-8 rounded shadow-md w-full max-md:w-3/4 max-w-md">
        <h1 className="text-2xl max-md:text-xl text-center font-bold mb-6">Sign in ot your account</h1>
        {error && (
          <div className="bg-red-500 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              value={credentials.email}
              onChange={handleChange}
              className="shadow  appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="•••••••••"
              value={credentials.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex justify-between items-center max-md:text-xs mb-4">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox"  className="w-5 h-5   rounded bg-gray-400  "required  />
              <label  className="md:ms-2   font-bold text-gray-400 ">Remember me</label>
            </div>
            <h1 className="text-blue-600 font-bold"> Forgot password?</h1>            
          </div>
          <div className="flex flex-col gap-2 items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-lg focus:outline-none focus:shadow-outline"
            >
              Sign In to your account
            </button>
            <button
              type="button"
              onClick={() => signIn('google', { callbackUrl: '/' })}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 w-full rounded-lg focus:outline-none focus:shadow-outline"
            >
              Sign In with Google
            </button>
            <button
              type="button"              
              className="  text-blue-600 hover:text-blue-400 font-bold py-2 px-4 w-full   focus:shadow-outline"
            >
              Don't have an account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
