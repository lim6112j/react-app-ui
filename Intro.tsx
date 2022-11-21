import React, { Component, memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Intro = (props: any) => {
  console.log("rendering child");
  return (
    <View>
      <Text>
        Child View
      </Text>
    </View>
  )
}
export default memo(Intro);
