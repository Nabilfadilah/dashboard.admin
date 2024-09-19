import React, { useState, useEffect } from "react";
import {
  FaChartBar,
  FaUser,
  FaShoppingCart,
  FaSignOutAlt,
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaCogs,
} from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaChevronCircleLeft } from "react-icons/fa";
import AlizaLogo from "../../assets/img/keluar.png";
import ModalLogout from "../elements/popup/ModalLogout";

import { useDispatch, useSelector } from "react-redux";
import Button from "../elements/button/Button";
// import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const location = useLocation(); // dapatkan lokasi saat ini

  // select usernya dari reducer
  // Tambahkan selector untuk mendapatkan status logout
  //   const { user, isSuccess } = useSelector((state) => state.auth);

  // logout
  //   const handleLogoutClick = () => {
  //     ModalLogout(() => {
  //       dispatch(LogOut())
  //         .unwrap()
  //         .then(() => {
  //           dispatch(reset()); // reset state setelah logout berhasil
  //           navigate("/"); // Arahkan ke halaman login setelah logout berhasil
  //         })
  //         .catch((error) => {
  //           console.error("Logout failed: ", error);
  //         });
  //     });
  //   };

  // logout sementara
  const handleLogoutClick = () => {
    ModalLogout(() => {
      navigate("/login"); // Arahkan ke halaman login setelah logout
    });
  };

  // fungsi untuk resize sidebar
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // memanggil function

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // fungsi untuk menentukan apakah navlink aktif atau tidak
  const isActiveLink = (path) => {
    // return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    if (user && location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [user, navigate, location.pathname]);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-gradient-to-t from-teal-800 to-blue-800 h-screen p-5 pt-8 relative duration-700 rounded-r-lg shadow flex flex-col`}
      >
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7
        border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <FaChevronCircleLeft className="w-full h-full bg-slate-100 text-yellow-700" />
        </div>
        <div className="flex gap-x-4 items-center">
          <img
            src={AlizaLogo}
            className={`cursor-pointer duration-500 w-10 h-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            <strong>Ztaiuan Dashboard</strong>
          </h1>
        </div>
        <br />
        <hr />
        <ul className="pt-6 flex flex-col flex-grow">
          <li
            className={`flex rounded-md p-2 text-gray-300 text-sm items-center gap-x-4 mt-2 font-sans font-bold ${
              isActiveLink("/dashboard")
                ? "bg-light-white"
                : "hover:bg-light-white"
            }`}
          >
            <NavLink
              to="/dashboard"
              className="flex items-center gap-x-4 w-full"
            >
              <FaChartBar size={19} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </NavLink>
          </li>

          <li
            className={`flex rounded-md p-2 text-gray-300 text-sm items-center gap-x-4 mt-9 font-sans font-bold ${
              isActiveLink("/data-pemesanan")
                ? "bg-light-white"
                : "hover:bg-light-white"
            }`}
          >
            <NavLink
              to="/data-pemesanan"
              className="flex items-center gap-x-4 w-full"
            >
              <FaShoppingCart size={19} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Data Pemesanan
              </span>
            </NavLink>
          </li>

          {/* Logout Button */}
          <li className="flex rounded-md p-2 text-gray-300 text-sm items-center gap-x-4 mt-auto font-sans font-bold hover:bg-light-white">
            <button
              className="flex items-center gap-x-4 w-full"
              onClick={handleLogoutClick}
            >
              <FaSignOutAlt size={19} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Logout
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
