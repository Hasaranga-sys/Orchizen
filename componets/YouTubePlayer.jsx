import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const YouTubePlayer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.videoWrapper}>
        <WebView
          source={{ uri: "https://www.youtube.com/embed/XyFwp9Yx8jY" }} // Replace with your YouTube video ID
          allowsFullscreenVideo={true} // Enables full-screen mode
          style={styles.video}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoWrapper: {
    width: 300,
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "black",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default YouTubePlayer;
