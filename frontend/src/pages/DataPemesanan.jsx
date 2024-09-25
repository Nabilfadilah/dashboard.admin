import React, { useState, useEffect } from "react";
import AdminLayouts from "../components/layouts/AdminLayouts";
import Button from "../components/elements/button/Button";
import InputSeacrh from "../components/elements/input/InputSearch";
// import Table from "../components/elements/table/Table";
import Pagination from "../components/elements/pagination/Pagination";
import Dropdown from "../components/elements/button/Dropdown";
import TablePemesanan from "../components/elements/table/Table";
import ModalDelete from "../components/elements/popup/ModalDelete";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
// import FormEditPemesanan from "../components/fragments/FormEditPemesanan";
import PopupEditForm from "../components/fragments/FormEdit";

const DataPemesananPage = () => {
  const [selectedId, setSelectedId] = useState(null); // Set awal ke null
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Tambahkan state ini
  // const [isEditModalOpen, setEditModalOpen] = useState(false); // Modal tidak terbuka saat halaman dimuat
  // Set default status filter ke "Semua"
  const [statusFilter, setStatusFilter] = useState("Semua");
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Total halaman (misal)

  // saya pakai dumy data
  const [data, setData] = useState([
    {
      id: 1,
      namaBarang: "Barang 1",
      tglPemesanan: "yyyy-MM-dd",
      namaPemesan: "John Doe",
      noTelepon: "1234567890",
      hargaSatuan: 10000,
      jumlahBarang: 2,
      statusPesanan: "Lunas",
      jumlahBayar: 20000,
      sisaBayar: 0,
      totalBayar: 20000,
      tglPelunasan: null,
    },
    {
      id: 2,
      namaBarang: "Barang 2",
      tglPemesanan: "yyyy-MM-dd",
      namaPemesan: "John Doe",
      noTelepon: "1234567890",
      hargaSatuan: 10000,
      jumlahBarang: 2,
      statusPesanan: "Belum Lunas",
      jumlahBayar: 20000,
      sisaBayar: 0,
      totalBayar: 20000,
      tglPelunasan: null,
    },
    {
      id: 3,
      namaBarang: "Barang 3",
      tglPemesanan: "yyyy-MM-dd",
      namaPemesan: "John Doe",
      noTelepon: "1234567890",
      hargaSatuan: 10000,
      jumlahBarang: 2,
      statusPesanan: "Belum Lunas",
      jumlahBayar: 20000,
      sisaBayar: 0,
      totalBayar: 20000,
      tglPelunasan: null,
    },
    {
      id: 4,
      namaBarang: "Barang 4",
      tglPemesanan: "yyyy-MM-dd",
      namaPemesan: "John Doe",
      noTelepon: "1234567890",
      hargaSatuan: 10000,
      jumlahBarang: 2,
      statusPesanan: "Lunas",
      jumlahBayar: 20000,
      sisaBayar: 0,
      totalBayar: 20000,
      tglPelunasan: null,
    },
    {
      id: 5,
      namaBarang: "Barang 5",
      tglPemesanan: "yyyy-MM-dd",
      namaPemesan: "John Doe",
      noTelepon: "1234567890",
      hargaSatuan: 10000,
      jumlahBarang: 2,
      statusPesanan: "Lunas",
      jumlahBayar: 20000,
      sisaBayar: 0,
      totalBayar: 20000,
      tglPelunasan: null,
    },
    {
      id: 6,
      namaBarang: "Barang 6",
      tglPemesanan: "yyyy-MM-dd",
      namaPemesan: "John Doe",
      noTelepon: "1234567890",
      hargaSatuan: 10000,
      jumlahBarang: 2,
      statusPesanan: "Lunas",
      jumlahBayar: 20000,
      sisaBayar: 0,
      totalBayar: 20000,
      tglPelunasan: null,
    },
  ]);

  // const handleEdit = (id) => {
  //   setSelectedId(id); // Mengatur ID yang dipilih
  //   setEditModalOpen(true); // Membuka modal edit
  // };
  // useEffect(() => {
  //   console.log("Modal Open State:", isEditModalOpen);
  // }, [isEditModalOpen]);

  // const handleCloseModal = () => {
  //   setEditModalOpen(false); // Menutup modal edit
  //   setSelectedId(null); // Mengatur ID yang dipilih ke null
  // };

  // const columns = [
  //   "No",
  //   "namaBarang",
  //   "tglPemesanan",
  //   "namaPemesan",
  //   "noTelepon",
  //   "hargaSatuan",
  //   "jumlahBarang",
  //   "statusPesanan",
  //   "jumlahBayar",
  //   "sisaBayar",
  //   "totalBayar",
  //   "tglPelunasan",
  //   "Aksi",
  // ];

  const handleEdit = (id) => {
    setSelectedId(id);
    setIsPopupOpen(true); // Open Popup for edit
  };

  const handleCloseModal = () => {
    setIsPopupOpen(false);
    setSelectedId(null);
  };

  const handleSave = (values) => {
    console.log("Saved values:", values);
    // Tambahkan logika penyimpanan data
    setIsPopupOpen(false); // Tutup popup setelah menyimpan
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // dropdown menu
  // Daftar opsi untuk dropdown
  const filterOptions = ["Semua", "Lunas", "Belum Lunas"];

  // Filter data berdasarkan status yang dipilih. Jika statusFilter adalah "Semua", tampilkan semua data.
  const filteredData =
    statusFilter === "Semua"
      ? data
      : data.filter((item) => item.statusPesanan === statusFilter);

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
            <Button className="flex items-center gap-1 text-white bg-green-800 hover:bg-green-700">
              <FiPlus strokeWidth={2} className="h-4 w-4" />
              Tambah
            </Button>
          </Link>
        </div>
      </div>

      <div className="header pt-3 pb-3">
        <div className="flex justify-between items-center">
          {/* Kirim statusFilter sebagai props ke Dropdown untuk menampilkan status yang dipilih */}
          {/* <Dropdown onSelect={setStatusFilter} selectedStatus={statusFilter} /> */}
          {/* Panggil Dropdown dengan opsi status */}
          <Dropdown
            onSelect={setStatusFilter}
            selectedOption={statusFilter}
            options={filterOptions}
            placeholder="Filter Status"
            className="mb-4 w-48"
          />
          <InputSeacrh placeholder="Cari data pemesanan" name="search" />
        </div>
      </div>

      <div className="content">
        <div className="bg-gray-200">
          {/* <h1>ini nantinya tabel</h1> */}
          <TablePemesanan
            // columns={columns}
            data={filteredData}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          {/* Popup Form */}
          <PopupEditForm
            isOpen={isPopupOpen}
            onClose={handleCloseModal}
            onSave={handleSave} // Tambahkan fungsi handleSave untuk menyimpan perubahan
            initialValues={
              selectedId
                ? filteredData.find((item) => item.id === selectedId)
                : { namaBarang: "", namaPemesan: "" }
            }
          />

          {/* Form Edit Modal */}
          {/* <FormEditPemesanan
            isOpen={isEditModalOpen} // Mengontrol apakah modal terbuka
            onClose={handleCloseModal} // Fungsi untuk menutup modal
            selectedId={selectedId} // Mengirimkan ID item yang sedang diedit
          /> */}

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
