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
  import React, { useState, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import { auth } from '../firebase/firebase-config';
  import {getAuth, signOut  } from 'firebase/auth';
  import { Picker } from '@react-native-picker/picker';
  import DateTimePicker from "@react-native-community/datetimepicker";
  import { GestureHandlerRootView } from 'react-native-gesture-handler';
  const { height: SCREEN_HEIGHT } = Dimensions.get('window');

  
  const orchid_types = [
    'Red orchid',
    'Blue Orchid',
    'Orange Orchid',
  ];

export default function EmergencyWaterForm() {

    const [selectedBehavior, setSelectedBehavior] = useState('');
    // const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
  



    const [selectedTest, setSelectedTest] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);
    const test_mange = ["Test 1", "Test 2", "Test 3", "Test 4"];

    const [selectedFlower, setSelectedFlower] = useState('green orchid');
    const [amount, setAmount] = useState();

    const handleStart = async () => {
      // Simulate sending data to the backend
      console.log('Selected Flower:', selectedFlower);
      console.log('Amount:', amount);
      // You can replace this with an actual API call
      if (!selectedFlower || !amount) {
        alert("Please select a flower and enter the water amount!");
        return;
      }
  
      try {
        setLoading(true);
  
        const response = await fetch("http://192.168.255.46:8082/emergency-water", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            flower: selectedFlower,
            amount: amount,
          }),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          alert(`Success: ${result.message}`);
        } else {
          alert(`Error: ${result.error}`);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send data to backend!");
      } finally {
        setLoading(false);
      }
    };

    const Header = () => {
      return (
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
                  <Text style={styles.headerText}>Emergency watering schedule...</Text>
        <Image
          source={require("../assets/images/droplet.png")}
          style={styles.headerIcon}
        />
         </View>
        </View>
      );
    };


    const Card = ({ children }) => {
      return <View style={styles.cardContainer}>{children}</View>;
    };

    // const handleBehaviorChange = (itemValue) => {
    //     console.log("Behavoiur selected",itemValue);
    //     setSelectedBehavior(itemValue);

    //   };


    // const handleTestChange = (itemValue) => {
    //     console.log("Test selected",itemValue);
    //     setSelectedTest(itemValue);
    //   };


      const sendDataToBackend = async () => {
        if (!selectedFlower || !amount) {
          alert("Please select a flower and enter the water amount!");
          return;
        }
    
        try {
          setLoading(true);
    
          const response = await fetch("http://192.168.175.46:8082/emergency-water", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              flower: selectedFlower,
              amount: amount,
            }),
          });
    
          const result = await response.json();
    
          if (response.ok) {
            alert(`Success: ${result.message}`);
          } else {
            alert(`Error: ${result.error}`);
          }
        } catch (error) {
          console.error("Error:", error);
          alert("Failed to send data to backend!");
        } finally {
          setLoading(false);
        }
      };


  return (

    <View>
      {/* <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={100} // Adjust based on header height
      > */}
        
        <ScrollView
         contentContainerStyle={styles.scrollContainer}
          >
          <Header />
          <View style={styles.cardContainer}>
          <Image
                source={require("../assets/images/orchWall.jpg")}
                style={styles.cardImage}
              />
            <Picker
                selectedValue={selectedFlower}
                onValueChange={(itemValue) => setSelectedFlower(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Green Orchid" value="green orchid" />
                <Picker.Item label="Red Orchid" value="red orchid" />
                <Picker.Item label="Blue Orchid" value="blue orchid" />
              </Picker>
              <View style={styles.greenCard}>
                <Text style={styles.greenCardText}>
                  Enter water amount in milliliters and click start to watering.
                </Text>
              </View>
              {/* <TextInput
                style={styles.input}
                placeholder="Amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
              /> */}

                <View style={styles.datePickerContainer}>
                                <Text style={styles.label}>Amount:</Text>
                              
                                <TextInput
                                    style={styles.input}
                                    placeholder="Amount"
                                    keyboardType="numeric"
                                    value={amount}
                                    onChangeText={setAmount}
                                    // editable={!isUploading}
                                  />
                            </View> 


              <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                <Text style={styles.startButtonText}>Start</Text>
              </TouchableOpacity>
          
            {/* <Text>Card Content</Text> */}
          </View>
        </ScrollView>
      {/* </KeyboardAvoidingView> */}
    </View>






//  <ScrollView >
//       <View>
//     {/* Header Section */}
//           <View style={styles.header}>
//           <Text style={styles.title}>Emergency Watering form</Text>
//           {/* <Text style={styles.date}>10th Dec 2024</Text> */}
//           </View>
 
//           <View style={styles.container}>


//            <View style={styles.card}>            
//                     <View style={styles.cardContent}>
//                     <Image source={require("../assets/images/orchWall.jpg")} style={styles.cardImage} />                    

//                       <View style={styles.flowerContainer}>
//                       <Picker style={styles.dropdown} 
//                               selectedValue={selectedBehavior}
//                               onValueChange={(itemValue) => setSelectedBehavior(itemValue)}
//                               mode="dropdown" >
//                         <Picker.Item style={{fontSize: 10}} label="Select a Flower" value="" />

//                                 {orchid_types.map((behavior, index) => (
//                                     <Picker.Item style={{fontSize: 10}} key={index} label={behavior} value={behavior} /> 
//                                     ))}

//                           </Picker>  
//                       </View>  

//                       <View  style={styles.subCard}>            
//                       <Image source={require("../assets/images/orchid.png")} style={styles.subCardImage} />
//                       <Text style={styles.cardDescription}>Enter Water Amount in milimeters and click Start Watering</Text>
              
//                         </View>


                            
//                             <View style={styles.datePickerContainer}>
//                                 <Text style={styles.label}>Amount:</Text>
                              
//                                 <TextInput
//                                     style={styles.input}
//                                     placeholder="Amount"
//                                     keyboardType="numeric"
//                                     value={amount}
//                                     onChangeText={setAmount}
//                                     // editable={!isUploading}
//                                   />
//                             </View> 
//                             <TouchableOpacity style={styles.button}  onPress={sendDataToBackend}    disabled={loading}>
//                                 <Text style={styles.buttonText}> {loading ? "Sending..." : "Start Watering"}</Text>
//                             </TouchableOpacity>

//                     </View>

                  
                    
//             </View>


//           </View>


//     </View>
//     </ScrollView>

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
    borderBottomEndRadius:40,
    borderBottomStartRadius:40,
    height: SCREEN_HEIGHT * 0.25, // 30% of the screen height
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent:"flex-end",
    // borderWidth:3,

  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth:3,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
    // borderWidth:3,
  },
  headerIcon: {
    width: 80,
    height: 80,
    // borderWidth:3,
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
    borderWidth:3
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  startButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    width:"60%",
    marginHorizontal:"20%"
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

datePickerContainer: {
  margin : "auto", 
  width: "80%",
  // borderWidth:2,
  marginBottom: 20,
  flexDirection :"row",        
},
label: {
  // fontSize: 16,
  // marginBottom: 5,
  color: "#333",
  // borderWidth:1,
  width: "30%", 
  marginTop:7,
  
},
input: {
  height: 40,
  width:"60%",
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
},
});


// const styles = StyleSheet.create({
//     container: {
//       flex: 20,
//     //   backgroundColor: "#F5F5F5",
//       padding: 20,
//     },
//     header: {
//       alignItems: "center",
//       borderBottomEndRadius:20,
//       borderBottomStartRadius:20,
//       height:200,
//       marginBottom: 20,
//       backgroundColor: "#2e7d32",
//     },
//     title: {
//       fontSize: 24,
//     //   borderWidth:2,
//       top:100,
//       width:"60%",
//       marginRight:"30%",
//       fontWeight: "bold",
//       color: "#F5F5F5",
//     },
//     date: {
//         top:100,
//         marginRight:"58%",
//       fontSize: 16,
//       color: "#FFFFFF",
//     },
//     careSection: {
//       flexDirection: "row",
//       alignItems: "center",
//       justifyContent: "space-between",
//       backgroundColor: "#FFFFFF",
//       borderRadius: 10,
//       padding: 15,
//       marginBottom: 20,
//     },
//     careText: {
//       fontSize: 18,
//       fontWeight: "bold",
//       color: "#2E7D32",
//     },
//     careImage: {
//       width: 50,
//       height: 50,
//     },
//     button: {
//       backgroundColor: "#2E7D32",
//       borderRadius: 10,
//       paddingVertical: 10,
//       alignItems: "center",
//       marginBottom: 20,
//       alignSelf:"center",
//       width:"50%",
//     },
//     buttonText: {
//       color: "#FFFFFF",
//       fontSize: 16,
//       fontWeight: "bold",
//     },
//     card: {
//       flexDirection: "row",
//       backgroundColor: "#FFFFFF",
//       borderRadius: 10,
//       padding: 10,
//       marginBottom: 10,
//       shadowColor: "#000",
//       shadowOpacity: 0.1,
//       shadowRadius: 5,
//       elevation: 3,
//     },
//     subCard: {
//         flexDirection: "row",
//         backgroundColor: "#2E7D32",
//         borderRadius: 10,
//         padding: 10,
//         marginBottom: 10,
//         shadowColor: "#000",
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//         elevation: 3,
//       },
//     cardImage: {
//       width: "80%",
//       height: "40%",
//       alignSelf :"center",
//       borderRadius: 10,
//       marginRight: 10,
//     },
//     subCardImage: {
//         width: 50,
//         height: 50,
//         // borderWidth:2,
//         alignSelf :"center",
//         borderRadius: 10,
//         marginRight: 10,
//       },
//     cardContent: {
//       flex: 1,
//       padding:7,
//       justifyContent: "center",
//     },
//     subCardContent: {
//       flexDirection: "row",

//       alignItems: "center",
//             // borderWidth:2,
//       // justifyContent: "center",
//     },
//     cardTitle: {
//       fontSize: 16,
//       fontWeight: "bold",
//       color: "#2E7D32",
//     },
//     cardLink: {
//       fontSize: 14,
//       color: "#1E88E5",
//       fontWeight: "bold",
//     },
//     cardDescription: {
//       flex: 1, // Allow the Text to take remaining space
//       fontSize: 14,
//       color: "#ffff",
//       marginTop: 5,
//       flexWrap: "wrap", // Ensure text wraps within container
//     },
//     datePickerContainer: {
//         margin : "auto", 
//         width: "80%",
//         // borderWidth:2,
//         marginBottom: 20,
//         flexDirection :"row",        
//       },
//       label: {
//         // fontSize: 16,
//         // marginBottom: 5,
//         color: "#333",
//         // borderWidth:1,
//         width: "30%", 
//         marginTop:7,
        
//       },
//       dateButton: {
//         // padding: 10,
//         borderWidth: 1,
//         borderColor: "#ddd",
//         borderRadius: 5,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         // borderWidth:2,
//         width: "50%"
//       },
//       flowerContainer: {
//         // width: "99%",
//         // borderWidth:2,
//         marginBottom: 20,
//         position:"relative",
//         flexDirection :"row",
        
//       },
//       dropdown: {
//         position:"relative",

//         borderColor: "#ddd",
//         // borderRadius: 5,
//         backgroundColor: "#fff",
//         // alignItems: "center",
//         borderWidth:2,
//         width: "70%",
//         alignSelf: 'center', // Centers the item horizontally within its parent
//         marginHorizontal: 'auto'
//       },
//       dateText: {
//         fontSize: 16,
//         color: "#333",
//       },
//       input: {
//         height: 40,
//         width:"60%",
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,
//         paddingHorizontal: 10,
//       },
//   });

