import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    Modal,
    Button,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    ImageBackground,
    TextInput,
  } from "react-native";
  // import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { auth } from '../firebase/firebase-config';
  import {getAuth, signOut  } from 'firebase/auth';

export default function Watering() {
  const navigation = useNavigation();
  return (
    <View>
              {/* Header Section */}
              <View style={styles.header}>
        
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.title}>Grow orchids scheduled watering...</Text>
            {/* <Text style={styles.date}>10th Dec 2024</Text> */}
          </View>
          <Image
            source={require("../assets/images/droplet.png")} // Replace with your image path
            style={styles.headerImage}
  />
        </View>
    </View>

      <View style={styles.container}>

      <View  style={styles.card}>            
            <View style={styles.cardContent}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WateringForm')}>
                <Text style={styles.buttonText}>Watering Schedulrs</Text>
              </TouchableOpacity>
              <View style={styles.subCardContent}>
              <Image source={require("../assets/images/watering-can.png")} style={styles.cardImage} />
              <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</Text>
              </View>      
            </View>
        </View>

        <View  style={styles.card}>            
            <View style={styles.cardContent}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmergencyWaterForm')}>
                <Text style={styles.buttonText}>Emergency Watering</Text>
              </TouchableOpacity>
              <View style={styles.subCardContent}>
              <Image source={require("../assets/images/alert.png")} style={styles.cardImage} />
              <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</Text>
              </View>      
            </View>
        </View>
        
      </View>
      <TouchableOpacity style={styles.PastRecordbutton} onPress={() => navigation.navigate('WateringHistoryList')}>
                <Text style={styles.buttonText}>Past Records</Text>
              </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: "#F5F5F5",
      padding: 20,
    },
    header: {
      alignItems: "center",
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      height: "23%",
      marginBottom: 20,
      backgroundColor: "#2e7d32",
      justifyContent: "center", // Center content vertically
      paddingHorizontal: 20,    // Add horizontal padding
    },
    title: {
      fontSize: 24,
      // borderWidth:2,
      fontWeight: "bold",
      color: "#F5F5F5",
      marginBottom: 5, // Space between title and date
    },
    headerImage: {
      width: 50, // Image width
      height: 50, // Image height
      resizeMode: "contain", // Maintain image aspect ratio
    },
    date: {
      fontSize: 16,
      color: "#FFFFFF",
    },
    headerContainer: {
      marginTop:60,
      flexDirection: "row", // Align items horizontally
      alignItems: "center", // Align items vertically
      justifyContent: "space-between", // Space between title/date and image
      // borderWidth:2,
      width: "100%",
    },
    careSection: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
    },
    careText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#2E7D32",
    },
    careImage: {
      width: 50,
      height: 50,
    },
    button: {
      backgroundColor: "#2E7D32",
      borderRadius: 30,
      paddingVertical: 10,
      alignItems: "center",
      marginBottom: 20,
    },
    PastRecordbutton: {
      backgroundColor: "#21130d",
      borderRadius: 30,
      paddingVertical: 10,
      alignItems: "center",
      marginLeft:70,
      width:"60%",
      marginBottom: 20,
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
    },
    card: {
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    cardImage: {
      width: 70,
      height: 70,
      borderRadius: 10,
      marginRight: 10,
    },
    cardContent: {
      flex: 1,
      padding:7,
      justifyContent: "center",
    },
    subCardContent: {
      flexDirection: "row",

      alignItems: "center",
            // borderWidth:2,
      // justifyContent: "center",
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#2E7D32",
    },
    cardLink: {
      fontSize: 14,
      color: "#1E88E5",
      fontWeight: "bold",
    },
    cardDescription: {
      flex: 1, // Allow the Text to take remaining space
      fontSize: 14,
      color: "#555",
      marginTop: 5,
      flexWrap: "wrap", // Ensure text wraps within container
    },
  });