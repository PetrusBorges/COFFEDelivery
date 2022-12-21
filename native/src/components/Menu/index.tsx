// Stled-Components
import { FlatList } from 'react-native';
import { ProductContainer, ProtuctImage, ProductActions, AddToCartButtom, Separator } from './styles';

// Components
import { Text } from '../Text';

//Images
import { PlusCircle } from '../../assets/Icons/PlusCircle';

// Utils
import { formatCurrency } from '../../utils/formatCurrency';

// Types
import { Product } from '../../types/Products';

interface MenuProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function Menu({ products, onAddToCart }: MenuProps) {
  return (
    <FlatList
      ItemSeparatorComponent={Separator}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      data={products}
      keyExtractor={ product => product._id}
      renderItem={({ item: product }) => {

        return (
          <ProductContainer>
            <ProtuctImage
              source={{
                uri: `http://192.168.1.5:3001/uploads/${product.imagePath}`
              }}
            />

            <Text
              weight='600'
              size={14}
              style={{ textAlign: 'center', marginTop: 10, width: 250 }}>
              {product.name}
            </Text>

            <Text
              weight='600'
              color='#aaa5a5'
              size={14}
              style={{ textAlign: 'center', marginTop: 10, width: 250 }}>
              {product.description}
            </Text>

            <ProductActions>
              <Text style={{ marginRight: 10 }}>
                {formatCurrency(product.price)}
              </Text>

              <AddToCartButtom onPress={() => onAddToCart(product)}>
                <PlusCircle />
              </AddToCartButtom>
            </ProductActions>
          </ProductContainer>
        );
      }}
    />
  );
}
