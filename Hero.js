import React, { Component } from 'react';
import { Text, StyleSheet, View,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
 
class Hero extends Component {
    render() {
        return (
            <View style={{marginTop:10}}>
                <ImageBackground imageStyle={{borderRadius:10}} style={{height:250}} source={{uri: "https://firebasestorage.googleapis.com/v0/b/mytry-bea8d.appspot.com/o/thumb-10.jpg?alt=media&token=9c9a3f0a-fb7c-4588-b5e3-412554f0a6b4"}}>
                <LinearGradient start={{x: 0.1, y: 0.6}} end={{x: 0.1, y: 1}} colors={['rgba(0,0,0,.1)','rgba(0,0,0,1)']} style={{flexDirection:'row' ,borderRadius:10 ,position:'absolute', top:0, left:0, right:0, bottom:0, }} >
                <Text style={{
                    fontSize:22,
                    fontWeight:"bold",
                    color:"#fff",
                    alignSelf:'flex-end',
                    paddingLeft:20,
                    paddingBottom:20
                }}>Booba on fire in his new Gotham </Text>
                </LinearGradient>
                </ImageBackground>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({})
export default Hero;