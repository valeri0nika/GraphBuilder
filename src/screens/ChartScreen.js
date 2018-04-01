import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, TextInput
} from 'react-native';
import ChartComponent from '../components/ChartComponent'

class ChartScreen extends Component {

  render() {
    const data = this.props.navigation.state.params;
    const sortedArr = Object.keys(data)
      .map(key => ({ [key]: data[key] }));
      .sort((a, b) => {
        console.log(Object.values(a)[0], Object.values(b)[0]);
        return Object.values(a)[0] - Object.values(b)[0]}
      )
      .reverse();
    const values = sortedArr.map(x => Object.values(x)[0])
    const keys = sortedArr.map(x => Object.keys(x)[0])

    return (
      <View style={{flex: 1}}>
        <ChartComponent
          style={{height: 300}}
          data={values}
          countries={keys}
        />
      </View>
    )
  }
}

export default ChartScreen;
