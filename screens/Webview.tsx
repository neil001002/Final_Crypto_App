import React, { useState } from "react";
import { View, Text } from "react-native";
import { HeaderTabIcons } from "../components";
import { WebView } from "react-native-webview";
import * as Progress from "react-native-progress";

const Webview = ({ route }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1,
        }}
      >
        <HeaderTabIcons title={"News"} />
        {!isLoaded ? (
          <Progress.Bar
<<<<<<< Updated upstream
=======
            // style={{ position: "relative" }}
>>>>>>> Stashed changes
            progress={progress}
            width={null}
            borderWidth={0}
            borderRadius={0}
            color="orange"
          />
        ) : null}
      </View>
<<<<<<< Updated upstream
      <WebView
        source={{ uri: route.params.url }}
        style={{ marginTop: 50 }}
        //progress bar goaway
        onLoadEnd={() => setLoaded(true)}
        //progress bar
        onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
      />
=======
      {/* <View style={{  }}> */}

      <WebView
        style={{ marginTop: 50 }}
        source={{ uri: route.params.url }}
        //progress bar goaway
        onLoadEnd={() => setLoaded(true)}
        // progress bar
        onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
      />
      {/* </View> */}
>>>>>>> Stashed changes
    </View>
  );
};

export default Webview;
