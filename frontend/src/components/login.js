// ./frontend/src/components/login

import styled from "styled-components";

export const LoginBox = styled.div`
  max-width: 320px;
  padding: 30px;
  background-color: lightgreen;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;

  @media (max-width: 480px) {
    padding: 30px;
    max-width: 75%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.8em;
    margin-bottom: -10px;
    margin-top: 10px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin: 30px 0;
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
  top: 50%;
  color: #333;
  font-size: 1em;
  pointer-events: none;
  transition: 0.4s;
  transform: translateY(-50%);

  ${Input}:focus + &,
  ${Input}:valid + & {
    top: -5px;
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
    font-size: 14px;
    padding: 0 7px 0 0;
  }
`;

export const Checkbox = styled.input`
  margin-right: -30px;

  @media (max-width: 480px) {
    margin-right: -50px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
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
