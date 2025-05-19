import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inpREF = useRef({});
  const [hold, setHold] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleCLick = () => {
    const form = {};
    Object.keys(inpREF.current).forEach((val) => {
      const values = inpREF.current[val].value;

      form[val] = values;
      inpREF.current[val].value = "";
    });
    if (editIndex !== null) {
      setHold((prev) => prev.map((val, i) => (editIndex === i ? form : val)));

      setEditIndex(null);
    } else {
      setHold((prev) => [...prev, form]);
    }
  };

  useEffect(() => {
    if (editIndex != null) {
      let contain = hold[editIndex];
      Object.keys(inpREF.current).forEach((val) => {
        inpREF.current[val].value = contain[val];
      });
    }
  }, [editIndex]);

  return (
    <div>
      <input
        ref={(e) => (inpREF.current["name"] = e)}
        className="inp"
        type="text"
        placeholder="enter value"
      ></input>
      <input
        ref={(e) => (inpREF.current["id"] = e)}
        className="inp"
        type="text"
        placeholder="enter value"
      ></input>
      <button
        onClick={handleCLick}
        className="bg-red-500 px-7 py-1 rounded-2xl ml-4 font-semibold text-white"
      >
        Submit
      </button>

      <div className="">
        {hold.map((values, i) => {
          return (
            <div key={i} className="flex  gap-4 border w-fit px-5 ml-4 mt-10 ">
              <div>{values.name}</div> |<div>{values.id}</div> |
              <button
                onClick={() => {
                  setEditIndex(i);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
