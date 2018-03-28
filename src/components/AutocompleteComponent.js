import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

class AutocompleteComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedItem: '',
    };
  }

  /**
  Request autocomplete options
   */
  queryTextHasBeenChanged(text) {
    console.log(text);
    console.log('http://0.0.0.0:5005/rest/auto/' + text);
    fetch('http://0.0.0.0:5005/rest/auto/' + text)
      .then(function(response) {
        console.log("Autocomple Response:");
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        const dataArray = myJson.map(x => x.term);
        this.setState({data: dataArray});
        console.log(dataArray);
      }.bind(this));
  }

  render() {
    return (<Autocomplete
            inputContainerStyle={{paddingLeft: 4, paddingRight: 4}}
            style={{height: 40, width: 300}}
            renderSeparator={_ => <View
              style={{height: 1, backgroundColor: '#9E9E9E'}}
            />}
            renderItem={text => (
              <View
                style={{padding: 4}}>
                <TouchableOpacity onPress={() => this.setState({selectedItem: text})}>
                  <Text>{text}</Text>
                </TouchableOpacity>
              </View>)
            }
            data={this.state.data}
            onChangeText={text => this.queryTextHasBeenChanged(text)}
       />);
  }
}

export default AutocompleteComponent;
