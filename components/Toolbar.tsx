'use client';
import useUserSession from '@/hooks/useUserSession';
import { signInWithGoogle, signOut } from '@/lib/auth.js';
import Image from 'next/image';

export default function Toolbar({ initialUser }) {
  const user = useUserSession(initialUser);

  const handleSignOut = (event) => {
    event.preventDefault();
    signOut();
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    await signInWithGoogle();
    window.location.reload();
  };

  return (
    <header className='sticky top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0 font-bold text-lg'>
          serverApp & Next.js SSR
          </div>


          <div className='flex items-center'>
            {user ? (
              <div className='flex items-center space-x-4'>
                {user.photoURL && (
                  <div className='h-8 w-8 rounded-full overflow-hidden'>
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      width={32}
                      height={32}
                      className='h-full w-full object-cover'
                    />
                  </div>
                )}
                <div className='hidden md:flex flex-col text-sm'>
                  <span className='font-medium text-gray-900 dark:text-gray-100'>
                    {user.displayName}
                  </span>
                  {user.email && (
                    <span className='text-gray-500 dark:text-gray-400 text-xs'>
                      {user.email}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleSignOut}
                  className='ml-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors'
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignIn}
                className='px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors'
              >
                Sign In with Google
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
