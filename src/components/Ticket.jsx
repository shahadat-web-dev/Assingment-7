import Ticket_Card from "./Ticket_Card";

const Ticket = ({ initialData, ticketSelect, setTicketSelect, inProgress, setInprogress, resolved }) => {
  // Filter out tickets that are already resolved
  const filteredData = initialData.filter(
    (ticket) => !resolved.some((res) => res.id === ticket.id)
  );

  return (
    <div className="grid md:col-span-3 md:grid-cols-2 grid-cols-1 gap-4 ">
      {filteredData.map((data) => (
        <Ticket_Card
          key={data.id}
          setTicketSelect={setTicketSelect}
          ticketSelect={ticketSelect}
          data={data}
          inProgress={inProgress}
          setInprogress={setInprogress}
        />
      ))}
    </div>
  );
};

export default Ticket;
