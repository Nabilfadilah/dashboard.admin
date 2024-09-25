import React from "react";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TablePemesanan = ({ data, onDelete, onEdit }) => {
  // Pastikan semua hooks dipanggil secara konsisten
  const handleEditClick = (id) => {
    console.log("Edit clicked for id:", id); // Tambahkan log ini untuk debug
    onEdit(id); // Memanggil fungsi edit dari props
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full bg-white border border-gray-300">
        <thead className="bg-slate-800 text-gray-100 font-bold">
          <tr>
            <th className="w-10 px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              No
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Nama Barang
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Tgl Pemesanan
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Tgl Pemesanan
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              No Telepon
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Harga Satuan
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Jumlah Barang
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Status Pesanan
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Jumlah Bayar
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Sisa Bayar
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Total Bayar
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Tgl Pelunasan
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-gray-500 uppercase tracking-wider border-b">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className="border-b">
              <td className="px-4 py-2 text-nor text-gray-700 border-r last:border-r-0">
                {index + 1}
                {"."}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.namaBarang}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.tglPemesanan}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.namaPemesan}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.noTelepon}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.hargaSatuan}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.jumlahBarang}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.statusPesanan}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.jumlahBayar}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.sisaBayar}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.totalBayar}
              </td>
              <td className="px-4 py-2 text-sm text-gray-700 border-r last:border-r-0">
                {row.tglPelunasan}
              </td>
              <td className="px-4 py-3 text-xl text-gray-700 flex space-x-3">
                <MdEdit
                  className="text-yellow-500 cursor-pointer hover:bg-gray-300 rounded"
                  onClick={() => handleEditClick(row.id)}
                />
                {/* Panggil handleDelete dengan id item saat ikon diklik */}
                <MdDelete
                  className="text-red-500 cursor-pointer hover:bg-gray-300 rounded"
                  onClick={() => onDelete(row.id)}
                />
                {/* <FaEye className="text-blue-500 cursor-pointer hover:bg-gray-300 rounded" /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePemesanan;

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
