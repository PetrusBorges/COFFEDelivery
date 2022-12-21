// Styled-Components
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

// Components
import { Text } from '../Text';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export function Button ({ children, onPress, disabled, isLoading }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled || isLoading}>
      {!isLoading && (
        <Text weight='600' color='#fff'>{children}</Text>
      )}
      {isLoading && (
        <ActivityIndicator
          color="#383535"
        />
      )}
    </Container>
  );
}
