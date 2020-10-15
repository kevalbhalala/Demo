import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, FlatList,TouchableHighlight } from 'react-native';
import Heading from './Heading';
import Hero from './Hero';
import Latest from './Latest';
import Mosiac from './Mosiac';
import data from './Data';

class App extends Component {
state={
  data:data
}
  render() {
    return (
      <ScrollView>
      <View style={{flex:1,padding:5}}>
        <Heading/>
        <Hero/>
        <Latest/>
        <View>
          <Text style={{fontSize:22, fontWeight:'bold',paddingTop:10}}>Monday</Text>
        </View>
        <Mosiac/>
       
          
      </View>
      
      
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
rowStyle:{
  flexDirection:'row',
  borderRadius:6,
  backgroundColor:'#a4b0be'
}
})
export default App;