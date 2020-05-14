/* eslint-disable prettier/prettier */
import React from 'react';
import * as eva from '@eva-design/eva';
import {SafeAreaView, View} from 'react-native';
import { Button, Text, ApplicationProvider, Input } from '@ui-kitten/components';

import PokemonCard from './src/components/PokemonCard';
import { getPokemon } from './src/apis/pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchPokemonText: '',
    };
  }

  render() {
    const { pokemon, searchPokemonText } = this.state;
    console.log('pokemon: ', pokemon);
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={{flex:1}}>
          <View style={estilos.container}>
            <Input
              placeholder='Digite um pokemon SEU(UA) LIND@'
              value={searchPokemonText}
              onChangeText={nextValue => this.setState({searchPokemonText: nextValue.toLowerCase()})}
            />
            <Button
              status="warning"
              onPress={() => getPokemon(searchPokemonText, (pokemon) => this.setState({pokemon}))}
            >
              {evaProps => <Text {...evaProps}>BUSCAR POKEMONS</Text>}
            </Button>
            {pokemon && <PokemonCard
              name={pokemon.name}
              picture={{uri: pokemon.sprites.front_default}}
              data={{attack: 10, defense:20}}
            />}
          </View>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const estilos = {
  container: {
    flex: 1,
    margin: 20,
  },
};

export default App;
