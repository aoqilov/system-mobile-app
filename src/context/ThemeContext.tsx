import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({ theme: 'light', toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const tgScheme = window.Telegram?.WebApp?.colorScheme
    if (tgScheme === 'light' || tgScheme === 'dark') return tgScheme
    return (localStorage.getItem('theme') as Theme) ?? 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  // Telegram tema o'zgarganda avtomatik sync
  useEffect(() => {
    const tg = window.Telegram?.WebApp
    if (!tg) return
    const handler = () => setTheme(tg.colorScheme)
    tg.onEvent('themeChanged', handler)
    return () => tg.offEvent('themeChanged', handler)
  }, [])

  function toggle() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
