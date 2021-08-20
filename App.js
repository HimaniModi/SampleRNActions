/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.message}>
        SampleRNActions shows how to use GitHub Actions in ReactNative Projects
        and how to work that.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default App;
