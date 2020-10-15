import React, { Component } from 'react';
import { Text, View,ImageBackground,StyleSheet,FlatList,TouchableHighlight,Alert} from 'react-native';
import data from './Data';
import LinearGradient from 'react-native-linear-gradient';

class Mosiac extends Component {
    constructor()
    {
        super(),
    this.state={
        data:data
    } 
}
latest =()=>{
   return (
    <FlatList 
    data={this.state.data}
    numColumns={2}
    renderItem={({item})=>{
      return (
        <View key={item.id} style={{height:250, margin:2, flexBasis:'48%'}}>
                     <ImageBackground imageStyle={{borderRadius:10}} source={{uri: item.image_link}} style={{height:250}}>
                     <LinearGradient start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} colors={['rgba(0,0,0,.1)','rgba(0,0,0,1)']} style={{flexDirection:'row' ,borderRadius:10 ,position:'absolute', top:0, left:0, right:0, bottom:0, }} >
                      <Text style={{
                          fontSize:15,
                          fontWeight:'bold',
                          color:'#fff',
                          paddingLeft:15,
                          alignSelf:'flex-end',
                          paddingBottom:5,
                      }}>{item.headline}</Text>
                      </LinearGradient>
                      </ImageBackground>
                  </View>
    )
   
}
   
}
/>

)    

}   
    //     return this.state.data.map(singleData =>{
    //       return(
    //          <View key={singleData.id} style={{height:250, margin:2, flexBasis:'48%'}}>
    //              <ImageBackground  source={{uri: singleData.image_link}} style={{height:250}}>
    //              <Text style={{
    //                  fontSize:15,
    //                  fontWeight:'bold',
    //                  color:'#fff',
    //                  paddingLeft:15,
    //              }}>{singleData.headline}</Text>
    //              </ImageBackground>
    //          </View> 
    //       )
    //     })

    render() {
        return (
            <View style={styles.container}>
                {this.latest()}
                 
          <TouchableHighlight onPress={() => Alert.alert("ok")} style={{alignItems: 'center', width:50, height:50,backgroundColor:'red'}}>
              <Text>
                  prsee me
              </Text>
            </TouchableHighlight> 
            </View>
        )
    }
}
const  styles=StyleSheet.create({
    container:{
        height:800,
        flexWrap:'wrap',
        flexDirection:'row',
        overflow:'hidden',
        justifyContent:'space-between',
    }
})
export default Mosiac;