import React from 'react';
import {View, Image} from 'react-native';
import {Text, Card} from '@ui-kitten/components';

const PokemonCard = ({name, picture, data}) => {
  return (
    <Card status="primary" style={styles.container}>
      <Text style={styles.centeredText}>{name}</Text>
      <View style={styles.pictureWrapper}>
        <Image style={styles.picture} source={picture} />
      </View>
      <View>
        <Text style={styles.centeredText}>Ataque: {data.attack}</Text>
        <Text style={styles.centeredText}>Defesa: {data.defense}</Text>
      </View>
    </Card>
  );
};

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  picture: {
    height: 150,
    width: 150,
  },
  pictureWrapper: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {textAlign: 'center'},
};

export default PokemonCard;
