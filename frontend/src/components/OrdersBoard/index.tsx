// Styled-Components
import { Container, Title, OrderContainer } from './styles';

// Components
import { OrdersModal } from '../OrdersModal';

// Hooks
import { useState } from 'react';

// Utils
import { api } from '../../utils/api';

//Toasttify
import { toast } from 'react-toastify';

// Types
import { Order } from '../../types/Order';

interface OrderBoardContainerProps  {
  title: string;
  situation: string;
  orders: Order[];
  onRefreshOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ title, situation, orders, onRefreshOrder, onChangeOrderStatus }: OrderBoardContainerProps ) {

  const [isVisible, setIsVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleModalVisible(order: Order) {
    setIsVisible(true);
    setSelectedOrder(order);
  }

  function handleModalIsNotVisible() {
    setIsVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    if (!selectedOrder) {
      return;
    }

    setIsLoading(true);

    const newStatus = selectedOrder.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.patch(`/orders/${selectedOrder._id}`, { status: newStatus });

    toast.success(`O pedido da mesa ${selectedOrder.table} foi alterado com sucesso!`);

    onChangeOrderStatus(selectedOrder._id, newStatus);
    setIsLoading(false);
    setIsVisible(false);
  }

  async function handleDeleteOrder() {
    if (!selectedOrder) {
      return;
    }

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.delete(`/orders/${selectedOrder._id}`);

    toast.success(`O pedido da mesa ${selectedOrder.table} foi cancelado com sucesso!`);

    onRefreshOrder(selectedOrder._id);
    setIsLoading(false);
    setIsVisible(false);
  }

  return (
    <>
      <OrdersModal
        order={selectedOrder}
        visible={isVisible}
        onClose={handleModalIsNotVisible}
        onDeleteOrder={handleDeleteOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
      />

      <Container>
        <Title>
          <small style={{ marginRight: 10 }}>{title}</small>
          <small>{situation}</small>
          <span style={{ marginLeft: 10 }}>({orders.length})</span>
        </Title>

        {orders.length > 0 && (
          <OrderContainer>
            {orders.map((order) => (
              <button
                type='button'
                key={order._id}
                onClick={() => handleModalVisible(order)}
              >
                <small>Mesa {order.table}</small>
                <span>{order.products.length} pedidos</span>
              </button>
            ))}
          </OrderContainer>
        )}
      </Container>
    </>
  );
}
