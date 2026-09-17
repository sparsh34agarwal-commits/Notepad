import { useState } from "react";
import Innput from "./components/Innput";
import Notes from "./components/Notes";
import TopRight from "./components/TopRight";

const App = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [Final, setFinal] = useState([]);

  const formhandle = (e) => {
    e.preventDefault();
    const tempFinal=[...Final];
    tempFinal.push({title,data});
    setFinal(tempFinal);
    console.log(tempFinal);
    
    setData("");
    setTitle("");
  }

  const delNote = (idx) => {
    setFinal((prevFinal) => prevFinal.filter((_, index) => index !== idx));
  };
  return (
    <div className="flex min-h-screen w-screen flex-col bg-black md:flex-row">

      <form
        onSubmit={(e) => {
          formhandle(e);
        }}
        className="left min-h-screen w-full md:h-screen md:w-1/2"
      >
        <Innput title={title} data={data} setTitle={setTitle} setData={setData}/>
      </form>
      <div className="right flex min-h-screen w-full flex-col md:h-screen md:w-1/2">
        <div className="h-1/5 shrink-0 flex justify-center items-center">
          <TopRight />
        </div>
        <div className="min-h-0 h-4/5">
          <Notes Final={Final} del={delNote} />
        </div>
      </div>
    </div>
  );
};

export default App;
