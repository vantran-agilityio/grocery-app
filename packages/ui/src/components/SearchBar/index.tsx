import { useCallback, useEffect, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

// Components
import { Input, SearchIcon } from '@components';

// Stores
import { useStore } from '@repo/stores';

interface IProps {
  currentSearchValue?: string;
  backgroundInputColor: string;
  onNavigateToSearch?: () => void;
}

const SearchBar = ({
  currentSearchValue = '',
  backgroundInputColor,
  onNavigateToSearch,
}: IProps) => {
  // Stores
  const addSearchItem = useStore.use.addSearchItem();
  const setCurrentSearchItem = useStore.use.setCurrentSearchItem();

  const [searchValue, setSearchValue] = useState(currentSearchValue);

  useEffect(() => {
    if (currentSearchValue) {
      setSearchValue(currentSearchValue);
    }
  }, [currentSearchValue]);

  const handleSearch = useCallback(
    (event: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
      const value = event.nativeEvent.text;
      if (value) {
        // Only add to history if value is not empty
        addSearchItem(value);
      }

      setCurrentSearchItem(value);

      if (onNavigateToSearch) onNavigateToSearch();
    },
    [addSearchItem, onNavigateToSearch, setCurrentSearchItem]
  );

  const handleSearchTextChange = useCallback((text: string) => {
    setSearchValue(text);

    if (!text) {
      setCurrentSearchItem('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Input
      icon={<SearchIcon />}
      placeholder="Search keywords.."
      value={searchValue}
      containerStyles={{
        backgroundColor: backgroundInputColor,
      }}
      onSubmitEditing={handleSearch}
      onChangeText={handleSearchTextChange}
    />
  );
};

export default SearchBar;
