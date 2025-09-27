import { toast } from "react-toastify";

const Status_Card = ({
  eachTicket,
  resolved,
  setResolved,
  resolveCount,
  setResolveCount,
  inProgress,
  setInprogress,

}) => {
  const btnClick = () => {
    toast("✅  Completed");

    // Update resolved list
    setResolved([...resolved, eachTicket]);

    // Update counters
    setResolveCount(resolveCount + 1);
    


    if(inProgress !== 0){
      setInprogress(inProgress - 1);
    }

    
    
  };

  return (
    <div>
      <div className="bg-white p-4 mt-8 shadow-md rounded-sm">
        <div className="bg-[#F3F3F5] p-1 pb-3 border border-gray-200 px-2 rounded-xl">
          <h2 className="text-lg font-medium">{eachTicket.title}</h2>
          <div className="flex justify-center pt-2">
            <button
              onClick={btnClick}
              className="bg-[#02A53B] cursor-pointer w-full py-2 font-semibold rounded-sm text-white"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status_Card;
