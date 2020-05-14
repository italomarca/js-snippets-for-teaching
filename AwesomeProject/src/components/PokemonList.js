import React from 'react';
import {ListItem, List} from '@ui-kitten/components';

const PokemonList = ({data}) => {
  const renderItem = ({item, index}) => <ListItem title={item.name} />;

  return <List data={data} renderItem={renderItem} />;
};

export default PokemonList;
