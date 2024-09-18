import React from "react";
// import { Link } from "react-router-dom";
import Button from "../elements/button/Button";

const CardTable = (props) => {
  // destructuring
  const { children } = props;

  return (
    <>
      <div className="w-full max-w-full bg-gray-200 border border-gray-300 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
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
        <p className="text-sm font-semibold tracking-tight text-black text-center">
          {deskripsi}
        </p>
        <p className="text-sm text-black">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { tableData } = props;

  // Cek apakah tableData ada dan isinya
  console.log(tableData);

  return (
    <div className="px-5 pb-5">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Column 1
            </th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Column 2
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData && tableData.length > 0 ? (
            tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-sm text-gray-700">{row.col1}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{row.col2}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="px-4 py-2 text-sm text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// pemanggilan komponen untuk props children
CardTable.Header = Header;
CardTable.Body = Body;
CardTable.Footer = Footer;

export default CardTable;
