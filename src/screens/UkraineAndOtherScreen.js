import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, TextInput
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import AutocompleteComponent from '../components/AutocompleteComponent'

class UkraineAndOtherScreen extends Component {

  requestDataForChart(obj) {
    // start show loader
    // TODO: start scrolling

    const chartUrl = 'http://localhost:3000/rest/graph3/data?gnum=202&year=2014&cmdcode=73'
    // console.log(chartUrl + obj.code);
    // fetch(chartUrl + obj.code)
    fetch(chartUrl)
      .then(function(response) {
        // parse data to json format
        return response.json();
      })
      .then(function(myJsonArr) {
        // prepare data for visualization
        console.log("data response");
        console.log(myJsonArr);

        const reduceFunction = (accumulator, currentValue) => {
          const intValue = parseInt(currentValue.contract_volume);
          if (accumulator[currentValue.country_to]) {
            accumulator[currentValue.country_to] += intValue;
          } else {
            accumulator[currentValue.country_to] = intValue;
          }
          return accumulator;
        };

        const dictValue = myJsonArr.data.filter(item => item.country_from === 'Україна')
          // TODO: need to tranform to common currency
          .reduce(reduceFunction, {})

        console.log(dictValue);
      }.bind(this));
  }

  render() {
    return (
      <View>
        <Text>Select product</Text>
        <AutocompleteComponent
          callback={obj => { this.requestDataForChart(obj) } }
        />
      </View>
    )
  }
}



export default UkraineAndOtherScreen;
