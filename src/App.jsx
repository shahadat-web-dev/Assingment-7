
import { Suspense, useState, } from 'react'
import './App.css'
import Counter_Box from './components/Counter_Box'
import Customer_ticket from './components/Customer_ticket'
import Footer from './components/Footer'
import Navber from './components/Navber'
 import { ToastContainer } from 'react-toastify';
const fetchLoad = async () => {
  const result = await fetch('/tickets.json');
  return result.json();
}



function App() {
  const fetchPromise = fetchLoad();

  const [ticketSelect, setTicketSelect] = useState([]);
  // console.log(ticketSelect);
  
  

  return (
    <>

      <Navber />

      <Counter_Box ticketSelect={ticketSelect} />

      <Suspense fallback={<div className='flex justify-center'>
      <span className="loading loading-bars loading-xl"></span>
      </div>}>
        <Customer_ticket ticketSelect={ticketSelect} fetchPromise={fetchPromise} setTicketSelect={setTicketSelect} />
      </Suspense>

      <Footer />
  <ToastContainer></ToastContainer>
    </>
  )
}

export default App
