import React from "react";

import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full bg-white border border-gray-300">
        <thead className="bg-slate-800 text-gray-100 font-bold">
          <tr>
            <th className="w-10 px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              No
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Age
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Status
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Job
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              <td className="px-4 py-2 text-nor text-gray-700 border-r last:border-r-0">
                {row.No}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.Name}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.Age}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.Status}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.Job}
              </td>
              <td className="px-4 py-3 text-xl text-gray-700 flex space-x-3">
                <FaEye className="text-blue-500 cursor-pointer hover:bg-gray-300 rounded" />
                <MdEdit className="text-yellow-500 cursor-pointer hover:bg-gray-300 rounded" />
                <MdDelete className="text-red-500 cursor-pointer hover:bg-gray-300 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// opsi pertama mapping data di table body
{
  /* {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0"
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))} */
}
