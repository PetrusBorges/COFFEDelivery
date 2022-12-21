// Styled-Components
import { FlatList, TouchableOpacity } from 'react-native';
import { Item, ProductContainer, Image, QuantityContainer, ProductDetails, Actions, Summary, TotalContainer } from './stytles';

// Components
import { Text } from '../Text';
import { Button } from '../Button';
import { OrderConfirmModal } from '../OrderConfirmModal';

// Images
import { MinusCircle } from '../../assets/Icons/MinusCircle';
import { PlusCircle } from '../../assets/Icons/PlusCircle';

// Types
import { CartItem } from '../../types/Cart';
import { Product } from '../../types/Products';

// Hooks
import { useState } from 'react';

// Utils
import { formatCurrency } from '../../utils/formatCurrency';
import { api } from '../../utils/api';

interface CartProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
  selectedTable: string;
}

export function Cart({ cartItems, onAdd, onDecrement, onConfirmOrder, selectedTable }: CartProps) {

  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  function handleOrderOk() {
    setIsModalVisible(false);
    onConfirmOrder();
  }

  async function handleConfirmOrder() {

    setIsLoading(true);

    const payload = {
      table: selectedTable,
      products: cartItems.map((cartItem) => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity,
      }))
    };

    await new Promise(resolve => setTimeout(resolve, 1000));
    await api.post('/orders', payload);

    setIsLoading(false);
    setIsModalVisible(true);
  }

  return (
    <>
      <OrderConfirmModal
        visible={isModalVisible}
        onOk={handleOrderOk}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          showsVerticalScrollIndicator={false}
          keyExtractor={ cartItems => cartItems.product._id }
          style={{ maxHeight: 100, marginBottom: 20 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `http://192.168.1.5:3001/uploads/${cartItem.product.imagePath}`
                  }}
                />

                <QuantityContainer>
                  <Text size={14} color='#666'>
                    {cartItem.quantity}x
                  </Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size={14} weight='600'>{cartItem.product.name}</Text>
                  <Text size={14} color='#666' style={{ marginTop: 4 }}>{formatCurrency(cartItem.product.price)}</Text>
                </ProductDetails>
              </ProductContainer>

              <Actions>
                <TouchableOpacity
                  onPress={() => onAdd(cartItem.product)}
                >
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ marginLeft: 20 }}
                  onPress={() => onDecrement(cartItem.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}

      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color='#666'>Total</Text>
              <Text size={20} weight='600'>{formatCurrency(total)}</Text>
            </>
          ) : (
            <Text color='#999'>
              Seu carrinho está vazio
            </Text>
          )}
        </TotalContainer>

        <Button
          disabled={cartItems.length === 0}
          onPress={handleConfirmOrder}
          isLoading={isLoading}
        >
          {cartItems.length > 0 ? 'Confirmar Pedido' : 'Seu Carrinho está vazio'}
        </Button>
      </Summary>
    </>
  );
}
