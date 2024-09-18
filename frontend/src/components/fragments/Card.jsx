import React from "react";
// import { Link } from "react-router-dom";
import Button from "../elements/button/Button";

const Card = (props) => {
  // destructuring
  const { children } = props;

  return (
    <>
      <div className="w-full  max-w-xs bg-gray-200 border border-gray-300 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
        {children}
      </div>
    </>
  );
};

const Header = (props) => {
  // destructuring
  const { name } = props;

  return (
    <h5 className="text-xl font-semibold tracking-tight text-black text-center p-3">
      {name}
    </h5>
  );
};

const Body = (props) => {
  // destructuring
  const { children, deskripsi } = props;

  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-normal tracking-tight text-black">
          {deskripsi}
        </h5>
        <p className="text-sm text-black">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  // destrukturing
  const {} = props;

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <Button className="bg-blue-600">Detail</Button>
    </div>
  );
};

// pemanggilan komponen untuk props children
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
