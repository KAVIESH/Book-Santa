import React from 'react';
import {Header, Icon, Badge} from 'react-native-elements';
import {View, Text, StyleSheet, Alert} from 'react-native';
const myHeader = props => {
    return(
        <Header
        centerComponent = {{text: props.title, style: {color: '#90A5A9', fontSize:20,fontWeight:"bold",}}}
        backgroundColor = "red"
        >

        </Header>
    )
}

export default myHeader