import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textStyle}>
        <Text style={styles.text22222222222222}> Daily Times </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle:{
    backgroundColor: 'red',
  },
  text22222222222222:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;