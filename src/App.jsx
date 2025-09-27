
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
  const [resolved, setResolved] = useState([]);
  const [resolveCount ,setResolveCount] = useState(0);
  const [inProgress, setInprogress] = useState(0);

  // console.log(resolved);


  return (
    <>

      <Navber />
      <main className='min-h-screen'>
        <Counter_Box resolveCount={resolveCount }  ticketSelect={ticketSelect}  inProgress={inProgress} />

        <Suspense fallback={<div className='flex justify-center'>
          <span className="loading loading-bars loading-xl"></span>
        </div>}>
          <Customer_ticket resolved={resolved} setResolved={setResolved}  ticketSelect={ticketSelect} fetchPromise={fetchPromise}   setTicketSelect={setTicketSelect} resolveCount={resolveCount }  setResolveCount={setResolveCount}  inProgress={inProgress} setInprogress={setInprogress}  />
        </Suspense>
      </main>
      <Footer />

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
