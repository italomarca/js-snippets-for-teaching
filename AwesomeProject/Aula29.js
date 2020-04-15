import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
function Cat(props) {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'Hungry' : 'full'}!
      </Text>
      <Text>
        I am {props.name}, and I am {isHungry ? 'Hungry' : 'full'}!
      </Text>
      <Text>
        I am {props.name}, and I am {isHungry ? 'Hungry' : 'full'}!
      </Text>
      <Text>
        I am {props.name}, and I am {isHungry ? 'Hungry' : 'full'}!
      </Text>
      <Text>
        I am {props.name}, and I am {isHungry ? 'Hungry' : 'full'}!
      </Text>
      <Text>
        I am {props.name}, and I am {isHungry ? 'Hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={'Pour me some milk, please'}
      />
    </View>
  );
}
export default function Cafe() {
  return (
    <View>
      <Text>
        isso aqui é um texto isso aqui é um texto isso aqui é um texto isso aqui
        é um texto isso aqui é um texto isso aqui é um texto
      </Text>
      <Cat name="Munkustrap" />
      <Cat name="Spot" />
    </View>
  );
}
