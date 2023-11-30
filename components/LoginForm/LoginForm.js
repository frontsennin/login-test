"use client";
import { useState } from "react";
import DefaultField from "../DefaultField/DefaultField";
import AuthService, { makeLogin } from "@/services/auth";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const authService = new AuthService();

  const [validEmail, setValidEmail] = useState(false);
  const [valuedEmail, setValueEmail] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [valuePassword, setValuePassword] = useState("");

  const fields = [
    {
      title: "Username",
      placeholder: "user.name",
      type: "text",
      name: "login-username-name",
      id: "login-username-id",
    },
    {
      title: "Password",
      placeholder: "Your Password",
      type: "password",
      name: "login-password-name",
      id: "login-password-name",
    },
  ];

  const setValues = (event, index) => {
    const value = event;

    if (value.length > 0) {
      if (index == 0) {
        setValueEmail(value);
      }
      if (index == 1) {
        setValuePassword(value);
      }
    }
  };

  const checkValidation = (evt, index) => {
    if (index == 0) {
      setValidEmail(evt);
    }
    if (index == 1) {
      setValidPassword(evt);
    }
  };

  const sumitForm = (event) => {
    event.preventDefault();
    const body = {
      username: valuedEmail,
      password: valuePassword,
    };

    authService.makeLogin(body).then((res) => {
      if (res) {
        localStorage.setItem('user', JSON.stringify(res))
        router.push("/user");
      }
    });
  };

  return (
    <>
      <div className="pb-4 row">
        <div className="col">
          <strong className="login-title">Faça seu login no sistema</strong>
        </div>
      </div>
      <form onSubmit={sumitForm}>
        {fields.map(({ title, placeholder, type, name, id }, index) => (
          <DefaultField
            key={index}
            title={title}
            placeholder={placeholder}
            type={type}
            name={name}
            id={id}
            valueEmitter={(event) => setValues(event, index)}
            fieldIsValid={(event) => checkValidation(event, index)}
          />
        ))}
        <div className="row pt-4">
          <div className="col">
            <button
              onClick={sumitForm}
              className="btn btn-primary w-100"
              disabled={!validEmail || !validPassword}
            >
              LOGIN
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
