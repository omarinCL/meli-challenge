import React from "react";

export function useField(initialValue = "") {
  const [value, setValue] = React.useState(initialValue);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return [value, handleOnChange] as [string, typeof handleOnChange];
}
