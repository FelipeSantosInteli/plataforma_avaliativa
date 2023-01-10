import { useState } from "react";
import './components_css/Checkbox.css'
const Checkbox = ({ label }) => {
  // const [isChecked, setIsChecked] = useState(false);
  return (
    <div class="flex flex-row items-center ">
      <input class="flex items-center justify-center checkbox" id="checkbox_btn" type={"checkbox"}></input>
      <label for="checkbox_btn">{label}</label>
    </div>
  );
};
export default Checkbox;

//   para mais variações, acessar: https://blog.logrocket.com/building-custom-checkbox-react/