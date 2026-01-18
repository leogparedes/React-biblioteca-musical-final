import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.headerBg};
  color: ${({ theme }) => theme.colors.headerText};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 42px;
  letter-spacing: 1px;
`;
