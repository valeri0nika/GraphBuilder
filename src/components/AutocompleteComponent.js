import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, TextInput
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

class AutocompleteComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedItem: '',
      inputValue: '',
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
        this.setState({data: myJson});
      }.bind(this));
  }

  render() {
    return (
      <Autocomplete
          inputContainerStyle={{paddingLeft: 4, paddingRight: 4}}
          style={{height: 40, width: 300}}
          renderSeparator={_ => <View
            style={{height: 1, backgroundColor: '#9E9E9E'}}
          />}
          renderItem={obj => (
            <View
              style={{padding: 4}}>
              <TouchableOpacity onPress={() => {
                this.setState({selectedItem: obj.term, inputValue: obj.term, data: []});
                this.props.callback(obj);
              }}>
                <Text>{obj.term}</Text>
              </TouchableOpacity>
            </View>)
          }
          data={this.state.data}
          renderTextInput={_ => (
              <TextInput
                style={{height: 50}}
                value={this.state.inputValue}
                onChangeText={text => {
                  this.setState({inputValue: text});
                  this.queryTextHasBeenChanged(text);
                }}
              />)
          }
       />);
  }
}

export default AutocompleteComponent;
