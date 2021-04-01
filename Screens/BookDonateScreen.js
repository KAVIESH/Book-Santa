import React from 'react';
import {TextInput, TouchableOpacity, View, KeyboardAvoidingView, StyleSheet, Alert, Text, FlatList, ListItem} from 'react-native';
import db from '../Config';
import firebase from'firebase';
import { render } from 'react-dom';

export default class BookDonateScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            requestedBookList: []
        }

this.requestRef = null

    }

getRequestedBookList = ()=>{
    this.requestRef = db.collection("Requested_Books")
    .onsnapshot((snapshot)=>{
        var requestedBookist = snapshot.docs.maps(document => document.data()
        
        )
        this.setState({
            requestedBookList: requestedBookList
        })
    })
}

componentWillUnmount(){
    this.requestRef();
}


componentDidMount(){
this.getRequestedBookList();
}
keyExtractor = (item, index)=> index.toString()
renderItem = ({ item, i})=>{
return(
    <ListItem
    key = {i}
    title = {item.book_name}
    subtitle = {item.reason_to_request}
    titleStyle = {{color: 'black', fontWeight: 'bold'}}
    rigthElement = {
        <TouchableOpacity style = {styles.button}>
            <Text>
                View
            </Text>
        </TouchableOpacity>
    }
bottomDivider

   />

)
}

    render(){
    return(
        <View>
            <View>
                {
                    this.state.requestedBookList.length === 0
                    ?(
                        <View>
                            <Text>
                                List of all Requested Books
                            </Text>
                        </View>
                    )

:(
    <FlatList
    keyExtractor = {this.keyExtractor}
    data = {this.state.requestedBookList}
    renderItem = {this.renderItem}
    >
        
    </FlatList>
)

                }
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )