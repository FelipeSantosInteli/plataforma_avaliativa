import { useState } from "react";
import './components_css/Checkbox.css'
const CheckBox = ({label,count,checkFunction}) => {
  const [isChecked, setIsChecked] = useState(false);

  var fieldId = 'checkBox' + count;

  var checkBox = document.getElementById(fieldId);

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div class="flex flex-row items-center ">
      <input class="flex items-center justify-center checkbox" id={fieldId} type={"checkbox"} onClick={!isChecked && checkFunction} onChange={handleCheck} checked={isChecked}></input>
      <label for="checkbox_btn">{label}</label>
    </div>
  );
};
export default CheckBox;

//   para mais variações, acessar: https://blog.logrocket.com/building-custom-checkbox-react/