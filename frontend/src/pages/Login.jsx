import React from "react";
import FormLogin from "../components/fragments/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <AuthLayouts title="Login" type="login">
        <FormLogin />
      </AuthLayouts>
    </div>
  );
};

export default LoginPage;
