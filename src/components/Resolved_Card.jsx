

const Resolved_Card = ({resolve}) => {
  return (
    <div>


      <div className="bg-white p-4 mt-8 shadow-md rounded-sm">
            <div className="bg-[#F0FCF3] p-2 border border-green-300 rounded-lg">
              <h2 className="text-lg font-medium">{resolve.title}</h2>
              <h3 className="pt-1 text-green-600">✅ Completed</h3>
            </div>
          </div>
      
    </div>
  );
};

export default Resolved_Card;