import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

class AutocompleteComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  /**
  Request autocomplete options
   */
  queryTextHasBeenChanged(text) {
    fetch('http://0.0.0.0:5005/rest/auto/' + text)
      .then(function(response) {
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
      style={{height: 40, width: 300}}
      data={this.state.data}
      onChangeText={text => this.queryTextHasBeenChanged(text)}
       />);
  }
}

export default AutocompleteComponent;
