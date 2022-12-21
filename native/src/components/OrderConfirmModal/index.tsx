// Styled-Components
import { Modal } from 'react-native';
import { Container, OkButton } from './styles';

// Components
import { Text } from '../Text';

// Images
import { CheckCircle } from '../../assets/Icons/CheckCircle';

interface OrderConfirmModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmModal({ visible, onOk }: OrderConfirmModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <Container>
        <CheckCircle/>
        <Text size={20} weight='600' style={{ marginTop: 5 }}>
          Pedido confirmado com sucesso!
        </Text>

        <OkButton onPress={onOk}>
          <Text>OK</Text>
        </OkButton>
      </Container>
    </Modal>
  );
}
