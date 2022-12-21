import styled from 'styled-components/native';

export const Item = styled.View`
  padding: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 6px;
`;

export const QuantityContainer = styled.View`
  min-width: 20px;
  margin-left: 12px;
`;

export const ProductDetails = styled.View`
  margin-left: 12px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Summary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalContainer = styled.View`
  max-width: 150px;
  margin-right: 32px;
`;

