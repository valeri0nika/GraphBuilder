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
    this.onClearPress = this.onClearPress.bind(this);
  }

  /**
  Request autocomplete options
   */
  queryTextHasBeenChanged(text) {
    fetch('http://ec2-18-184-132-140.eu-central-1.compute.amazonaws.com:3000/rest/auto/' + text)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        this.setState({data: myJson});
      }.bind(this));
  }

  onClearPress() {
    this.setState({
      inputValue: '',
      data: []
    });
  }

  render() {
    return (
      <View>
      <Autocomplete
          inputContainerStyle={{paddingLeft: 4, paddingRight: 4, marginLeft: 20, marginRight: 20}}
          style={{height: 40, width: 300}}
          renderSeparator={_ => <View
            style={{height: 1, backgroundColor: '#ffffff', marginLeft: 20, marginRight: 20}}
          />}
          renderItem={obj => (
            <View
              style={{padding: 4, marginLeft: 20, marginRight: 20, backgroundColor: '#ffffff'}}>
              <TouchableOpacity onPress={() => {
                this.setState({selectedItem: obj.term, inputValue: obj.term, data: []});
                this.props.callback(obj);
              }}>
                <Text style = {{fontSize: 18}}>{obj.term}</Text>
              </TouchableOpacity>
            </View>)
          }
          data={this.state.data}
          renderTextInput={_ => (
              <View style={{backgroundColor: '#ffffff', flexDirection: 'row'}}>
                <TextInput
                  style={{height: 50, marginLeft: 40, flex: 1 }}
                  value={this.state.inputValue}
                  onChangeText={text => {
                    this.setState({inputValue: text});
                    this.queryTextHasBeenChanged(text);
                  }}
                />

                { this.state.inputValue !== "" ?
                <TouchableOpacity
                  onPress={this.onClearPress}
                  style={styles.clearButtonStyle}>
                    <Text style={{color: 'gray', fontWeight: 'bold'}}>
                      Очистити
                    </Text>
                 </TouchableOpacity>
                 : <View />}
            </View>)
          }
       />
       </View>
     );
  }
}

const styles = StyleSheet.create({
  clearButtonStyle: {
    height: 50,
    width: 100,
    marginLeft: 50,
    justifyContent: 'center'
  }
});

export default AutocompleteComponent;
