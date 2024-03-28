/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Footer from './components/Footer/Footer'
import Header1 from './components/Header/Header1'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/Button/ThemeBtn'
import Card from './components/Card/Card'
function Layout() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <Header1/>
    <Outlet/>
    <Footer/>    
    </ThemeProvider>
  )
}

export default Layout
