import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

class Jogo extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Eu sou um contador de votos</Text>
        <Button
          onPress={() => console.log('Fui pressionado')}
          title="Me pressione"
        />
      </SafeAreaView>
    );
  }
}

const styles = {
 
};

export default Jogo;
