'use client'
import Image from 'next/image';
import { lusitana } from "@/app/ui/fonts";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
    // Fix the router!!!!!!!!!!!!!!!!!!!!!!!!!!
    const router = useRouter();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        router.push('/accounts');
    }

  return (
      <div className="h-screen flex flex-col">

        {/* Middle Section: Two Column Layout */}
        <div className={`${lusitana.className} flex justify-center items-center h-screen bg-green-150 `}>
        {/* Left Column: Image */}
        <div className="w-1/2 h-screen hidden lg:flex justify-center items-center">
          <Image
              src="/icons/favicon_io/android-chrome-512x512.png"
              width={512}
              height={512}
              alt="Wealth.ax logo"
              className="object-contain" // Ensure image maintains its aspect ratio
          />
        </div>

        {/* Right Column: Login Form */}
        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2 bg-green-150">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <form onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">Username</label>
              <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900"
                  autoComplete="off"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800">Password</label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-green-900"
                  autoComplete="off"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="remember" name="remember" className="text-red-500" />
              <label htmlFor="remember" className="text-green-1000 ml-2">Remember Me</label>
            </div>

            {/* Forgot Password Link */}
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button type="submit" className="
            bg-green-600
            border-2 border-transparent hover:border-green-900 focus:bg-green-500 focus:border-green-900
            text-white tracking-wider font-bold rounded-md
            py-2 px-4 w-full
            transition-colors
            ease-in
            duration-300">
              Login
            </button>
          </form>

          {/* Sign up Link */}
          <div className="mt-6 text-black text-center">
            <a href="#" className="hover:underline">Sign up Here</a>
          </div>
        </div>
      </div>
      </div>
  );
}
