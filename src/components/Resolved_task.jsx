import Resolved_Card from "./Resolved_Card";



const Resolved_task = ({ resolved }) => {
  // console.log(resolved);


  return (
    <div>
      <div className="pt-10">
        <h1 className="text-2xl text-[#34485A] font-semibold">Resolved Task</h1>
        <p className="text-[#627382] pt-4">Select a ticket to add to Task Status</p>
      </div>


      {
        resolved.map(resolve =>
          <Resolved_Card resolve={resolve} key={resolve.id}></Resolved_Card>

        )
      }

      {/* {
        resolved.map(resolve => console.log(resolve)
        )
      } */}

    </div>
  );
};

export default Resolved_task;