import { useState } from "react";

const Dropdown = ({ onSelect, selectedStatus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (status) => {
    onSelect(status); // Memanggil fungsi dari parent untuk set status
    setIsOpen(false); // Menutup dropdown setelah memilih
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-48 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedStatus} {/* Menampilkan status yang dipilih */}
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
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg"
          role="menu"
          aria-orientation="vertical"
        >
          <button
            onClick={() => handleSelect("Semua")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Semua
          </button>
          <button
            onClick={() => handleSelect("Lunas")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Lunas
          </button>
          <button
            onClick={() => handleSelect("Belum Lunas")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Belum Lunas
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
