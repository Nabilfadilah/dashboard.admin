// import { forwardRef } from "react";

// const Input = forwardRef((props, ref) => {
//   const { type, placeholder, name, className = "w-80" } = props; // Set default class w-80

//   return (
//     <input
//       type={type}
//       className={`text-sm border border-gray-400 rounded py-2 px-2 text-slate-700 placeholder:opacity-50 ${className}`} // Tambahkan className dari props
//       placeholder={placeholder}
//       name={name}
//       id={name}
//       ref={ref}
//     />
//   );
// });

// export default Input;

import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const {
    type,
    placeholder,
    name,
    error, // Properti error untuk kondisi border
    onChange,
    onBlur,
    value,
    className = "w-80", // Kelas bawaan yang dapat diubah
  } = props;

  return (
    <input
      type={type}
      className={`text-sm border rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-50 ${className} ${
        error ? "border-red-500" : "border-gray-300"
      }`} // Kondisi error untuk mengubah border
      placeholder={placeholder}
      name={name}
      id={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
});

export default Input;
