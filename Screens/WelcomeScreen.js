import React from 'react';
import {TextInput, TouchableOpacity, StyleSheet, View, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../Config';
import firebase from 'firebase';
 
export default class WelcomeScreen extends React.Component {
constructor(){
    super();
    this.state = {
        emailId: '',
        password: '',
        firstName: '',
        lastName: '',
        contact: '',
        Address: '',
        confirmPassword: '',
        isModalVisible: false,
    }
}

login = (emailId, password)=>{
    firebase.auth().signInWIthEmailAndPassword(emailId, password).then(
    ()=>{
return(
    Alert.alert("Successfully Logged In")
)
    }
    )
    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return(
            Alert.alert(errorMessage)
       
            )
    })
        
    }



signUp = (emailId, password, confirmPassword)=>{
    if (password !== confirmPassword) {
        return(
            Alert.alert("The password entered do not match")
        )
    }
    else{

    
    firebase.auth().createUserWithEmailAndPassword(emailId, password).then(()
        =>{
db.collection('users').add({
    first_name: this.state.firstName,
    last_name: this.state.last_name,
    phone_umber: this.state.phone_umber,
    adress: this.state.adress,
    username: this.state.emailId,
})

return(
    Alert.alert("User Added Sucessfully", '', [{text: 'Ok', onpress: ()=> this.setState({"isModalVisible": false})}])
)
        }
    )
.catch((error)=>{
    var errorCode = error.code;
    var errorMessage = error.message;
    return(
        Alert.alert(errorMessage)
    )

})
           
        }}

        showModel = ()=> {
            return(
                <Modal
                animationType = 'fade'
                transparent = {true}
                visible = {this.state.isModalVisible}
                >
                    <View>
                        <ScrollView>
                            <KeyboardAvoidingView>
                                <Text style = {styles.modalTitle}>
                                    Registration
                                    </Text>
                                    <TextInput 
                                    style = {styles.formextInput}
                                    placeHolder = {'firstName'}
                                    maxLength = {8}
                                    onChangeText = {
                                        (text)=>{
                                            this.setState({
                                                firstName: text
                                            })
                                        }
                                    }
                                    ></TextInput>

<TextInput style = {styles.formextInput}
placeHolder = {'lastName'}
maxLength = {8}
onChangeText = {(text)=>{
    this.setState({
        lastName: text
    })
}}
>
</TextInput>

<TextInput style = {styles.formextInput}
placeHolder = {'contact'}
maxLength = {10}
keyboardType = {'numeric'}
onChangeText = {
    (text)=>{
        this.setState({
            contact: text
        })
    }
}
></TextInput>

<TextInput style = {styles.formextInput}
placeHolder = {'adress'}
multiline = {'true'}
onChangeText = {
    (text)=>{
        this.setState({
            address: text
        })
    }
}
></TextInput>

<TextInput
     style = {styles.formextInput}
     placeholder = 'abcd@gmail.com'
     keyboardType = 'email-address'
     onChangeText = {(
         text
     )=> {
         this.setState({
             emailId: text
         })
     }}
     
     
     />

<TextInput
style = {
    styles.formextInput
}
placeholder = 'Enter Password'
secureTextEntry = {true}
onChangeText = {(
    text
)=>{
    this.setState({
        password: text
    })
}}
/>

<TextInput
style = {
    styles.formextInput
}
placeholder = 'Re-enter Password'
secureTextEntry = {true}
onChangeText = {(
    text
)=>{
    this.setState({
        confirmPassword: text
    })
}}
/>

<View>

<TouchableOpacity style = {styles.registerButton}
onPress = {(

)=>{
    this.signUp(this.state.emailId, this.state.password, this.state.confirmPassword)
}}>
<Text> Register </Text>
</TouchableOpacity>

</View>
<View>
    <TouchableOpacity style = {styles.cancelButton}
    onPress = {(

    )=>{
this.setState({
    isModalVisible: false
})
    }}>

        <Text>Cancel</Text>
        </TouchableOpacity>
</View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
                    </Modal>

            )
        }
    


render(){
    return(
      <View>
     <View>
         {this.showModel()}
     <TextInput
     style = {styles.loginBox}
     placeholder = 'abcd@gmail.com'
     keyboardType = 'email-address'
     onChangeText = {(
         text
     )=> {
         this.setState({
             emailId: text
         })
     }}
     
     
     />

<TextInput
style = {
    styles.loginBox
}
placeholder = 'Enter Password'
secureTextEntry = {true}
onChangeText = {(
    text
)=>{
    this.setState({
        password: text
    })
}}
/>

  <TouchableOpacity
  style = {styles.button}
  onPress = {(

  )=> {
      this.login(this.state.emailId, this.state.password)
  }}
  >

<Text>
    Login
</Text>

  </TouchableOpacity>

  <TouchableOpacity
  style = {styles.button}
  onPress = {(

  )=>{
      this.setState({
          isModalVisible: true
      })
  }}
  >
<Text>
    signUp
</Text>
  </TouchableOpacity>

     </View>
      </View>
    )
}
}

const styles = StyleSheet.create({
    loginBox: {
        width: 300,
        heigth: 40,
        borderWeigth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
    },

    button: {width: 300, heigth: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 25, backgroundColor: 'red', 
    shadowColor: "#000",     shadowOffset: {        width: 0,        height: 8,     },     
    shadowOpacity: 0.30,     shadowRadius: 10.32,     elevation: 16}

})