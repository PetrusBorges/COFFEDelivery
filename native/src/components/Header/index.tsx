// Styled-Components
import { TouchableOpacity } from 'react-native';
import { Container, Content, OrderContainer, Table } from './styles';

// Components
import { Text } from '../../components/Text';

interface HeaderProps {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text>Bem vindo(a) ao</Text>
          <Text weight='700' size={24} style={{ marginTop: 5 }}>
          COFFE<Text size={24}>Delivery</Text>
          </Text>
        </>
      )}

      {selectedTable && (
        <Content>
          <OrderContainer>
            <Text size={24} weight='600'>
              Pedido
            </Text>

            <TouchableOpacity onPress={onCancelOrder}>
              <Text size={14} weight='600' color='#D73035'>
                Cancelar Pedido
              </Text>
            </TouchableOpacity>
          </OrderContainer>

          <Table>
            <Text color='#666' style={{ textAlign: 'center'}}>
              Mesa: {selectedTable}
            </Text>
          </Table>
        </Content>
      )}
    </Container>
  );
}
