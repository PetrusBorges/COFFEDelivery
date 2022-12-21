import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({ disabled }) => disabled ? '#999' : '#584227'};
  padding: 14px 24px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
