import React, { useState } from "react";
import { login } from "./api";
import { useNavigate } from "react-router-dom";
import { Title, LoginBox, InputBox, RememberForgot, Checkbox, Button, RegisterLink, Icon, Label, Input } from './components.js';

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(correo, contraseña);

      if (response && response.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <LoginBox>
      <form onSubmit={handleSubmit}>
        <Title>Login</Title>

        <InputBox>
          <Icon><ion-icon name="mail"></ion-icon></Icon>
          <Input type="email" required value={correo} onChange={(e) => setCorreo(e.target.value)} />
          <Label>Email</Label>
        </InputBox>

        <InputBox>
          <Icon><ion-icon name="lock-closed"></ion-icon></Icon>
          <Input type="password" required value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
          <Label>Password</Label>
        </InputBox>

        <RememberForgot>
          <Checkbox type="checkbox" />
          <label>Remember me</label>
          <a href="#">Forgot Password?</a>
        </RememberForgot>

        <Button type="submit">Login</Button>
      </form>

      <RegisterLink>
        <p>
          Don't have an account?
          <a href="/register">Register</a>
        </p>
      </RegisterLink>
    </LoginBox>
  );
};

export default Login;
