import React from "react";
import InputForm from "../elements/input/InputForm";
import Button from "../elements/button/Button";

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

      <Button className="bg-sky-500 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
