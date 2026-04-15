import { useState } from "react";

export function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  }

  const handleReset = (evt) => {
    evt.preventDefault();
    setValues(defaultValues);
  };

  return { values, setValues, handleChange, handleReset };
}
