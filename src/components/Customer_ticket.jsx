import { use } from "react";


const Customer_ticket = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  // console.log(initialData);


  return (
    <div className=" bg-[#F5F5F5] pb-20">
      <h1 className="container mx-auto pb-4 text-2xl font-semibold text-[#34485A]">Customer Tickets</h1>
      <div className="container mx-auto grid grid-cols-4 gap-8">
          {/* Ticket */}
          
        <div className="grid col-span-3 grid-cols-2 gap-4 ">
          
          {
            initialData.map(data => {
              console.log(data);
                
              return (<div className="shadow-md rounded-md cursor-pointer bg-white p-4">

                <div>

                  <div className="flex items-center justify-between">
                    <h2 className="textarea-lg font-medium">{data.title}</h2>
                    <span className={`bg-[${data.status === 'Opne'? "bg-[#0B5E06]" : "bg-yellow-400" }] text-[#0B5E06] font-semibold py-1 px-2 rounded-2xl`}><i class="fa-solid fa-circle text-[#02A53B]"></i> {data.status}</span>
                  </div>

                  <p className="mt-3">{data.description}</p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <h2>{data.id}</h2>
                      <p>{data.priority}</p>
                    </div>

                    <div className="flex items-center gap-5">
                      <h3>{data.customer}</h3>
                      <p>{data.createdAt}</p>
                    </div>
                  </div>

                </div>

              </div>
              )
            })
          }
        </div>
           
           {/* status */}
        <div>
          <div>
            <h1 className="text-2xl text-[#34485A] font-semibold">Task Status</h1>
            <p className="text-[#627382] pt-4">Select a ticket to add to Task Status</p>
          </div>
          <div className="pt-10">
            <h1 className="text-2xl text-[#34485A] font-semibold">Task Status</h1>
            <p className="text-[#627382] pt-4">Select a ticket to add to Task Status</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Customer_ticket;