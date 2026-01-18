import styled from "styled-components";

export const Form = styled.form`
  margin: 24px 0;
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 12px;
  width: 520px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 2px solid ${({ $hasValue }) => ($hasValue ? "#111" : "#cbd5e1")};
  outline: none;
`;

export const Button = styled.button`
  padding: 12px 18px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 2px solid #111;
  background: white;
  cursor: pointer;
  font-weight: 600;
`;
