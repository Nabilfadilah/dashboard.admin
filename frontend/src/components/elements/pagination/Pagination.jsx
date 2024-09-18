import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-2 my-4 pb-3">
      {/* Tombol Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md border ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
        }`}
      >
        Previous
      </button>

      {/* Nomor Halaman */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1 rounded-md border ${
            currentPage === number
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
          }`}
        >
          {number}
        </button>
      ))}

      {/* Tombol Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md border ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

// Pada komponen DataPemesanan, pagination diterapkan dengan menentukan halaman saat ini (currentPage) dan total halaman (totalPages).
// Saat pengguna mengklik tombol di pagination, halaman akan di-update menggunakan setCurrentPage.

// px-3 py-1: Memberikan padding pada tombol.
// rounded-md: Membuat tombol dengan ujung yang melengkung.
// border: Memberikan border pada tombol.
// bg-white dan hover: bg-gray-100: Warna background default dan perubahan warna saat hover.
// cursor-not-allowed: Mendisable tombol dan mengubah kursor menjadi not-allowed jika pagination sudah di halaman awal atau akhir.
