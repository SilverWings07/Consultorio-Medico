// ./frontend/src/components/login

import styled from "styled-components";

export const LoginBox = styled.div`
  width: 400px;
  height: 450px;
  padding: 40px;
  margin: 30px auto;
  background: seaGreen;
  border-radius: 20px;
  text-align: center;

  @media (max-width: 480px) {
    padding: 30px;
    margin: 30px auto;
    max-width: 85%;
  }
`;

export const Title = styled.h2`
  color: #333;
  
  @media (max-width: 480px) {
    font-size: 1.8em;
    margin-bottom: -10px;
    margin-top: 10px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin: 40px auto;
  border-bottom: 2px solid #fff;
`;

export const Icon = styled.span`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  font-size: 1.2em;
  line-height: 57px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1em;
  color: #fff;

  &:focus {
    border-color: #5c67f2;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 10px;
  font-size: 14px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;

  ${Input}:focus + &,
  ${Input}:valid + & {
    top: -20px;
  }
`;

export const RememberForgot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 16px;

  a {
    text-decoration: none;
  }

  a:hover {
    color: blue;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    font-size: 13px;
  }
`;

export const Checkbox = styled.input`
  margin-right: -30px;

  @media (max-width: 480px) {
    margin-right: -10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin: 5px;
  background-color: #5c67f2;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    width: 85%;
  }
`;

export const RegisterLink = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;

  a {
    color: blue;
    text-decoration: none;
    font-weight: 500;
    padding-left: 10px;
  }

  a:hover {
    text-decoration: underline;
  }
`;