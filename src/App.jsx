import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar  from './componends/Navbar'
import Hero  from './componends/Hero'
import Highlights from './componends/Highlights'
import Model from './componends/Model'
import Features from './componends/Features'
import HowItWorks from './componends/HowItWorks'
import Footer from './componends/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-black'>
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
<Features/>
<HowItWorks/>
<Footer/>
      </main>
       
    
    </>
  )
}

export default App
