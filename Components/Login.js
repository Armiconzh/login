import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';

export default class Login extends Component{
	_onPressButton() {

    Alert.alert('You tapped the button!')

  }

    render(){
        return(

            <View style={styles.container}> 
                <Text style={styles.title}>LOGIN</Text>

                <Image
                    style={{width: 120, height: 120,marginLeft:135,marginTop:30}}
                    source={require('./1.jpg')}
                />
                
                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button onPress={() => {Alert.alert('You tapped the button!');}} style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
                title="Login"
                color="#add8e6"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:3,
    },

    title: {
        fontWeight: 'bold',
        fontSize : 48,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },
 



})