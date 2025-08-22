import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = async (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    if (e.target.name == "password") {
      setPassword(e.target.value)
    }
  };

  const handleSubmit = async (e) => { };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-14">
      <p className="m-4 text-center text-lg text-gray-500">
        Don't Have An Account?
        <Link href={"/signup"} className="mx-1 font-semibold text-red-500 hover:text-red-400">Signup</Link>
      </p>

      <div className="text-center text-2xl font-bold">
        Login To Your Account
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label for="email" className="block font-medium text-gray-900">Email address</label>
            <div className="mt-2">
              <input value={email} onChange={handleChange} type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-500 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block font-medium text-gray-900">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-red-500 hover:text-red-400">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input value={password} onChange={handleChange} type="password" name="password" id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-red-500 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <button type="submit" disabled={!(email && password)} className="flex w-full justify-center rounded-md disabled:bg-red-200 bg-red-500 px-3 py-1.5 font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;