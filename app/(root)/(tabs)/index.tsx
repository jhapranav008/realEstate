import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const index = () => {
  return (
   

    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}   
    >
      <Text className=' text-3xl font-rubik-bold my-10' >Welcome to ReState!!</Text>

     
    </View>
  )
}

export default index