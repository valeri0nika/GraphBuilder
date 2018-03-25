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
import ChartComponent from './src/components/ChartComponent';


export default class App extends Component<Props> {
  render() {
    return (
        <ChartComponent style={{height: 300, width: 300}}/>
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
