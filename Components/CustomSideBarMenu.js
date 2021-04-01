import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text } from 'react-navigation'
import WelcomeScreen from '../Screens/WelcomeScreen';
import {DrawerItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends React.Component{
    render(){
        return(
          

           
            <View style = {{flex: 1}}>
                <View style = {styles.drawerItemsContainer}>
<DrawerItems {...this.props}/>
</View>
                <View style = {styles.logOutContainer}>
<TouchableOpacity style = {styles.logOutButton}
onPress = {(

)=>{
    this.props.navigation.navigate('WelcomeScreen')
    firebase.auth().signOut()
}}
>
<Text style = {styles.logOutText}>Log Out</Text>
</TouchableOpacity>
                    </View>
                    </View>
        )
    }

}

const style = StyleSheet.create (
    {
        logOutContainer: {
            flex: 0.2,
            justifyContent: 'flex-end',
            paddingBottom: '30',
        },
        logOutButton: {heigth: 30, width: '100%', justifyContent: 'center', padding: 10, },

        logOutText: {fontSize: 30, fontWeigth: 'bold', },

        drawerItemsContainer: {flex: 0.8},
    }



)