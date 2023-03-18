import React from 'react'
import { Hero } from './Hero'

export const HomePage = () => {
  return (
    <div className="h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <Hero></Hero>
    </div>
  )
}
