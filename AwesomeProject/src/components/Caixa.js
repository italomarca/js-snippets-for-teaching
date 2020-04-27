import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const Caixa = ({cor, flex}) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: cor,
        margin: 1,
        flex: flex,
      }}
    />
  );
};

export default Caixa;
