"use client"

import { useEffect, useState } from 'react'

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula o carregamento da página
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      role="status"
      aria-label="Carregando página"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-primaryds rounded-full animate-spin" />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Carregando...
        </p>
      </div>
    </div>
  )
}
