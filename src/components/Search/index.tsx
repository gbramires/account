import React from 'react';

import {Input} from './styles';

interface ISearchProps {
  placeholder: string;
}

const Search: React.FC<ISearchProps> = ({placeholder}) => {
  return <Input placeholder={placeholder} />;
};

export default Search;
