import React from 'react';
import {TextInput, TouchableOpacity, View, KeyboardAvoidingView, StyleSheet, Alert, Text} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
import { render } from 'react-dom';

export default class BookRequestScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            userId: firebase.auth().currentUser.email(),
            bookName: "",
            reasonToRequest: "",

        }
    }

    createUniqueId = ()=>{
return Math.random().toString(36).substring(7);
    }

addRequest = (bookName, reasonToRequest) => {
    var userId = this.state.userId;
    var randomRequestId = this.createUniqueId();
    db.collection("requested_books").add({
        userId: userId,
        bookName: bookName,
        reasonToRequest: reasonToRequest,
        requestId: randomRequestId,
    })

this.setState({
bookName: '',
reasonTorequest: '',

})

render(
    Alert.alert("Book Requested Succesfully")
)

}

    render (){
        return(
            <View>
            <KeyboardAvoidingView>
            <TextInput style = {style.formTextInput}
                placeHolder = {"enterBookName"}
                onChangeText = {(
text
                )=>{
this.setState({
    bookName: text
})
                }}

value = {this.state.bookName}

            >
            </TextInput>
            <TextInput style = {style.formTextInput}
            multiline
            numberOfLines = {8}
            placeholder = {"Reason for request"}
            onChangeText = {(
                text
            )=>{
                this.setState({
                    reasonToRequest: text
                })
            }}
            value = {this.state.reasonToRequest}
            >
            </TextInput>
            <TouchableOpacity style = {styles.button}
            onPress = {
                ()=>{
                    this.addRequest(this.state.bookName, this.state.reasonToRequest)
                }
            }
            >
<Text>
    Request
</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, },
    button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )