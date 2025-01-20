import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    ToastAndroid
  } from "react-native";
  import {auth} from '../firebase/firebase-config';
  import { useNavigation } from "@react-navigation/native";
  import { signInWithEmailAndPassword } from 'firebase/auth';
export default function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async ()=>{
      console.log("clicked");
      if(email && password){
        try {
          await signInWithEmailAndPassword(auth, email, password);
          ToastAndroid.show('Login successful', ToastAndroid.SHORT);
        } catch (error) {
          console.log(error.message);
          ToastAndroid.show('Invalid credentials', ToastAndroid.SHORT);
        }
      }
    }

  return (
    <ScrollView style={styles.main_container}>
    <View style={styles.sub_container} >
      <View style={{ marginBottom: 50 }}>
   

   <Text style={styles.header_text}>Sign In..</Text>
   <Text style={styles.sub_header_text}>Let's sign yo in to Orchizen</Text>
  
   {/* <ImageBackground style={{height:200, width:200, left:80,top:20}} source={require("../assets/box.png")}></ImageBackground> */}
 </View>
 
      <View style={styles.cardh}>
        <Text style={styles.input_lable}>Email</Text>
        <TextInput
          style={styles.input_text}
          keyboardType="email-address"
          placeholder="Enter email"
          value={email}
          onChangeText={value=>setEmail(value)}
        ></TextInput>
        <Text style={styles.input_lable}>Password</Text>
        <TextInput
          style={styles.input_text}
          secureTextEntry={true}
          placeholder="Enter password"
          value={password}
          onChangeText={value=>setPassword(value)}
        ></TextInput>

        <TouchableOpacity
         onPress={handleSubmit}
         >
             <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
             </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 0,
          }}
        >
          <Text
            style={{
              color: "#23ac78",
              fontSize: 15,
              textAlign: "center",
              marginRight: 7,
            }}
          >
            Don't have an account?
          </Text>
        

          <TouchableOpacity
           onPress={() => navigation.navigate("Signup")}
           >
            <Text
              style={{
                fontWeight: "bold",
                opacity: 0.6,
                fontSize: 15,
                color: "#23ac78",
              }}
            >
             Sign Up
            </Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>

  
</ScrollView>
  )
}

const styles = StyleSheet.create({
  
    main_container: {
      // flex: 1,
      // top: 50,
      // margin: 15,
      backgroundColor:"white",
      // borderWidth:2,
    },      
    sub_container: {
      flex: 1,
      top: 50,
      margin: 15,
      // borderWidth:2,
    },

    header_text: {
      fontSize: 30,
      fontWeight: "700",
      color: "#23ac78",
      marginLeft:"5%",
      // borderWidth:1,
    },
    sub_header_text: {
      // fontSize: 30,
      fontWeight: "700",
      color: "#848484",
      marginLeft:"5%",
      // borderWidth:1,
    },
    input_text: {
      fontSize: 17,
      // borderColor: "#67afff",
      backgroundColor:"#ededed",
      // borderWidth: 1.5,
      borderRadius: 10,
      // padding: 10,
      paddingLeft: 10,
      // marginVertical: 5,
    },
    input_lable: {
      color: "#23ac78",
      marginVertical: 5,
      fontWeight: "bold",
      // fontSize: 1,
      // borderWidth:1,
    },
    cardh: {
      overflow: "hidden",    
      justifyContent: 'center',
      width: "100%", // Set your desired width
  
      // backgroundColor: '#e1e4ed', // Set your desired background color
      padding: 16,
      borderRadius:25,
    
    },
    button: {
      marginTop:120,
      backgroundColor: '#4CAF50', // Adjust background color
      borderRadius: 25, // Adjust curvature
      // paddingHorizontal: 20,
      paddingVertical: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white', // Adjust text color
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
