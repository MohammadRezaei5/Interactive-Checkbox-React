import { useState } from "react";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="checkboc-wrapper">
      <label htmlFor="">
        <input
          type="checkbox"
          name=""
          id=""
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <span>{label}</span>
      </label>
      <p>{isChecked ? "انتخاب شد" : "انتخاب نشد!"}</p>
    </div>
  );
};

export default Checkbox;
