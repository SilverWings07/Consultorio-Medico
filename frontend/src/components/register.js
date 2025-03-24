// ./frontend/src/components/register

import styled from "styled-components";

export const RegistroContainer = styled.div`
  max-width: 500px;
  padding: 30px;
  background-color: lightgreen;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  
  @media (max-width: 768px) {
    max-width: 75%;
    padding: 30px;
    margin: 10px auto;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 25px;
    margin-top: 0px;
  }
`;

export const RegistroForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: -10;
  }
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  @media (max-width: 768px) {
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
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;