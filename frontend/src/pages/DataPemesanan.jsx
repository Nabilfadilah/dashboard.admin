import React, { useState } from "react";
import AdminLayouts from "../components/layouts/AdminLayouts";
import Button from "../components/elements/button/Button";
import InputSeacrh from "../components/elements/input/InputSearch";
import Table from "../components/elements/table/Table";
import Pagination from "../components/elements/pagination/Pagination";
import Dropdown from "../components/elements/button/Dropdown";

const DataPemesananPage = () => {
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

  return (
    <AdminLayouts>
      <div className="navbar">
        <div className="bg-gray-300 p-3 rounded px-7 text-fuchsia-900 flex justify-between items-center">
          <span>INI data pemesanan!!</span>
          <Button className="bg-green-800 hover:bg-green-700">Tambah</Button>
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
          <Table columns={columns} data={filteredData} />
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

const data = [
  { No: "1", Name: "John Doe", Age: 28, Status: "Lunas", Job: "Engineer" },
  {
    No: "2",
    Name: "Jane Smith",
    Age: 34,
    Status: "Belum Lunas",
    Job: "Designer",
  },
  { No: "3", Name: "Sam Green", Age: 22, Status: "Lunas", Job: "Developer" },
  { No: "4", Name: "Sam Green", Age: 22, Status: "Lunas", Job: "Developer" },
  { No: "5", Name: "Sam Green", Age: 22, Status: "Lunas", Job: "Developer" },
  { No: "6", Name: "Sam Green", Age: 22, Status: "Lunas", Job: "Developer" },
];

const columns = ["No", "Name", "Age", "Status", "Job", "Aksi"];
