import { use } from "react";
import Ticket from "./Ticket";
import Task_status from "./Task_status";
import Resolved_task from "./Resolved_task";


const Customer_ticket = ({ fetchPromise, setTicketSelect,ticketSelect ,setResolved, resolved , resolveCount,setResolveCount ,inProgress, setInprogress }) => {
  const initialData = use(fetchPromise);
  // console.log(initialData);


  return (
    <div className=" bg-[#F5F5F5] pb-20">
      <h1 className="container mx-auto pb-4 text-2xl font-semibold text-[#34485A] p-3">Customer Tickets</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-3">

        {/* Ticket */}

        <Ticket resolved={resolved} initialData={initialData} ticketSelect={ticketSelect} setTicketSelect={setTicketSelect} inProgress={inProgress} setInprogress={setInprogress}></Ticket>

        {/* status */}
        <div className="grid col-span-1">
          <div>
            <Task_status resolved={resolved} setResolved={setResolved} ticketSelect={ticketSelect} setTicketSelect={setTicketSelect}  resolveCount={resolveCount} setResolveCount={setResolveCount}  inProgress={inProgress} setInprogress={setInprogress}
             />

            <Resolved_task  resolved={resolved}  />

          </div>
        </div>

      </div>
    </div>
  );
};

export default Customer_ticket;