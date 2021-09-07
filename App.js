/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [clicked, setClicked] = useState(0);

  const increment = () => {
    setCounter(prevCount => prevCount + 1);
    setClicked(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCounter(prevCount => prevCount - 1);
    setClicked(prevCount => prevCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{counter}</Text>
      <Text style={styles.clickedText}>Total button clicked {clicked}</Text>
      <View style={styles.btnContainer}>
        <Button onPress={increment} title="Increment" color="#038039" />
        <Text>...</Text>
        <Button onPress={decrement} title="Decrement" color="#fc0377" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 60,
    color: 'blue',
    fontWeight: 'bold',
  },
  clickedText: {
    fontSize: 20,
    color: 'grey',
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export default App;
