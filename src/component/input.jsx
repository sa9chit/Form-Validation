import { useState } from "react";

export const InputType = ({
  type,
  setState,
  state,
  min,
  max,
  placeholder,
  option,
}) => {
  const [inptVal, setInptValue] = useState();

  return type !== "selection" && type !== "textarea" && type !== "checkbox" ? (
    <input
      className="border px-2 py-1 w-70 mb-2"
      type={type}
      value={
        type === "text"
          ? state.name
          : type === "limitation"
          ? state.limitation
          : state.email
      }
      onChange={(e) => {
        type === "text"
          ? setState((prev) => ({ ...prev, name: e.target.value }))
          : type === "limitation"
          ? setState((prev) => ({ ...prev, limitation: e.target.value }))
          : setState((prev) => ({ ...prev, email: e.target.value }));
      }}
      placeholder={placeholder}
      min={min}
      max={max}
      required
    ></input>
  ) : type === "selection" ? (
    <select
      value={state.country}
      onChange={(e) =>
        setState((prev) => ({ ...prev, country: e.target.value }))
      }
      required
    >
      {option.map((val, i) => {
        return <option key={i + 2}>{val}</option>;
      })}
    </select>
  ) : type === "textarea" ? (
    <textarea
      placeholder={placeholder}
      value={state.feedback}
      onChange={(e) =>
        setState((prev) => ({ ...prev, feedback: e.target.value }))
      }
    ></textarea>
  ) : (
    option.map((val, i) => (
      <div key={i * 34} className="inline-flex">
        <input
          type={type}
          value={state.gender}
          onChange={(e) => {
            setState((prev) => ({ ...prev, gender: e.target.value }));
          }}
        ></input>{" "}
        {val}
      </div>
    ))
  );
};
