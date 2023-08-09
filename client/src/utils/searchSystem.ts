import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/redux/reducer';
import { EventProps, UserProps } from '../@types/types';

const systemSearch = () => {

  const [keywordSearch, setKeywordSearch] = useState<string>('');
  const [searching, setSearching] = useState<boolean>(false);
  const lists = useSelector((state: RootState) => state.socialSlice);

  const handleSearch = () => {
    setSearching(!searching);
    setKeywordSearch('');
  };

  const changeSearch = (event: EventProps) => {
    const { value } = event.target;
    setKeywordSearch(value);
  };

  let resultSearch: UserProps[] = lists.filter((item: UserProps) => {
    if(keywordSearch === '') return;
    return item.name.toLocaleLowerCase().includes(keywordSearch.toLocaleLowerCase());
  });
  
  return { searching, resultSearch, handleSearch, changeSearch };
};

export default systemSearch;