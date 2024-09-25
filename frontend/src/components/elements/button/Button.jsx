// menggunakan (Props) / properties
// didefinsikan sebagai sebuah varameter funtion
const Button = (props) => {
  // konsep desctrukturing
  const {
    children,
    className = "bg-black text-white",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      // className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-black`}
      // konsep desctrukturing
      className={`h-7 px-4 text-sm rounded-md ${className}`}
      type={type}
      // event handler
      onClick={onClick}
    >
      {/* {props.text} */}

      {/* konsep desctrukturing */}
      {children}

      {/* props spesial yaitu (children) */}
      {/* sebuah komponen yang bisa menangkap apa yang ada di dalam tag componen tersbut */}
      {/* {props.children} */}
    </button>
  );
};

export default Button;
