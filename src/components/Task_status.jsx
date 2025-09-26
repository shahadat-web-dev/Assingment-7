

const Task_status = () => {
  return (
    <div>

      <div>
        <h1 className="text-2xl text-[#34485A] font-semibold">Task Status</h1>
        <p className="text-[#627382] pt-4">Select a ticket to add to Task Status</p>
      </div>

      <div className="bg-white p-4 mt-8 shadow-md rounded-sm">
        <h2 className="text-lg font-medium">Payment Failed - Card Declined</h2>
        <div className="flex justify-center pt-4">
          <button className="bg-[#02A53B] w-full py-2 font-semibold rounded-sm text-white">Complete</button>
        </div>
      </div>

    </div>



  );
};

export default Task_status;