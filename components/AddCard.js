import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput ,TouchableOpacity } from 'react-native'

class AddCard extends Component {


    render(){
        return(
            <View style= {styles.container}>
               <View style= {styles.subcontainer}>
                    <Text style = {styles.text} > Question </Text>
                    <TextInput   style = {styles.textinput} editable = {true} maxLength = {40} />
                </View>
                <View style= {styles.subcontainer}>
                    <Text  style = {styles.text} > Answer </Text>
                    <TextInput style = {styles.textinput} editable = {true} maxLength = {40}  />
                </View>
                <TouchableOpacity style={styles.button} >
                   <Text> Submit </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles=  StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
       
    },
    button:{
        backgroundColor:'blue',
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    subcontainer:{
         padding: 10,
       
    },
    text:{
        marginLeft: 70,
        marginRight: 70
    },
    textinput:{
        margin: 15,
        height: 40,
        width: 200,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
})

export default AddCard