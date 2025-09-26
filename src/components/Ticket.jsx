import Ticket_Card from "./Ticket_Card";



const Ticket = ({initialData, ticketSelect, setTicketSelect}) =>{
 

  
  return (
          
  

    <div className="grid md:col-span-3 md:grid-cols-2 grid-cols-1 gap-4 ">

          {

            initialData.map(data => (<Ticket_Card setTicketSelect={setTicketSelect} ticketSelect={ticketSelect} data={data}></Ticket_Card>))
            

            
          }
        </div>
  );
};

export default Ticket;