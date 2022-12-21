import styled from 'styled-components';

export const Container = styled.header`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.style[100]};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InforContainer = styled.div`
  width: 550px;

  h1 {
    font-size: 26px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.style[500]};
  }

  > small {
    font-size: 16px;
    color: ${({ theme }) => theme.style[500]};
  }
`;

export const Info = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;

  .containerInfo {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid white;
    border-radius: 8px;
    padding: 10px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }

    > small {
    font-size: 14px;
    color: ${({ theme }) => theme.style[600]};
  }
  }
`;
