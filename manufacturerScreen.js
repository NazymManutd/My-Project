import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar/>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Eco bags</Text>
              <Text style={styles.sectionDescription}>
                Production of affordable reusable linen bags in Almaty.
              </Text>
              <Image source={{url:"https://images.app.goo.gl/W5Eh3h7d3S2Ms5G4A"}}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>House for animals</Text>
              <Text style={styles.sectionDescription}>
                Building an additional complex for animal shelters and creating a hotel function
              </Text>
              <Image source={{url:"https://images.app.goo.gl/oXksF6aR7z57yadm7"}}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Printed T-shirts</Text>
              <Text style={styles.sectionDescription}>
                We sell different printed T-shirts.
              </Text>
              <Image source={{url:"https://images.app.goo.gl/dwfXuQYKys3wUuhx7"}}
              />
              <View>Button title = "New Post"</View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;