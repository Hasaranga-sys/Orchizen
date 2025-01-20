import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    Button,
    ActivityIndicator,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  import { useNavigation } from "@react-navigation/native";
  import * as ImagePicker from 'expo-image-picker';
  import React, { useState, useEffect } from "react";
  const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function UvLightForm() {
    const [file1, setImage1] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const [result1, setResult1] = useState(null);
    const navigation = useNavigation();

    const pickImage = async (setImage) => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],// Use ImagePicker.MediaType.Images instead
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

    
      const Header = () => {
        return (
          <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} 
            onPress={() => navigation.navigate('DiseaseHome')}
            >
              <Text style={styles.backText}>{"< Back"}</Text>
            </TouchableOpacity>
            <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Treat orchids with proper lighting...</Text>
          <Image
            source={require("../assets/images/uvbulb.png")}
            style={styles.headerIcon}
          />
           </View>
          </View>
        );
      };

      const uploadImages = async () => {
        if (!file1) {
          alert("Please select both images before uploading!");
          return;
        }
      
        setIsUploading(true);
      
        try {
          const formData1 = new FormData();
        //   const formData2 = new FormData();
      
          formData1.append("file1", {
            uri: file1,
            name: "file1.jpg",
            type: "image/jpeg",
          });
      
        //   formData2.append("file2", {
        //     uri: file2,
        //     name: "file2.jpg",
        //     type: "image/jpeg",
        //   });
      
          // Upload first image
          const response1 = await fetch("http://192.168.255.46:8082/uvlight", {
            method: "POST",
            body: formData1,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
      
          // Upload second image
        //   const response2 = await fetch("http://192.168.79.46:8082/orchizenfer2", {
        //     method: "POST",
        //     body: formData2,
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   });
      
          if (response1.ok) {
              const data1 = await response1.json(); 
            //   const data2 = await response2.json(); 
              setResult1(data1);
            //   setResult2(data2);
      
              // console.log("Data1",result1.results.header.Flowers); 
              // console.log("Data2",data2); 
      
            alert("Images uploaded successfully!");
          } else {
            console.log(response1);
            alert("Failed to upload images. Please try again.");
          }
        } catch (error) {
          console.error("Error uploading images:", error);
          alert("An error occurred. Please try again.");
        } finally {
          setIsUploading(false);
        }
      };
  


    return (
    <View>
        <View>        
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Header />
            <View style={styles.cardsContainer}>

            <View style={styles.greenCardContainer}>
                <View style={styles.greenCardContent}>
                <Image source={require("../assets/images/notification.png")}  style={styles.greenCardHeaderIcon} />
                    <Text style={styles.greenCardHeaderText}>Capturing or uploading clear identical images will ensure a high level of accuracy.</Text>                
            </View>           
            </View>       

            </View>

            <View style={styles.cardContainer}>
                <TouchableOpacity onPress={() => pickImage(setImage1)} disabled={isUploading}>

                {file1 ? (
                    <Image source={{ uri: file1 }} style={styles.imagePreview} />
                    ) : (
                    <Image source={require("../assets/images/imagePlaceholder.png")} style={styles.imagePreview} />
                    )}
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.startButton} onPress={uploadImages}>
                    <Text style={styles.startButtonText}>Confirm & Scan</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>

    </View>
    )

}

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#dfe6e3',
      borderWidth:2,
    },
    container: {
      flex: 1,
      flexGrow: 1,
      borderWidth:2,
    },
    scrollContainer: {
      // flexGrow: 1,
      // justifyContent: 'space-between',
      // borderWidth:2,
      // height: SCREEN_HEIGHT * 1,
    },
    headerContainer: {
        padding: 16,
        backgroundColor: '#096c3a',
        // borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        height: SCREEN_HEIGHT * 0.25, // 30% of the screen height
        // paddingHorizontal: 16,
        paddingTop: 16,
        justifyContent:"flex-end",
        // borderWidth:1,
    
      },
      headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderWidth:1,
        width:"93%",
      },
      headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        flex: 1,
        // borderWidth:1,
      },
      headerIcon: {
        width: 63,
        height: 63,
        // borderWidth:1,
      },
      backButton: {
        position: 'absolute',
        top: 50, // Adjust as needed
        left: 29, // Adjust as needed
        zIndex: 10,
        // borderWidth:1,
      },
      backText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
      },

    cardsContainer: {
        padding: 10,

        // borderRadius: 8,
        alignItems: 'center',
        // marginBottom: 16,

        // height: SCREEN_HEIGHT * 0.25, // 30% of the screen height
        // paddingHorizontal: 16,
        // paddingTop: 16,
        // justifyContent:"flex-end",
        // borderWidth:3,
    
      },

    greenCardContainer: {
        padding: 16,
        backgroundColor: '#096c3a',
        // borderRadius: 8,
        alignItems: 'center',
        // marginBottom: 16,
        borderRadius: 20,
        width:"95%",
        // borderBottomEndRadius:40,
        // borderBottomStartRadius:40,
        // height: SCREEN_HEIGHT * 0.1, // 30% of the screen height
        paddingHorizontal: 27,
        // paddingTop: 16,
        // justifyContent:"flex-end",
        // borderWidth:3,
    
      },
      greenCardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderWidth:3,
      },
      greenCardHeaderText: {
        fontSize: 13,
        // fontWeight: 'bold',
        color: '#fff',
        padding:3,
        // borderWidth:1,
        width:"89%"
        
      },
      greenCardHeaderIcon: {
        width: 55,
        height: 55,
        // marginHorizontal:5,
        // borderWidth:1,
      },


    cardContainer: {
      backgroundColor: '#fff',
      padding: 26,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      marginHorizontal: 26,
      marginBottom:9,
      marginTop:17,
    //   borderWidth:3
    },

    imagePreview: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        marginBottom: 16,
      },

    greenCard: {
      backgroundColor: '#28a745',
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
    },
    greenCardText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    },

    startButton: {
      backgroundColor: '#16b364',
      paddingVertical: 4,
      borderRadius: 30,
      alignItems: 'center',
      width:"60%",
    //   borderWidth:1,
      marginHorizontal:"20%"
    },
    startButtonText: {
      color: '#fff',
      fontSize: 16,
    //   fontWeight: 'bold',
    },
  
  label: {
    // fontSize: 16,
    // marginBottom: 5,
    color: "#333",
    // borderWidth:1,
    width: "30%", 
    marginTop:7,
    
  },

  });