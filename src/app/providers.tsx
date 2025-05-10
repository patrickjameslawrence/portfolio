'use client'

import { usePathname } from 'next/navigation'
import { createContext, useContext, useEffect, useRef, useState } from 'react'

function usePrevious<T>(value: T) {
  const ref = useRef<T>(undefined)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const ThemeContext = createContext<{
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}>({
  theme: 'light',
  setTheme: () => {}
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    return 'light' // Default to light mode for SSR
  })

  useEffect(() => {
    const html = document.querySelector('html')
    if (theme === 'light') {
      html?.classList.add('light')
      html?.classList.remove('dark')
    } else {
      html?.classList.add('dark')
      html?.classList.remove('light')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeWatcher() {
  const { setTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')

    function onMediaChange() {
      const systemTheme = media.matches ? 'dark' : 'light'
      setTheme(systemTheme)
    }

    onMediaChange()
    media.addEventListener('change', onMediaChange)

    return () => {
      media.removeEventListener('change', onMediaChange)
    }
  }, [setTheme])

  return null
}

export const AppContext = createContext<{ previousPathname?: string }>({})

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const previousPathname = usePrevious(pathname)

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              document.documentElement.classList.add(theme);
            })();
          `
        }}
      />
      <AppContext.Provider value={{ previousPathname }}>
        <ThemeProvider>
          <ThemeWatcher />
          {children}
        </ThemeProvider>
      </AppContext.Provider>
    </>
  )
}
