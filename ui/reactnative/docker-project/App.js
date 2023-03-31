import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Button onPress={() => presser()} title="Click Me"></Button>
        <Button onPress={() => pressertwo()} title="Click Me"></Button>
    </View>
  );
}

const presser = () => {
  const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email:"asdf@asdf.asdf", //inEmail,
            pass:"Asdf123$", //inPass
            name:"test"
          }),
        };
    
      fetch("http://192.168.0.88/user_account/create.php",requestOptions).then(res => res.json()).then(result => {
          console.log(result);
      });
}
const pressertwo = () => {
  const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email:"asdf@asdf.asdf", //inEmail,
            pass:"Asdf123$" //inPass
          }),
        };
    
      fetch("http://192.168.0.88/user_account/read.php",requestOptions).then(res => res.json()).then(result => {
          console.log(result);
      });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
