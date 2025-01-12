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
export default function DiseaseHome() {
  return (
    <View>
    {/* Header Section */}
<View style={styles.header}>
<Text style={styles.title}>Treat Orchids With Proper lighting</Text>
{/* <Text style={styles.date}>10th Dec 2024</Text> */}
</View>

<View style={styles.container}>

<View  style={styles.card}>            
  <View style={styles.cardContent}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WateringForm')}>
      <Text style={styles.buttonText}>UV Light Treatments </Text>
    </TouchableOpacity>
    <View style={styles.subCardContent}>
    <Image source={require("../assets/images/orchid.png")} style={styles.cardImage} />
    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</Text>
    </View>      
  </View>
</View>

<View  style={styles.card}>            
  <View style={styles.cardContent}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmergencyWaterForm')}>
      <Text style={styles.buttonText}>Grow Light Adjusments</Text>
    </TouchableOpacity>
    <View style={styles.subCardContent}>
    <Image source={require("../assets/images/orchid.png")} style={styles.cardImage} />
    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</Text>
    </View>      
  </View>
</View>

</View>

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
      borderBottomEndRadius:20,
      borderBottomStartRadius:20,
      height:200,
      marginBottom: 20,
      backgroundColor: "#00a073",
    },
    title: {
        fontSize: 24,
      //   borderWidth:2,
        top:100,
        width:"60%",
        marginRight:"30%",
        fontWeight: "bold",
        color: "#F5F5F5",
      },
    date: {
        top:100,
        marginRight:"58%",
      fontSize: 16,
      color: "#FFFFFF",
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