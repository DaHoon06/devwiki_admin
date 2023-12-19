import {useState} from "react";

export const useCheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return {
    isChecked,
    onChange: () => setIsChecked(!isChecked)
  }
}