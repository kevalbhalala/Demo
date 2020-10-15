import React, { Component } from 'react';
import { Text, View,StyleSheet,Image, ScrollView, } from 'react-native';
import data from './Data';

class Latest extends Component {
    state={
        data:data
    }
latest =()=>{
      return this.state.data.map(singleData =>{
        return(
           <View key={singleData.id} style={{alignItems: 'center',padding:5}}>
               <Image source={{uri: singleData.user_avatar}} style={{height:50,width:50,borderRadius:25,marginHorizontal:20}} />
               <Text>{singleData.username}</Text>
               
           </View> 
        )
      })
    }
    render() {
        return (
            <View>
            <View>
          <Text style={{fontSize:22, paddingTop:15 ,fontWeight:'bold'}}>Latest Members</Text>
            </View>
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {this.latest()}
                </ScrollView>
             </View>
             </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#a4b0be',
        marginVertical:8,
        borderRadius:8,
        borderBottomColor:8,
        paddingVertical:8,
    }
})
export default Latest;