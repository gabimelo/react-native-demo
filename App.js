import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './PizzaTranslator';

export default class App extends React.Component {
  counter = 0

  render() {
    let counter = 0
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>{counter}</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <PizzaTranslator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
