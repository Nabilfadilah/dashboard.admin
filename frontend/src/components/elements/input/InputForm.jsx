// import { forwardRef } from "react";
// import Input from "./Input";
// import Label from "./Label";

// const InputForm = forwardRef((props, ref) => {
//   const { label, name, type, placeholder, className } = props; // Ambil className dari props

//   return (
//     <div className="mb-3">
//       <Label htmlFor={name}>{label}</Label>
//       <Input
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         ref={ref}
//         className={className} // Gunakan className yang diterima dari props
//       />
//     </div>
//   );
// });

// export default InputForm;

// opsi 2
// import { forwardRef } from "react";
// import Input from "./Input";
// import Label from "./Label";

// const InputForm = forwardRef((props, ref) => {
//   const {
//     label,
//     name,
//     type,
//     placeholder,
//     className,
//     onChange,
//     onBlur,
//     value,
//     error,
//   } = props;

//   return (
//     <div className="mb-2">
//       {" "}
//       {/* Mengatur jarak vertikal */}
//       <Label htmlFor={name}>{label}</Label>
//       <Input
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         ref={ref}
//         className={`${className} ${
//           error ? "border-red-500" : "border-gray-300"
//         }`} // Tambahkan kondisi border merah
//         onChange={onChange}
//         onBlur={onBlur}
//         value={value}
//       />
//     </div>
//   );
// });

// export default InputForm;

// opsi 3
import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const {
    label,
    name,
    type,
    placeholder,
    className,
    onChange,
    onBlur,
    value,
    error,
  } = props;

  return (
    <div className="mb-3 w-full">
      {" "}
      {/* Tambahkan w-full */}
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={`w-full ${className}`} // Pastikan w-full ditambahkan
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error}
      />
    </div>
  );
});

export default InputForm;
