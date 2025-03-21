import React from 'react'
import { useTheme } from '@/context/ThemeProvider'

const Home = () => {
  const  {mode } = useTheme();
  return (
    <div>
      Home
      {mode}
    </div>
  )
}

export default Home
