import { Nav } from '@/components/nav'
import React from 'react'

const Admin = () => {
  const theme: 'dark' | 'light' = 'dark';
  return (
    <> 
     <Nav  theme={theme}/>
    page Admin
    </>
  )
}

export default Admin