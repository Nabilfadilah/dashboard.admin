import React, { useState } from "react";
import AdminLayouts from "../components/layouts/AdminLayouts";
import Button from "../components/elements/button/Button";
import InputSeacrh from "../components/elements/input/InputSearch";
import Table from "../components/elements/table/Table";
import Pagination from "../components/elements/pagination/Pagination";
import Dropdown from "../components/elements/button/Dropdown";
import TablePemesanan from "../components/elements/table/Table";
import ModalDelete from "../components/elements/popup/ModalDelete";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

const DataPemesananPage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      No: "1",
      Name: "John Doe",
      Age: 28,
      Status: "Lunas",
      Job: "Engineer",
    },
    {
      id: 2,
      No: "2",
      Name: "Jane Smith",
      Age: 34,
      Status: "Belum Lunas",
      Job: "Designer",
    },
    {
      id: 3,
      No: "3",
      Name: "Sam Green",
      Age: 22,
      Status: "Lunas",
      Job: "Developer",
    },
    {
      id: 4,
      No: "4",
      Name: "Sam Green",
      Age: 22,
      Status: "Lunas",
      Job: "Developer",
    },
    {
      id: 5,
      No: "5",
      Name: "Sam Green",
      Age: 22,
      Status: "Lunas",
      Job: "Developer",
    },
    {
      id: 6,
      No: "6",
      Name: "Sam Green",
      Age: 22,
      Status: "Lunas",
      Job: "Developer",
    },
  ]);

  const columns = ["No", "Name", "Age", "Status", "Job", "Aksi"];

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Total halaman (misal)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // dropdown menu
  // Set default status filter ke "Semua"
  const [statusFilter, setStatusFilter] = useState("Semua");

  // Filter data berdasarkan status yang dipilih. Jika statusFilter adalah "Semua", tampilkan semua data.
  const filteredData =
    statusFilter === "Semua"
      ? data
      : data.filter((item) => item.Status === statusFilter);

  // handle delete data berdasarkan id
  const handleDelete = async (id) => {
    // Tampilkan popup konfirmasi delete
    const konfirmasi = await ModalDelete();

    // Jika konfirmasi delete diterima
    if (konfirmasi) {
      // filter data untuk menghapus item dengan id yang sesuai
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData); // perbaharui state dengan data yang telah dihapus
    } else {
      console.log("Error delete data");
    }
  };

  return (
    <AdminLayouts>
      <div className="navbar">
        <div className="bg-gray-300 p-3 rounded px-7 text-fuchsia-900 flex justify-between items-center">
          <span>INI data pemesanan!!</span>
          <Link to="/data-pemesanan/add">
            <Button className="flex items-center gap-1 bg-green-800 hover:bg-green-700">
              <FiPlus strokeWidth={2} className="h-4 w-4" />
              Tambah
            </Button>
          </Link>
        </div>
      </div>

      <div className="header pt-3 pb-3">
        <div className="flex justify-between items-center">
          {/* Kirim statusFilter sebagai props ke Dropdown untuk menampilkan status yang dipilih */}
          <Dropdown onSelect={setStatusFilter} selectedStatus={statusFilter} />
          <InputSeacrh placeholder="Cari data pemesanan" name="search" />
        </div>
      </div>

      <div className="content">
        <div className="bg-gray-200">
          {/* <h1>ini nantinya tabel</h1> */}
          <TablePemesanan
            columns={columns}
            data={filteredData}
            onDelete={handleDelete}
          />
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </AdminLayouts>
  );
};

export default DataPemesananPage;

// handleDelete: Fungsi ini menghapus item dari data berdasarkan id yang diterima. Setelah item dihapus, state data diperbarui menggunakan setData.
// Panggil onDelete: Pada ikon MdDelete, onClick memanggil handleDelete dengan id item yang ingin dihapus.
// Penggunaan id: Pastikan setiap item dalam data memiliki id unik untuk memudahkan proses penghapusan.
