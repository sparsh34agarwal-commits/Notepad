
const Notes = (props) => {
  return (
    <div className="notes h-full min-h-0 w-full overflow-y-auto scrollbar-hide px-10 py-6 flex flex-wrap content-start gap-x-9 gap-y-10">
          
          {props.Final.map((item, idx) => {
            return (
              <div key={idx} className="card h-[190px] w-[200px] bg-[#fff] rounded-2xl p-4 flex flex-col items-center gap-2 transition-transform duration-900 hover:scale-110 relative">
                <h1 className='text-xl font-bold'>{item.title}</h1>
                <div className="absolute relative left-16 bottom-10">
                  <select
                    value=""
                    onChange={(e) => {
                      if (e.target.value === "delete") {
                        props.del(idx);
                      }
                    }}
                    className="appearance-none px-2 pl-4 rounded-full border-none outline-none focus:border-none focus:outline-none focus:ring-0 cursor-pointer"
                  >
                    <option value="" disabled hidden></option>
                    <option value="delete">Delete</option>
                  </select>
                  <img
                    src="https://static.thenounproject.com/png/1919185-200.png"
                    alt=""
                    className="pointer-events-none absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 object-contain"
                  />
                </div>
                <hr className='w-[100%]'/>
                <p className='overflow-x-auto scrollbar-hide text-gray-600'>{item.data}</p>
              </div>
            );
          })}
           
      </div>
  )
}

export default Notes