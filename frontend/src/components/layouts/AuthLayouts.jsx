import React from "react";

const AuthLayouts = (props) => {
  const { children, title, type } = props;

  return (
    <div className="border p-9 rounded-lg bg-gray-200 shadow-lg">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-sky-800 text-center">
          {title}
        </h1>
        <p className="font-medium text-slate-500">
          Welcome, Please enter your details
        </p>

        {/* form input */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
