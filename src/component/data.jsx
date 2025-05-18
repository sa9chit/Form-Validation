export let FormDriven = [
  {
    type: "text",
    required: "required",
    max: 30,
    min: 10,
    placeholder: "enter your Name",
  },
  {
    type: "email",
    required: "required",
    placeholder: "enter your email",
  },
  {
    type: "checkbox",
    value: ["male", "female"],
    required: "required",
  },
  {
    type: "selection",

    value: ["india", "pakistan", "amrika"],
  },
  {
    type: "number",
    min: 10,
    placeholder: "enter limitation",
    max: 100,
    required: "required",
  },
  {
    type: "textarea",
    required: "required",
    placeholder: "optional",
  },
];
