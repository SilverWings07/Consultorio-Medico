// ./frontend/src/components/register

import styled from "styled-components";

export const RegistroContainer = styled.div`
  width: 500px;
  padding: 40px;
  margin: 100px auto 30px;
  background: lightGreen;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 480px) {
    width: 350px;
    padding: 30px;
    margin: 85px auto;
  }
`;

export const Title = styled.h2`
  color: #222;
  margin-bottom: 30px;
  
  @media (max-width: 480px) {
    font-size: 1.5em;
    margin-bottom: 25px;
    margin-top: 10px;
  }
`;

export const RegistroForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 10px auto;
`;

export const Label = styled.label`
  display: flex;
  color: #222;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const BtnPrimary = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;