/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AutocompleteComponent from './src/components/AutocompleteComponent';
import ChartComponent from './src/components/ChartComponent';
import RootStack from './src/route/Route';

export default class App extends Component<Props> {
  searchData(){}
  render() {
    return (
        <RootStack />
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
  searchScreenButton:{
    marginRight:40,
    marginLeft:10,
    paddingBottom:10,
    backgroundColor: '#99ccff',
    borderRadius:10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText:{
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center'
  }
});
