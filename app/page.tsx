export default function Home() {
  return (
    <main className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black dark:bg-gray-900 dark:text-white'>
      <h2 className='text-2xl font-bold text-center sm:text-left mb-4'>
        Firebase serverApp & Next.js SSR
      </h2>
      <div className='text-lg text-gray-600 text-center sm:text-left dark:text-gray-400'>
        <ol className='list-decimal list-inside space-y-2 text-left'>
          <li>Sign in using Google</li>
          <li>
            Refresh the page to initialize serverApp and
            trigger error.
          </li>
        </ol>
      </div>
    </main>
  );
}
