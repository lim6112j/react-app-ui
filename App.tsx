import React from 'react';
import { Text, View } from 'react-native';
import Intro from './Intro';

const App = () => {
  console.log("rendering parent...");
  return (
    <View>
      <Text>
        Parent View
      </Text>
      <Intro />
    </View>
  );
};
export default App;
