import { UpDownArrowIcon } from "@/assets";
import { useState } from "react";

export default function Select({
  title,
  placeholder,
  options,
  value,
  setValue,
  className,
  showDropdown = true,
}) {
  const [visible, setVisible] = useState(false);

  const handleFocus = () => {
    setVisible(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setVisible(false);
    }, 100);
  };
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  const handleSelection = (e) => {
    setValue(e);
  };

  return (
    <div className={"relative " + className}>
      {title && title}
      <div className="relative flex items-center rounded-md border">
        <input
          value={value}
          onChange={handleValueChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          className={`w-full bg-transparent p-2 px-3 text-sm outline-none ${showDropdown && "pr-8"}`}
          placeholder={placeholder}
        />
        {showDropdown && (
          <UpDownArrowIcon className="pointer-events-none absolute right-2 h-5 w-5 text-gray-600" />
        )}
      </div>
      {visible && showDropdown && (
        <div className="absolute top-12 z-10 w-full rounded-md border bg-white p-2">
          {options?.map((e, i) => (
            <button
              className={`z-20 flex w-full text-sm font-light text-${value == e ? "white" : "black"} cursor-pointer rounded-md bg-${value == e ? "orange-600" : "white"} p-2 transition-all hover:brightness-90`}
              onClick={() => handleSelection(e)}
              key={i}
            >
              {e}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
