import React from "react";
import Sidebar from "./Sidebar";

const AdminLayouts = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-7 overflow-auto">{children}</div>
    </div>
  );
};

export default AdminLayouts;
