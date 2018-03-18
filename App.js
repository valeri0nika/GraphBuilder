/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AutocompleteComponent from './src/components/AutocompleteComponent';


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <AutocompleteComponent style={{padding: 30}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
