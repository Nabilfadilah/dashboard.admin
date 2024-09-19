import React from "react";
import InputForm from "../elements/input/InputForm";
import Button from "../elements/button/Button";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <form>
      {/* email */}
      <InputForm
        name="username"
        label="Username"
        type="text"
        placeholder="Jhon doe"
      />

      {/* password */}
      <InputForm
        name="password"
        label="Password:"
        type="password"
        placeholder="*****"
      />

      <Link to="/dashboard">
        <Button className="bg-sky-500 w-full font-bold" type="submit">
          Login
        </Button>
      </Link>
    </form>
  );
};

export default FormLogin;
