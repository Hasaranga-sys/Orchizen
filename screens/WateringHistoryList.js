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

export default function WateringHistoryList() {
  return (
    <ScrollView>
    
                {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Fertilizer                    Recommendations..</Text>
                    <Image source={require("../assets/images/droplet.png")} // Replace with your image path
                        style={styles.headerImage}/>
                 </View>
            </View>

                    <View style={styles.container}>
                            <View  style={styles.card}>            

                            </View>
                    </View>

          
     
    </ScrollView>
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
      backgroundColor: "#2e7d32",
    },
    headerImage: {
      width: 90, // Image width
      height: 70, // Image height
      resizeMode: "contain", // Maintain image aspect ratio
      // borderWidth:5,
      marginBottom:30,
    },
    headerContainer: {
      marginTop:113,
      // borderWidth:5,
      flexDirection: "row", // Align items horizontally
      alignItems: "center", // Align items vertically
      justifyContent: "space-evenly", // Space between title/date and image
      // borderWidth:2,
      width: "100%",
        },
    title: {
      // borderWidth:2,
      fontSize: 24,
      // top:100,
      width:"60%",
      // marginRight:"60%",
      fontWeight: "bold",
      color: "#F5F5F5",
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
  });
