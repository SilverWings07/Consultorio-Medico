// ./frontend/src/components/home.js

import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightcyan;
  color: #333;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled(Link)`
  padding: 12px 24px;
  background-color: lightgreen;
  color: #333;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;