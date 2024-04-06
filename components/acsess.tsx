'use client'
import React, { useState } from 'react';
import Join from '@/app/join';
import { toast } from "react-hot-toast";
import { Button } from './ui/button';

const Acsess = () => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAccessSubmit = (event : any) => {
    event.preventDefault();
    // Check if access code is correct (replace 'Chatgpt' with your desired access code)
    if (accessCode === 'DevBen') {
      setAccessGranted(true) // Grant access
      toast.success("access granted")
    } else {
      toast.error('Incorrect access code. Please try again.'); // Deny access
    }
  };

  const handleAccessChange = (event : any) => {
    setAccessCode(event.target.value);
  };

  return (
    <div>
      {!accessGranted ? (
        <div className='flex flex-col justify-center items-center h-screen bg-slate-950 text-white gap-2'>
          <h1 className='text-2xl font-extrabold'>Welcome to My Portfolio</h1>
          {/* <span>Not: new design coming </span> */}
          <form onSubmit={handleAccessSubmit} className='flex flex-col gap-2'>
            <label htmlFor="access-code">Enter Access Code: &rsquo;DevBen&rsquo; to continue</label>
            <input 
              type="password" 
              id="access-code" 
              value={accessCode} 
              onChange={handleAccessChange} 
              required 
              className='w-full rounded-md h-12 outline-none'
            />
            <Button type="submit">Submit</Button>
          </form>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <Join />
      )}
    </div>
  );
};

export default Acsess;
