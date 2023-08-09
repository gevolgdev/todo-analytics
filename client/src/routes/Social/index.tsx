import { useState } from 'react';
import { Menu } from '../../components/Home';
import { Container, Search, SearchResults } from './style';
import { HiMenuAlt2 } from 'react-icons/hi';
import { MdSearch } from 'react-icons/md';
import { GrFormClose } from 'react-icons/gr';
import systemSearch from '../../utils/searchSystem';
import UserResults from '../../components/Social/UserResults';

const Social = () => {

  const [ menu, setMenu ] = useState<boolean>(false);
  const { searching, handleSearch, changeSearch, resultSearch } = systemSearch();

  return (
    <Container>
      { menu && <Menu setMenu={setMenu}/> }

      <header>
        <button className="menuButton" onClick={ () => setMenu(true) }>
          <HiMenuAlt2/>
        </button>

        <Search onClick={searching ? undefined : handleSearch}>
          <MdSearch/>
          { searching && (
            <>
              <input type='text' onChange={changeSearch} placeholder='Procure um amigo'/>
              <button onClick={handleSearch}><GrFormClose/></button>
            </>
          ) }
        </Search>
      </header>

      { searching && 
        <SearchResults>
          {resultSearch.map((user, index) => (
            <UserResults {...user} key={index}/>
          ))}
        </SearchResults>
      }
    </Container>
  );
};

export default Social;