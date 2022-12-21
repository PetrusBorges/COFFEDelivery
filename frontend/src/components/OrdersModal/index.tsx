// Styled-Components
import { Overlay, ModalBody, OrderDetails, Actions } from './styles';

// Images
import CloseIcon from '../../assets/images/close-icon.svg';

// Types
import { Order } from '../../types/Order';

// Utils
import { formatCurrency } from '../../utils/formatCurrency';

interface OrdersModalProps {
  order: Order | null;
  visible: boolean;
  onClose: () => void;
  onDeleteOrder: () => Promise<void>;
  onChangeOrderStatus: () => Promise<void>;
  isLoading: boolean;
}

export function OrdersModal({ order, visible, onClose, onChangeOrderStatus, onDeleteOrder, isLoading }: OrdersModalProps ) {

  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button onClick={onClose}>
            <img src={CloseIcon} alt="CloseIcon" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>{order.status === 'WAITING' && '⏱'}</span>
            <span>{order.status === 'IN_PRODUCTION' && '☕'}</span>
            <span>{order.status === 'DONE' && '✅'}</span>

            <strong>{order.status === 'WAITING' && 'Em espera'}</strong>
            <strong>{order.status === 'IN_PRODUCTION' && 'Em produção'}</strong>
            <strong>{order.status === 'DONE' && 'Pronto'}</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt='imagePath'
                  width='56'
                  height='56'
                />
                <span className='quantity'>{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              type='button'
              className='primary'
              onClick={onChangeOrderStatus}
              disabled={isLoading}
            >
              <span>
                {order.status === 'WAITING' && '☕'}
                {order.status === 'IN_PRODUCTION' && '✅'}
              </span>

              <strong>
                {order.status === 'WAITING' && 'Iniciar produção'}
                {order.status === 'IN_PRODUCTION' && 'Concluir pedido'}
              </strong>
            </button>
          )}

          <button
            type='button'
            className='secondary'
            onClick={onDeleteOrder}
            disabled={isLoading}
          >
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
