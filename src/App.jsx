
import { Suspense } from 'react'
import './App.css'
import Counter_Box from './components/Counter_Box'
import Customer_ticket from './components/Customer_ticket'
import Footer from './components/Footer'
import Navber from './components/Navber'

const fetchLoad = async () => {
  const result = await fetch('/tickets.json');
  return result.json();
}

function App() {
  const fetchPromise = fetchLoad();

  return (
    <>

      <Navber />

      <Counter_Box />

      <Suspense fallback={<div className='flex justify-center'>
      <span className="loading loading-bars loading-xl"></span>
      </div>}>
        <Customer_ticket fetchPromise={fetchPromise} />
      </Suspense>

      <Footer />

    </>
  )
}

export default App
