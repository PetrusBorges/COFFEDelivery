// Stled-Components
import { FlatList } from 'react-native';
import { CategoryContainer, Icon } from './styles';

// Components
import { Text } from '../Text';

// Hooks
import { useState } from 'react';

// Types
import { Category } from '../../types/Category';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {

  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectedCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24, alignItems: 'center' }}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {

        const isSelected = selectedCategory === category._id;

        return (
          <CategoryContainer onPress={() => handleSelectedCategory(category._id)}>
            <Icon>
              <Text weight='600' size={14} opacity={isSelected ? 1 : 0.5}>
                {category.name}
              </Text>
            </Icon>
          </CategoryContainer>
        );
      }}
    />
  );
}
