import Status_Card from "./Status_Card";


const Task_status = ({ ticketSelect}) => {
  return (
    <div>

      <div>
        <h1 className="text-2xl text-[#34485A] font-semibold">Task Status</h1>
        <p className="text-[#627382] pt-4">Select a ticket to add to Task Status</p>
      </div>
          
       <div>
        {
           ticketSelect.map(eachTicket => <Status_Card eachTicket={eachTicket}></Status_Card>)
        }
       </div>

    </div>



  );
};

export default Task_status;