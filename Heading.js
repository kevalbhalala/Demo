import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

class Heading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{
                    textAlign:'center',
                    fontSize:15,
                    marginVertical:15,

                }}>Basic Demo UI</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
container:{
backgroundColor:'#ff7550',
borderRadius:8,
elevation:6
}

})
export default Heading;