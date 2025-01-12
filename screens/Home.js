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

  export default function Home() {
    const navigation = useNavigation();

    const auths = getAuth();
    
    // const [showDropdown, setShowDropdown] = useState(false);
  
    // const toggleDropdown = () => {
    //   setShowDropdown(!showDropdown);
    // };
  
    const handleLogoutClick = () => {
      // Handle the logout functionality
      // Add your logout logic here
    };

      
    return (
      <ScrollView >

      
      {/* Header Section */}
      <View style={styles.header}>
        
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.title}>OrchiZenx</Text>
              <Text style={styles.date}>10th Dec 2024</Text>
            </View>
            <Image
      source={require("../assets/images/homeLogo.png")} // Replace with your image path
      style={styles.headerImage}
    />
          </View>
      </View>
      <View style={styles.container}>
      {/* Best Orchid Care Section */}
      <View style={styles.careSection}>
        <Text style={styles.careText}>Best Orchids Care...</Text>
        <Image
        //   source={require("./assets/plant.png")} // Replace with your plant image
          style={styles.careImage}
        />
      </View>

      {/* Explore Orchid Types Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore Orchid Types</Text>
      </TouchableOpacity>

      {/* Orchid Types List */}
      <ScrollView>
        {orchidData.map((orchid, index) => (
          <View key={index} style={styles.card}>
            <Image source={orchid.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{orchid.name}</Text>
              <Text style={styles.cardDescription}>{orchid.description}</Text>
              <TouchableOpacity>
                <Text style={styles.cardLink}>See More &gt;&gt;</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
    </ScrollView>
      
    )
  }
  const orchidData = [
    {
      name: "Dendrobium",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    //   image: require("./assets/dendrobium.png"), // Replace with your orchid images
    },
    {
      name: "Vanda",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    //   image: require("./assets/vanda.png"), // Replace with your orchid images
    },
    {
      name: "Phalaenopsis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    //   image: require("./assets/phalaenopsis.png"), // Replace with your orchid images
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
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
      borderRadius: 10,
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
      justifyContent: "center",
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#2E7D32",
    },
    cardDescription: {
      fontSize: 14,
      color: "#555",
      marginVertical: 5,
    },
    cardLink: {
      fontSize: 14,
      color: "#1E88E5",
      fontWeight: "bold",
    },
  });