import { EyeHideIcon, EyeIcon } from "@/assets";
import { useState } from "react";

export default function Input({
  value,
  setValue,
  width,
  className,
  clearButton = false,
  type,
  ...other
}) {
  const [show, setShow] = useState(false);

  const handleClear = () => {
    setValue("");
  };
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div
      className={`w-${width ? width : "full"} flex items-center rounded-md bg-gray-200 ${className}`}
    >
      <input
        className="w-full rounded-sm bg-transparent px-4 py-3 outline-none"
        value={value}
        onChange={handleValueChange}
        type={type == "password" ? (show ? "text" : "password") : type}
        {...other}
      />
      {type == "password" && (
        <button
          onClick={handleChangeShow}
          className="mr-2 rounded-sm p-1 transition-all hover:bg-gray-100 active:translate-y-1"
        >
          {show ? (
            <EyeHideIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <EyeIcon className="h-5 w-5 text-gray-500" />
          )}
        </button>
      )}
      {clearButton && (
        <button
          onClick={handleClear}
          className="mr-2 h-full rounded-full bg-gray-100 p-2 transition-all hover:bg-gray-200 active:translate-y-1"
        >
          <svg
            width="1.1rem"
            height="1.1rem"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
}
