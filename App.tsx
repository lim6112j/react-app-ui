import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Intro from './Intro';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  console.log('rendering parent...');
  return (
    <View>
      <Text>
        you clicked {count} times. typed {text}
      </Text>
      <TextInput onChangeText={d => setText(d)} />
      <Button title="click" onPress={() => setCount(count + 1)} />
      <Text>Parent View</Text>
      <Intro />
    </View>
  );
};
export default App;
