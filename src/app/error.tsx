'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-7xl font-bold tracking-wider text-gray-300">Something went wrong!</p>
        <p className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-wider text-gray-500 mt-4">{error.message}</p>
        <a onClick={() => reset()}>
          <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">Try again</p>
        </a>
      </div>
    </div>
  )
}
