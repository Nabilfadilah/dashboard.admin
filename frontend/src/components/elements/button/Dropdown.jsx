import { useState } from "react";
import Button from "./Button";

const Dropdown = ({
  onSelect,
  selectedOption,
  options = [],
  placeholder = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (status) => {
    onSelect(status); // Memanggil fungsi dari parent untuk set status
    setIsOpen(false); // Menutup dropdown setelah memilih
  };

  return (
    // "relative inline-block w-48"
    <div className={`relative inline-block text-left ${className}`}>
      {/* Button untuk membuka dropdown */}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        {selectedOption || placeholder}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute left-0 z-20 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg"
          role="menu"
          aria-orientation="vertical"
        >
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleSelect(option)}
              className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            >
              {option}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

{
  /* Opsi dropdown
<Button
  onClick={() => handleSelect("Semua")}
  className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
>
  Semua
</Button>
<Button
  onClick={() => handleSelect("Lunas")}
  className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
>
  Lunas
</Button>
<Button
  onClick={() => handleSelect("Belum Lunas")}
  className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
>
  Belum Lunas
</Button> */
}
