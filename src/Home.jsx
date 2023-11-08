import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to="/about">Klik About</Link>
        <Link to = "https://www.youtube.com/watch?v=fZxZswmC_BY&list=PLA8ZIAm2I03hS41Fy4vFpRw8AdYNBXmNm"> Youtube</Link>
        <Link to="/contact">Contact</Link>
        <Link to ="/conditional"> Condtional</Link>
    </div>
  )
}

export default Home