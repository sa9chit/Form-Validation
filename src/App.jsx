import "./App.css";
import { InputType } from "./component/input";
import { Btn } from "./component/btn";
import { FormDriven } from "./component/data";
import { useState } from "react";
const App = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    gender: "",
    country: "",
    limitation: "",
    feedback: "",
  });
  console.log(state);
  return (
    <div>
      {FormDriven.map((val, i) => {
        return (
          <div key={i + val.max * val.min}>
            <InputType
              setState={setState}
              state={state}
              type={val.type}
              min={val.min}
              max={val.max}
              placeholder={val.placeholder}
              option={val.value}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
