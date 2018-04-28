import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, TextInput
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import AutocompleteComponent from '../components/AutocompleteComponent'

class UkraineAndOtherScreen extends Component {
  static navigationOptions = {
    title: 'Product Selection',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: '#d0d0e2'
    },
  };

  requestDataForChart(obj) {
    // start show loader
    // TODO: start scrolling

    const chartUrl = 'http://localhost:3000/rest/graph3/data?gnum=202&year=2014&cmdcode='
    // const chartUrl = 'http://dyplomachart-env.guqvteptpb.eu-central-1.elasticbeanstalk.com/rest/graph3/data?gnum=202&year=2014&cmdcode=73'
    console.log(chartUrl + obj.code);
    fetch(chartUrl + obj.code)
    // fetch(chartUrl)
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
        this.props.navigation.navigate('ChartScreen', dictValue)
      }.bind(this));
  }

  render() {
    return (
      <View>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 20,
          marginBottom: 20,
          marginTop: 20
        }}> Please, select product</Text>
        <AutocompleteComponent
            callback={obj => { this.requestDataForChart(obj) }}
        />
      </View>
    )
  }
}



export default UkraineAndOtherScreen;
