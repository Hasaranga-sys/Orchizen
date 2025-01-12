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
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import React, { useState, useEffect } from "react";
  import { collection, getDocs, query, where } from 'firebase/firestore';
  import {auth, db } from '../firebase/firebase-config'; 
  const { height: SCREEN_HEIGHT } = Dimensions.get('window');
  import { useNavigation } from "@react-navigation/native";
  // import firestore from "@react-native-firebase/firestore";
  import { useFocusEffect } from "@react-navigation/native";

export default function FindHome() {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const auths = getAuth();
    

  // Fetch data from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log("AUTH USER", authUser);
      setUser(authUser);
    });
  
    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   console.log("USER AFTER SETTING", user);
  //   if (user !== null) {
  //     console.log("USER CONDITION", user);
  //     fetchData();
  //   }
  // }, [user]);

  useFocusEffect(
    React.useCallback(() => {
      if (user) {
        fetchData();
      }
    }, [user])
  );

  const fetchData = async () => {
    const fetchedData = await fetchFromDatabase(user);
    setData(fetchedData);
    setLoading(false);
    console.log("DATASET",data);
  };

  const fetchFromDatabase = async(user) =>{
    try {

      //new from off doc
      console.log("Strt new");
      // const userMail = user.email;
      console.log("USER EMAIL",auths.currentUser.email);
      setLoading(true);
      const allData = query(collection(db,"Find_new_ochid"),where("email", "==" , auths.currentUser.email))
      console.log("ALL data",allData);
      const dataSnapshot = await getDocs(allData)
      console.log("SNapshot_2",dataSnapshot);
      console.log("END OF SNAPSHOT");

      //checking condition
      // const docChangesArray = dataSnapshot.docChanges;
      console.log("docChangesArray",dataSnapshot.docChanges);
     
      console.log("DOCSS",dataSnapshot.docs);
      
      console.log("SIZE DOCS",dataSnapshot.size);
  
      console.log("ISEMP",dataSnapshot.empty);

      if(dataSnapshot.size!=0){
        console.log(dataSnapshot);
        console.log('LIST from Firestore:', data);

        const data = []
        dataSnapshot.forEach((doc) =>{
          data.push({
            id: doc.id, // For unique key
            createdDate: doc.data().createdAt,
            avgResults: doc.data().avgResults,
            email: doc.data().email,
            days: doc.data().days,

          })
        })
        console.log('Data from Firestore:', data);
        console.log('Retrived email:', user);
        return data;
      }

      const renderItem = ({ item }) => (

        <View style={styles.container}>

        <View  style={styles.box1}>
              <Text>Timestamp: {item.timestamp.toDate().toString()}</Text>

        </View>
      </View>

        
      );

  const handleHistoryClick = (item) => {
    // Navigate to Details component and pass necessary data as params
    navigation.navigate('FindOrchHistory', {selectedItem: item});
  };
  
  

    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
      setLoading(false);
    return [];
    }
  }

    const Header = () => {
        return (
          <View style={styles.headerContainer}>
            <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Select best orchid species..</Text>
          <Image
            source={require("../assets/images/droplet.png")}
            style={styles.headerIcon}
          />
           </View>
          </View>
        );
      };

      const HeadCard = () => {
        return (
          <View style={styles.headCardContainer}>
            <View style={styles.headCardContent}>

            <TouchableOpacity style={styles.PastRecordbutton} onPress={() => navigation.navigate('FindNewOrchids')}>
                <Text style={styles.buttonText}>Find New +</Text>
              </TouchableOpacity>

           </View>
          </View>
        );
      };

      // if (loading) {
      //   return (
      //     <View style={styles.loadingContainer}>
      //       <ActivityIndicator size="large" color="#096c3a" />
      //       <Text>Loading data...</Text>
      //     </View>
      //   );
      // }

  return (
    <View>
        <ScrollView contentContainerStyle={styles.scrollContainer}  >
        <Header />
        <HeadCard />
        <ScrollView contentContainerStyle={styles.container}>
      {loading ? 
            (<View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#096c3a" />
              <Text>Loading data...</Text>
            </View>) :
            
            data.map((item) => (
              <View key={item.id} style={styles.recordContainer}>
                <Text style={styles.recordText}>
                  Created Date: {new Date(item.createdDate).toDateString()}
                </Text>
                {/* <Text style={styles.recordText}>
                  Average Light: {item.avgResults.average_Light}
                </Text>
                <Text style={styles.recordText}>
                  Average Temperature: {item.avgResults.average_Temp}
                </Text>
                <Text style={styles.recordText}>
                  Average Humidity: {item.avgResults.average_humidity}
                </Text> */}
                <TouchableOpacity
                  style={styles.viewButton}
                  onPress={() =>
                    navigation.navigate("FindOrchHistory", { selectedItem: item })
                  }
                >
                  <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
              </View>
      ))}
    </ScrollView>

        </ScrollView>



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
      // flex: 1,
      // flexGrow: 1,
      // borderWidth:2,
      alignItems: 'center',
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
      marginBottom: -20,
      borderBottomEndRadius:40,
      borderBottomStartRadius:40,
      height: SCREEN_HEIGHT * 0.25, // 30% of the screen height
      paddingHorizontal: 16,
      paddingTop: 16,
      justifyContent:"flex-end",
      zIndex: 5,
    },
    headCardContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
        marginBottom:20,
        zIndex: 4
        
      },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth:3,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      flex: 1,
      borderWidth:3,
    },
    headerIcon: {
      width: 80,
      height: 80,
      // borderWidth:3,
    },
    PastRecordbutton: {
        backgroundColor: "#21130d",
        borderRadius: 30,
        paddingVertical: 5,
        alignItems: "center",
        // marginLeft:70,
        width:"40%",
        marginTop: 30,
      },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
      },
      savedItemsContainer: {
        padding: 16,
      },
      itemCard: {
        padding: 16,
        marginBottom: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      },
      itemText: {
        fontSize: 14,
        color: "#333",
        marginBottom: 4,
      },
      noDataText: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 16,
        color: "#666",
      },


      
      recordContainer: {
        backgroundColor: "#ffffff",
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width:"90%",
        // borderWidth:5,
      },
      recordText: {
        fontSize: 16,
        color: "#333333",
        marginBottom: 4,
      },
      loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      viewButton: {
        backgroundColor: "#096c3a",
        padding: 10,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
      },
      buttonText: {
        color: "#ffffff",
        fontSize: 14,
        fontWeight: "bold",
      },

  });
  