import styled from 'styled-components/native';

export const ProductContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ProtuctImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 8px;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const AddToCartButtom = styled.TouchableOpacity``;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(204, 204, 204, 0.3);
  margin: 24px 0;
`;
