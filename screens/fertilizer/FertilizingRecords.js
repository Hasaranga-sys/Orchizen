import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function FertilizingRecords() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

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

  const [data, setData] = useState(orchidData);

  const handleSearch = (val) => {
    setSearchText(val);
    console.log(val);

    const filteredData = orchidData.filter(
      (item) =>
        item.name.toLowerCase().includes(val.toLowerCase()) ||
        item.description.toLowerCase().includes(val.toLowerCase())
    );
    setData(filteredData);
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../../assets/images/back.png")}
            style={styles.backImage}
          />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <View style={styles.headerTextContent}>
            <Text style={styles.headerText}>Fertilizing</Text>
            <Text style={styles.headerText}>records history...</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/images/fertilizer/clock.png")}
              style={styles.headerIcon}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <ScrollView>
        <Header />
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <Image
              source={require("../../assets/images/fertilizer/search.png")}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              value={searchText}
              onChangeText={(value) => handleSearch(value)}
            />
          </View>
          {/* Orchid Types List */}
          <ScrollView>
            {data.map((orchid, index) => (
              <View key={index} style={styles.card}>
                <Image source={orchid.image} style={styles.cardImage} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{orchid.name}</Text>
                  <Text style={styles.cardDescription}>
                    {orchid.description}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.cardLink}>See More &gt;&gt;</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F0F0",
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,
  },

  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    tintColor: "#B1B0B0", // Optional: Change color if needed
  },

  searchBar: {
    flex: 1,
    backgroundColor: "transparent",
    color: "#B1B0B0",
    fontWeight: "bold",
  },
  headerContainer: {
    padding: 16,
    backgroundColor: "#096c3a",
    alignItems: "center",
    marginBottom: 8,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: SCREEN_HEIGHT * 0.24,
    paddingTop: 16,
    justifyContent: "flex-end",
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "92%",
  },
  headerTextContent: {
    width: "80%",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  headerIcon: {
    width: 60,
    height: 70,
  },
  backButton: {
    position: "absolute",
    top: 50, // Adjust as needed
    left: 29, // Adjust as needed
    zIndex: 10,
    // borderWidth:1,
  },
  button: {
    backgroundColor: "#2E7D32",
    borderRadius: 10,
    paddingVertical: 6,
    alignItems: "center",
    marginBottom: 20,
    marginTop: -56,
    zIndex: 4,
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
  backImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: 10,
  },
});
