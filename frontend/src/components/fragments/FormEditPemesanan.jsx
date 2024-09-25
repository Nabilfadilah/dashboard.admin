import React, { useState, useEffect } from "react";
import InputForm from "../elements/input/InputForm";
import Button from "../elements/button/Button";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup untuk validasi
import ModalAdd from "../../components/elements/popup/ModalAdd";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar2Date } from "react-icons/bs";
import { id } from "date-fns/locale";
import { format, parseISO } from "date-fns";
import Dropdown from "../elements/button/Dropdown";
import Label from "../elements/input/Label";
import { NumericFormat } from "react-number-format";
import Input from "../elements/input/Input";
// import ModalEdit from "../elements/popup/OpenModalEdit";
// import axios from "axios";
import "./ModalEdit.css";

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

const dummyData = [
  {
    id: 1,
    namaBarang: "Barang 1",
    tglPemesanan: format(new Date(), "yyyy-MM-dd"),
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
];

const FormEditPemesanan = ({ isOpen, onClose, selectedId }) => {
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState({}); // Data awal untuk form

  // Ambil data berdasarkan ID saat modal dibuka
  useEffect(() => {
    if (isOpen && selectedId) {
      const foundData = dummyData.find((item) => item.id === selectedId);
      if (foundData) {
        setInitialData(foundData);
      }
    }
  }, [isOpen, selectedId]);

  // Menggunakan Formik
  const formik = useFormik({
    initialValues: {
      namaBarang: initialData.namaBarang || "",
      tglPemesanan:
        initialData.tglPemesanan || format(new Date(), "yyyy-MM-dd"),
      namaPemesan: initialData.namaPemesan || "",
      noTelepon: initialData.noTelepon || "",
      hargaSatuan: initialData.hargaSatuan || "",
      jumlahBarang: initialData.jumlahBarang || "",
      statusPesanan: initialData.statusPesanan || "",
      jumlahBayar: initialData.jumlahBayar || "",
      sisaBayar: initialData.sisaBayar || "",
      totalBayar: initialData.totalBayar || "",
      tglPelunasan: initialData.tglPelunasan || "",
    },
    enableReinitialize: true, // Agar formik update saat initialData berubah
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log("Data yang disubmit:", values);
        onClose(); // Tutup modal setelah submit
        navigate("/data-pemesanan"); // Pindah ke halaman setelah modal selesai
      } catch (error) {
        console.error("Error during submission:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  // if (!isOpen) return null; // Jika modal tidak terbuka, jangan render apapun

  // Fungsi useeffect untuk tgl pelunasan agar otomatis terisi
  useEffect(() => {
    // Jika status berubah menjadi "lunas" dan tglPelunasan masih kosong
    if (
      formik.values.statusPesanan === "Lunas" &&
      !formik.values.tglPelunasan
    ) {
      // Mengatur tglPelunasan ke tanggal hari ini
      formik.setFieldValue("tglPelunasan", new Date().toISOString());
    } else if (formik.values.statusPesanan !== "Lunas") {
      // Jika status bukan "lunas", hapus nilai tglPelunasan
      formik.setFieldValue("tglPelunasan", "");
    }
  }, [formik.values.statusPesanan]); // Hanya menjalankan efek ketika status berubah

  // Fungsi useEfect untuk hargaSatuan x jumlah = totalBayar
  useEffect(() => {
    const { hargaSatuan, jumlahBarang } = formik.values;
    if (hargaSatuan && jumlahBarang) {
      const bayarTotal = parseFloat(hargaSatuan) * parseFloat(jumlahBarang);
      formik.setFieldValue("totalBayar", bayarTotal);
    }
  }, [formik.values.hargaSatuan, formik.values.jumlahBarang]);

  // Ambil data berdasarkan ID saat modal dibuka
  useEffect(() => {
    if (isOpen && selectedId) {
      const foundData = dummyData.find((item) => item.id === selectedId);
      if (foundData) {
        setInitialData(foundData);
      }
    }
  }, [isOpen, selectedId]);

  // Fungsi untuk mengkonversi string ke objek Date
  const handleDateChange = (date, fieldName) => {
    const formattedDate = date ? format(date, "yyyy-MM-dd") : "";
    formik.setFieldValue(fieldName, formattedDate);

    // Hapus pesan kesalahan saat tanggal diatur
    formik.setFieldError(fieldName, "");
    console.log(handleDateChange);
  };

  console.log(initialData);

  return (
    // <ModalEdit isOpen={isOpen} onClose={onClose} title="Edit Pemesanan">
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Pemesanan</h2>
        <form
          onSubmit={formik.handleSubmit}
          // className="w-full mx-auto shadow-2xl px-8 pt-3 space-y-3"
          className="w-full mx-auto shadow-2xl px-8 pt-3" // Hapus space-y-3 jika tidak perlu
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
            <div>
              {/* Nama Barang Dropdown */}
              <div className="mb-2">
                <Label htmlFor="namaBarang">Nama Barang</Label>
                <Dropdown
                  id="namaBarang"
                  onSelect={(value) =>
                    formik.setFieldValue("namaBarang", value)
                  }
                  selectedOption={formik.values.namaBarang}
                  options={opsiNamaBarang}
                  placeholder="Pilih Nama Barang"
                  className="w-full h-10 text-black border rounded focus:outline-none focus:border-blue-500" // Sesuaikan dengan styling input lainnya
                />
                {formik.touched.namaBarang && formik.errors.namaBarang && (
                  <span className="text-red-600 text-sm">
                    {formik.errors.namaBarang}
                  </span>
                )}
              </div>

              <div className="mb-0">
                <div>
                  <DatePicker
                    selected={
                      formik.values.tglPemesanan
                        ? parseISO(formik.values.tglPemesanan)
                        : null
                    }
                    onChange={(date) => handleDateChange(date, "tglPemesanan")}
                    dateFormat="dd-MM-yyyy"
                    locale={id}
                    disabled
                    customInput={
                      <InputForm
                        className="w-full"
                        name="tglPemesanan"
                        label="Tgl Pemesanan"
                        disabled
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.tglPemesanan &&
                          formik.errors.tglPemesanan
                        }
                      />
                    }
                  />
                  {/* <BsCalendar2Date /> */}
                </div>
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
                  error={
                    formik.touched.namaPemesan && formik.errors.namaPemesan
                  }
                />
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
              </div>

              <div className="mb-3">
                <Label htmlFor="hargaSatuan">Harga Satuan</Label>
                <NumericFormat
                  id="hargaSatuan"
                  className="w-full"
                  placeholder="Rp "
                  size="sm"
                  name="hargaSatuan"
                  thousandSeparator={true}
                  prefix={"Rp "}
                  customInput={Input}
                  onValueChange={(values) => {
                    const { value } = values;
                    formik.setFieldValue("hargaSatuan", value);
                  }}
                  value={formik.values.hargaSatuan}
                  error={
                    formik.touched.hargaSatuan &&
                    Boolean(formik.errors.hargaSatuan)
                  }
                  helperText={
                    formik.touched.hargaSatuan && formik.errors.hargaSatuan
                  }
                  onBlur={formik.handleBlur}
                />
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
              </div>
            </div>

            <div>
              <div className="mb-0">
                <Label htmlFor="statusPesanan">Status Pemesanan</Label>
                <Dropdown
                  id="statusPesanan"
                  onSelect={(value) =>
                    formik.setFieldValue("statusPesanan", value)
                  }
                  selectedOption={formik.values.statusPesanan}
                  options={opsiStatus}
                  placeholder="Pilih Status Pesanan"
                  className="w-full h-10 text-black border rounded focus:outline-none focus:border-blue-500" // Sesuaikan dengan styling input lainnya
                />
                {formik.touched.statusPesanan &&
                  formik.errors.statusPesanan && (
                    <span className="text-red-600 text-sm">
                      {formik.errors.statusPesanan}
                    </span>
                  )}
              </div>

              <div className="mb-3">
                <Label htmlFor="totalBayar">Total Bayar</Label>
                <NumericFormat
                  id="totalBayar"
                  className="w-full"
                  placeholder="Rp "
                  size="sm"
                  name="totalBayar"
                  thousandSeparator={true}
                  prefix={"Rp "}
                  customInput={Input}
                  disabled
                  onValueChange={(values) => {
                    const { value } = values;
                    formik.setFieldValue("totalBayar", value);
                  }}
                  value={formik.values.totalBayar}
                  error={
                    formik.touched.totalBayar &&
                    Boolean(formik.errors.totalBayar)
                  }
                  helperText={
                    formik.touched.totalBayar && formik.errors.totalBayar
                  }
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="mb-3">
                <Label htmlFor="jumlahBayar">Jumlah Bayar</Label>
                <NumericFormat
                  id="jumlahBayar"
                  className="w-full"
                  placeholder="Rp "
                  size="sm"
                  name="jumlahBayar"
                  thousandSeparator={true}
                  prefix={"Rp "}
                  customInput={Input}
                  onValueChange={(values) => {
                    const { value } = values;
                    formik.setFieldValue("jumlahBayar", value);
                  }}
                  value={formik.values.jumlahBayar}
                  error={
                    formik.touched.jumlahBayar &&
                    Boolean(formik.errors.jumlahBayar)
                  }
                  helperText={
                    formik.touched.jumlahBayar && formik.errors.jumlahBayar
                  }
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="mb-3">
                <Label htmlFor="sisaBayar">Sisa Bayar</Label>
                <NumericFormat
                  id="sisaBayar"
                  className="w-full"
                  placeholder="Rp "
                  size="sm"
                  name="sisaBayar"
                  thousandSeparator={true}
                  prefix={"Rp "}
                  customInput={Input}
                  onValueChange={(values) => {
                    const { value } = values;
                    formik.setFieldValue("sisaBayar", value);
                  }}
                  value={formik.values.sisaBayar}
                  error={
                    formik.touched.sisaBayar && Boolean(formik.errors.sisaBayar)
                  }
                  helperText={
                    formik.touched.sisaBayar && formik.errors.sisaBayar
                  }
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="mb-0">
                <DatePicker
                  selected={
                    formik.values.tglPelunasan
                      ? parseISO(formik.values.tglPelunasan)
                      : null
                  }
                  onChange={(date) => handleDateChange(date, "tglPelunasan")}
                  dateFormat="dd-MM-yyyy"
                  locale={id}
                  disabled={
                    formik.values.statusPesanan === "Lunas" ||
                    formik.values.statusPesanan === "Belum Lunas"
                  }
                  customInput={
                    <InputForm
                      InputForm
                      className="w-full"
                      name="tglPelunasan"
                      label="Tgl Pelunasan"
                      disabled
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.tglPelunasan &&
                        formik.errors.tglPelunasan
                      }
                    />
                  }
                />
              </div>
            </div>
          </div>

          <div className="text-center pb-3">
            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-600 font-bold text-white"
              disabled={formik.isSubmitting}
            >
              Simpan
            </Button>
            <Button onClick={onClose} className="ml-2">
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
    // </ModalEdit>
  );
};

export default FormEditPemesanan;

const opsiNamaBarang = ["Kartu undangan", "Kalender", "Banner", "X banner"];

const opsiStatus = ["Lunas", "Belum Lunas"];
