import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.style[100]};
`;

export const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    border: none;
    padding: 10px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.style[100]};
    transition: all 0.2s ease;

    & + button {
      margin-top: 12px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.style[200]};
    }
  }
`;
