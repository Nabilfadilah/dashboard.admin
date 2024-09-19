import React from "react";
import InputForm from "../elements/input/InputForm";
import Button from "../elements/button/Button";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup untuk validasi
import ModalAdd from "../../components/elements/popup/ModalAdd";
import { useNavigate } from "react-router-dom";

// Validasi form menggunakan Yup
const validationSchema = Yup.object().shape({
  namaBarang: Yup.string().required("Nama Barang harus diisi."),
  tglPemesanan: Yup.string().required("Tanggal Pemesanan harus diisi."),
  namaPemesan: Yup.string().required("Nama Pemesan harus diisi."),
  noTelepon: Yup.string().required("No Telepon harus diisi."),
  hargaSatuan: Yup.string().required("Harga Satuan harus diisi."),
  jumlahBarang: Yup.number().required("Jumlah Barang harus diisi."),
  statusPesanan: Yup.string().required("Status Pesanan harus diisi."),
  jumlahBayar: Yup.string().required("Jumlah Bayar harus diisi."),
  sisaBayar: Yup.string().required("Sisa Bayar harus diisi."),
  totalBayar: Yup.string().required("Total Bayar harus diisi."),
});

const FormAddPemesanan = () => {
  const navigate = useNavigate();

  // Menggunakan Formik
  const formik = useFormik({
    initialValues: {
      namaBarang: "",
      tglPemesanan: "",
      namaPemesan: "",
      noTelepon: "",
      hargaSatuan: "",
      jumlahBarang: "",
      statusPesanan: "",
      jumlahBayar: "",
      sisaBayar: "",
      totalBayar: "",
      tglPelunasan: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log("Submitted values:", values);
        await ModalAdd(); // Tunggu hingga ModalAdd selesai
        navigate("/data-pemesanan"); // Pindah ke halaman setelah modal selesai
      } catch (error) {
        console.error("Error during submission:", error);
      } finally {
        setSubmitting(false); // Reset state submitting setelah proses selesai
      }
    },
  });

  return (
    <div className="w-full bg-gray-200 mt-3 rounded">
      <form
        onSubmit={formik.handleSubmit}
        // className="w-full mx-auto shadow-2xl px-8 pt-3 space-y-3"
        className="w-full mx-auto shadow-2xl px-8 pt-3" // Hapus space-y-3 jika tidak perlu
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
          <div>
            <div className="mb-0">
              <InputForm
                className="w-full"
                name="namaBarang"
                label="Nama Barang"
                type="text"
                placeholder="John Doe"
                value={formik.values.namaBarang}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.namaBarang && formik.errors.namaBarang} // Meneruskan kondisi error
              />
              {/* {formik.touched.namaBarang && formik.errors.namaBarang && (
                <span className="text-sm text-red-500 mt-0">
                  {formik.errors.namaBarang}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>

            <div className="mb-0">
              <InputForm
                className="w-full"
                name="tglPemesanan"
                label="Tgl Pemesanan"
                type="text"
                placeholder="yyyy-mm-dd"
                value={formik.values.tglPemesanan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.tglPemesanan && formik.errors.tglPemesanan
                }
              />
              {/* {formik.touched.tglPemesanan && formik.errors.tglPemesanan && (
                <span className="text-sm text-red-500">
                  {formik.errors.tglPemesanan}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>

            <div className="mb-0">
              <InputForm
                className="w-full"
                name="namaPemesan"
                label="Nama Pemesan"
                type="text"
                placeholder="John Doe"
                value={formik.values.namaPemesan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.namaPemesan && formik.errors.namaPemesan}
              />
              {/* {formik.touched.namaPemesan && formik.errors.namaPemesan && (
                <span className="text-sm text-red-500">
                  {formik.errors.namaPemesan}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>

            <div className="mb-0">
              <InputForm
                className="w-full"
                name="noTelepon"
                label="No Telepon"
                type="text"
                placeholder="08123456789"
                value={formik.values.noTelepon}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.noTelepon && formik.errors.noTelepon}
              />
              {/* {formik.touched.noTelepon && formik.errors.noTelepon && (
                <span className="text-sm text-red-500">
                  {formik.errors.noTelepon}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>

            <div className="mb-0">
              <InputForm
                className="w-full"
                name="hargaSatuan"
                label="Harga Satuan"
                type="text"
                placeholder="100000"
                value={formik.values.hargaSatuan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.hargaSatuan && formik.errors.hargaSatuan}
              />
              {/* {formik.touched.hargaSatuan && formik.errors.hargaSatuan && (
                <span className="text-sm text-red-500">
                  {formik.errors.hargaSatuan}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>

            <div className="mb-0">
              <InputForm
                className="w-full"
                name="jumlahBarang"
                label="Jumlah Barang"
                type="number"
                placeholder="10"
                value={formik.values.jumlahBarang}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.jumlahBarang && formik.errors.jumlahBarang
                }
              />
              {/* {formik.touched.jumlahBarang && formik.errors.jumlahBarang && (
                <span className="text-sm text-red-500">
                  {formik.errors.jumlahBarang}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>
          </div>

          <div>
            <div className="mb-0">
              <InputForm
                className="w-full"
                name="statusPesanan"
                label="Status Pesanan"
                type="text"
                placeholder="Lunas"
                value={formik.values.statusPesanan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.statusPesanan && formik.errors.statusPesanan
                }
              />
              {/* {formik.touched.statusPesanan && formik.errors.statusPesanan && (
                <span className="text-sm text-red-500">
                  {formik.errors.statusPesanan}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>

            <div className="mb-0">
              <InputForm
                className="w-full"
                name="totalBayar"
                label="Total Bayar"
                type="text"
                placeholder="1000000"
                value={formik.values.totalBayar}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.totalBayar && formik.errors.totalBayar}
              />
              {/* {formik.touched.totalBayar && formik.errors.totalBayar && (
                <span className="text-sm text-red-500">
                  {formik.errors.totalBayar}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>

            <div className="mb-0">
              <InputForm
                className="w-full"
                name="jumlahBayar"
                label="Jumlah Bayar"
                type="text"
                placeholder="500000"
                value={formik.values.jumlahBayar}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.jumlahBayar && formik.errors.jumlahBayar}
              />
              {/* {formik.touched.jumlahBayar && formik.errors.jumlahBayar && (
                <span className="text-sm text-red-500">
                  {formik.errors.jumlahBayar}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>

            <div className="mb-0">
              <InputForm
                className="w-full"
                name="sisaBayar"
                label="Sisa Bayar"
                type="text"
                placeholder="500000"
                value={formik.values.sisaBayar}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.sisaBayar && formik.errors.sisaBayar}
              />
              {/* {formik.touched.sisaBayar && formik.errors.sisaBayar && (
                <span className="text-sm text-red-500">
                  {formik.errors.sisaBayar}
                </span> // Pesan error mepet dengan input
              )} */}
            </div>

            <div className="mb-0">
              <InputForm
                className="w-full"
                name="tglPelunasan"
                label="Tgl Pelunasan"
                type="text"
                placeholder="yyyy-mm-dd"
                value={formik.values.tglPelunasan}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.tglPelunasan && formik.errors.tglPelunasan
                }
              />
            </div>
          </div>
        </div>

        <div className="text-center pb-3">
          <Button
            type="submit"
            className="bg-green-700 hover:bg-green-600 font-bold"
            disabled={formik.isSubmitting}
          >
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormAddPemesanan;
