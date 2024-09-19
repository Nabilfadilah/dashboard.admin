import React from "react";
import AuthLayouts from "../components/layouts/AuthLayouts";
import AdminLayouts from "../components/layouts/AdminLayouts";
import FormAddPemesanan from "../components/fragments/FormAddPemesanan";
import { Link } from "react-router-dom";
import Button from "../components/elements/button/Button";
import { IoMdArrowBack } from "react-icons/io";

const AddPemesananPage = () => {
  return (
    <div>
      <AdminLayouts>
        <div className="navbar">
          <div className="bg-gray-600 p-3 rounded px-7 text-fuchsia-200 flex justify-between items-center">
            <span className="font-bold">Tambah Data Pemesanan</span>
            <Link to="/data-pemesanan">
              <Button className="flex items-center gap-1 outline outline-offset-0 hover:bg-slate-400">
                <IoMdArrowBack strokeWidth={2} className="h-4 w-4" /> Kembali
              </Button>
            </Link>
          </div>
        </div>

        {/* form add pemesanan */}
        <FormAddPemesanan />
      </AdminLayouts>
    </div>
  );
};

export default AddPemesananPage;
