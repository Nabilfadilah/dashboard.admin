import React, { useState } from "react";
import AdminLayouts from "../components/layouts/AdminLayouts";
import Card from "../components/fragments/Card";
import { BsCashCoin } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import CardTable from "../components/fragments/CardTable";

const DashboardPage = () => {
  return (
    <>
      <AdminLayouts>
        <h1 className="bg-teal-900 p-3 rounded px-7 text-white">
          Hello ini halaman Dashboard
        </h1>

        {/* Baris pertama: 4 card di layar besar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 shadow-2xl p-4 rounded-lg">
          {dashboardData.slice(0, 4).map((item) => (
            <Card key={item.id}>
              <Card.Header name={item.name} />
              <Card.Body deskripsi={item.deskripsi}>{item.content}</Card.Body>
              <Card.Footer />
            </Card>
          ))}
        </div>

        {/* Baris kedua: 2 card di layar besar */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 bg-gray-100 shadow-2xl p-4 rounded-lg mt-4">
          {dashboardData.slice(4, 6).map((item) => (
            <Card key={item.id}>
              <Card.Header name={item.name} />
              <Card.Body deskripsi={item.deskripsi}>{item.content}</Card.Body>
              <Card.Footer />
            </Card>
          ))}
        </div> */}

        {/* Card Tabel: Mengambil seluruh lebar layar */}
        <div className="w-full bg-gray-100 shadow-2xl p-4 rounded-lg mt-4">
          <CardTable>
            <CardTable.Header name="Card Tabel" />
            <CardTable.Body deskripsi="This is the description"></CardTable.Body>
            <CardTable.Footer
              tableData={[
                { col1: "Row 1 Col 1", col2: "Row 1 Col 2" },
                { col1: "Row 2 Col 1", col2: "Row 2 Col 2" },
                { col1: "Row 3 Col 1", col2: "Row 3 Col 2" },
                { col1: "Row 4 Col 1", col2: "Row 4 Col 2" },
                { col1: "Row 5 Col 1", col2: "Row 5 Col 2" },
              ]}
            />
          </CardTable>
        </div>
      </AdminLayouts>
    </>
  );
};

export default DashboardPage;

const dashboardData = [
  {
    id: 1,
    name: "Total Pemesanan",
    deskripsi: "Jumlah pesanan yang masuk bulan ini",
    content: "100 Pemesanan",
  },
  {
    id: 2,
    name: "Total Pendapatan",
    deskripsi: "Pendapatan bulan ini",
    content: "Rp 50.000.000",
  },
  {
    id: 3,
    name: "Jumlah Pengguna",
    deskripsi: "Pengguna aktif di sistem",
    content: "500 Pengguna",
  },
  {
    id: 4,
    name: "Proses Produksi",
    deskripsi: "Barang dalam proses produksi",
    content: "20 Barang",
  },
  {
    id: 5,
    name: "Barang Selesai",
    deskripsi: "Barang yang telah selesai diproduksi",
    content: "150 Barang",
  },
  {
    id: 6,
    name: "Pengiriman",
    deskripsi: "Exercitationem praesentium non ut aliquid et soluta suscipit",
    content: "30 Barang",
  },
];
