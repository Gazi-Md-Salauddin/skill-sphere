import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-purple-500 text-3xl font-bold">404</h1>
      <h2 className="text-3xl font-bold">Page Not Found</h2>
      
      <Link href="/" className="btn bg-purple-500 text-white">Go Back Home</Link>
    </div>
  )
}

export default NotFound