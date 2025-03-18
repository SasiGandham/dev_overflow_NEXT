import React from 'react'

// this children means all the pages in that route group
const layout = ({ children } : { children : React.ReactNode }) => {
  return (
    <main className='flex justify-center items-center min-h-screen w-full'>
      {children}
    </main>
  )
}

export default layout
