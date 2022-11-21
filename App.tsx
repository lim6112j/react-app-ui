import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Intro from './Intro';

const App = () => {
  const [count, setCount] = useState(0)

  console.log("rendering parent...");
  return (
    <View>
      <Text>you clicked {count} times. </Text>
      <Button title="click" onPress={() => setCount(count + 1)}  />
      <Text>
        Parent View
      </Text>
      <Intro />
    </View>
  );
};
export default App;
