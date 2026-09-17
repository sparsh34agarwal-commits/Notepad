
const Innput = (props) => {
  return (
    <div className="input flex h-full w-full flex-col items-center gap-8 border-r-4 border-[#fff] py-10">
      <h1 className="text-[#fff] text-5xl font-bold mb-10 mt-5">Notes APP</h1>

      <input
        className="title w-fit px-6 py-3 rounded-2xl text-2xl focus:placeholder-transparent border-2 border-[#fff] text-[#fff] placeholder:text-[#bcbaba]"
        type="text"
        placeholder="Enter Heading"
        value={props.title}
        onChange={(e)=>{
            props.setTitle(e.target.value);
            
        }}
      />

      <textarea
        className="w-fit p-2 px-10 rounded-xl text-xl h-44 text-center resize-none focus:placeholder-transparent border-2 border-[#fff] text-[#fff] placeholder:text-[#bcbaba] placeholder:tracking-wider"
        placeholder="Enter Note"
        value={props.data}
         onChange={(e)=>{
            props.setData(e.target.value);
            
        }}
      ></textarea>

      <button className="bg-amber-50 px-8 py-4 text-black wsxsw rounded-2xl text-2xl transition-transform duration-600 hover:scale-110">
        Add Note
      </button>
    </div>
  );
};

export default Innput;
