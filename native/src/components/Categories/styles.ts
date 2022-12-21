import styled from 'styled-components/native';

import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const CategoryContainer = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  padding: 10px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`;
