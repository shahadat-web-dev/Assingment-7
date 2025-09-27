import { toast } from "react-toastify";


const Ticket_Card = ({ data,  ticketSelect, setTicketSelect, inProgress, setInprogress }) => {
  // console.log(data);
  
  const handleClicked = () => {
    toast('✅  In Progress!')
    setTicketSelect([...ticketSelect, data]);
    setInprogress(inProgress += 1)
  }

  return (
    <div onClick={() => handleClicked()}>

      <div key={data.id} className="shadow-md rounded-md cursor-pointer bg-white p-4">

        <div>

          <div className="flex items-center justify-between">
            <h2 className="textarea-lg font-medium">{data.title}</h2>

            <span className={`font-semibold py-1 px-2 rounded-2xl ${data.status === 'Open' ? "bg-[#B9F8CF] text-[#02A53B] " : data.status === 'In Progress' ? "bg-[#F8F3B9] text-yellow-500 " : ''} `}>

              <i class="fa-solid fa-circle"></i> {data.status}</span>
          </div>

          <p className="mt-3">{data.description}</p>

          <div className="flex  items-center justify-between mt-4">
            <div className="flex items-center gap-4">
              <h2>#{data.id}</h2>
              <p className={`${data.priority === 'High' ? "text-red-500" : data.priority == 'Medium' ? "text-[#F3BF0C]" : "text-green-600"}`}>{data.priority}</p>
            </div>

            <div className="flex items-center gap-5">
              <h3>{data.customer}</h3>
              <p><i class="fa-regular fa-calendar-days"></i> {data.createdAt}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Ticket_Card;