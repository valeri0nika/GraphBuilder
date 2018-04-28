import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';

class ChartComponent extends Component {
  constructor() {
     super();

     this.state = {
       data: {
         dataSets: [{
           values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 114}, {y: 109}, {y: 105}, {y: 99}, {y: 95}],
           label: 'Bar dataSet',
           config: {
             color: processColor('teal'),
             barSpacePercent: 40,
             barShadowColor: processColor('lightgrey'),
             highlightAlpha: 90,
             highlightColor: processColor('red'),
           }
         }],
       }
     };
   }

   handleSelect(event) {
     let entry = event.nativeEvent
     if (entry == null) {
       this.setState({...this.state, selectedEntry: null})
     } else {
       this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
     }

     console.log(event.nativeEvent)
   }


   render() {
     const dataForShwoing = {
       data: {
         dataSets: [{
           values: this.props.data,
           label: 'Bar dataSet',
           config: {
           color: processColor('#d0d0e2'),
           barSpacePercent: 40,
           barShadowColor: processColor('lightgrey'),
         }
         }],
       },
       xAxis: {
        valueFormatter: this.props.countries,
        granularityEnabled: true,
        granularity : 1,
      }
     };

     return (
       <View style={{flex: 1}}>

         <View style={styles.container}>
           <BarChart
             style={styles.chart}
             data={dataForShwoing.data}
             animation={{durationX: 2000}}
             legend={this.state.legend}
             gridBackgroundColor={processColor('#ffffff')}
             drawBarShadow={false}
             drawValueAboveBar={true}
             drawHighlightArrow={true}
             xAxis={dataForShwoing.xAxis}
             // onSelect={this.handleSelect.bind(this)}
             // highlights={this.state.highlights}
             onChange={(event) => console.log(event.nativeEvent)}
           />
         </View>
       </View>
     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: 100,
    padding: 20,
  },
  chart: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});

export default ChartComponent;
