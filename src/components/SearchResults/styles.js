import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.searchBg};
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const Title = styled.h2`
  margin: 0 0 16px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 16px;
  box-shadow: 0 2px 10px ${({ theme }) => theme.colors.shadow};
`;

export const ActionButton = styled.button`
  margin-top: 10px;
  padding: 10px 12px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  color: white;
  background: ${({ theme, $variant }) =>
    $variant === "danger" ? theme.colors.danger : theme.colors.success};
`;
