import React from "react";
import { MdClose } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../elements/button/Button";
import { useNavigate } from "react-router-dom";
import ModalEdit from "../elements/popup/ModalEdit";

// Schema untuk validasi form
const validationSchema = Yup.object({
  namaBarang: Yup.string().required("Nama barang harus diisi"),
  namaPemesan: Yup.string().required("Nama pemesan harus diisi"),
});

const PopupEditForm = ({ isOpen, onClose, initialValues }) => {
  console.log("Initial values for edit:", initialValues); // Debug log
  const navigate = useNavigate();

  const onSave = (values) => {
    console.log("Saving values:", values);
  };

  //   if (!isOpen) return null;
  if (!isOpen || !initialValues) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg relative">
        <MdClose
          className="absolute top-4 right-4 text-xl cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-2xl font-bold mb-4">Edit Pemesanan</h2>
        <hr className="mb-3 font-bold" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("Form submitted:", values);
            onSave(values);
            setSubmitting(false);

            // Tampilkan modal sukses, kemudian redirect
            const modalResponse = await ModalEdit(); // Tampilkan modal sukses
            console.log("Modal response:", modalResponse);

            // Tutup popup edit dan popup form edit
            onClose();

            if (modalResponse) {
              navigate("/data-pemesanan"); // Redirect setelah modal
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="grid grid-cols-2 gap-4">
                {/* nama barang */}
                <div className="mb-4">
                  <label
                    htmlFor="namaBarang"
                    className="block text-sm font-medium"
                  >
                    Nama Barang
                  </label>
                  <Field
                    type="text"
                    name="namaBarang"
                    id="namaBarang"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="namaBarang"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* nama pemesan */}
                <div className="mb-4">
                  <label
                    htmlFor="namaPemesan"
                    className="block text-sm font-medium"
                  >
                    Nama Pemesan
                  </label>
                  <Field
                    type="text"
                    name="namaPemesan"
                    id="namaPemesan"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="namaPemesan"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* tgl pemesanan */}
                <div className="mb-4">
                  <label
                    htmlFor="tglPemesanan"
                    className="block text-sm font-medium"
                  >
                    Tgl Pemesanan
                  </label>
                  <Field
                    type="text"
                    name="tglPemesanan"
                    id="tglPemesanan"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="tglPemesanan"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* no Telepon */}
                <div className="mb-4">
                  <label
                    htmlFor="noTelepon"
                    className="block text-sm font-medium"
                  >
                    No Telepon
                  </label>
                  <Field
                    type="text"
                    name="noTelepon"
                    id="noTelepon"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="noTelepon"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* harga satuan */}
                <div className="mb-4">
                  <label
                    htmlFor="hargaSatuan"
                    className="block text-sm font-medium"
                  >
                    Harga Satuan
                  </label>
                  <Field
                    type="text"
                    name="hargaSatuan"
                    id="hargaSatuan"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="hargaSatuan"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* jumlah Barang */}
                <div className="mb-4">
                  <label
                    htmlFor="jumlahBarang"
                    className="block text-sm font-medium"
                  >
                    Jumlah Barang
                  </label>
                  <Field
                    type="text"
                    name="jumlahBarang"
                    id="jumlahBarang"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="jumlahBarang"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* status pesanan */}
                <div className="mb-4">
                  <label
                    htmlFor="statusPesanan"
                    className="block text-sm font-medium"
                  >
                    Status Pesanan
                  </label>
                  <Field
                    type="text"
                    name="statusPesanan"
                    id="statusPesanan"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="statusPesanan"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* jumlah Bayar */}
                <div className="mb-4">
                  <label
                    htmlFor="jumlahBayar"
                    className="block text-sm font-medium"
                  >
                    Jumlah Bayar
                  </label>
                  <Field
                    type="text"
                    name="jumlahBayar"
                    id="jumlahBayar"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="jumlahBayar"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* sisa bayar */}
                <div className="mb-4">
                  <label
                    htmlFor="sisaBayar"
                    className="block text-sm font-medium"
                  >
                    Sisa Bayar
                  </label>
                  <Field
                    type="text"
                    name="sisaBayar"
                    id="sisaBayar"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="sisaBayar"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* total bayar */}
                <div className="mb-4">
                  <label
                    htmlFor="totalBayar"
                    className="block text-sm font-medium"
                  >
                    Total Bayar
                  </label>
                  <Field
                    type="text"
                    name="totalBayar"
                    id="totalBayar"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="totalBayar"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* tgl pelunasan*/}
                <div className="mb-4">
                  <label
                    htmlFor="tglPelunasan"
                    className="block text-sm font-medium"
                  >
                    Tgl Pelunasan
                  </label>
                  <Field
                    type="text"
                    name="tglPelunasan"
                    id="tglPelunasan"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="tglPelunasan"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-green-700 hover:bg-green-600 font-bold text-white"
                  disabled={isSubmitting}
                >
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PopupEditForm;
