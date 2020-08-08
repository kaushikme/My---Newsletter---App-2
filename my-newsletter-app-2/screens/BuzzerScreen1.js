import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton'


export default class BuzzerScreen1 extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        
<Text><h1>Country	Cases	Deaths	Region</h1></Text>
<Text><h2>1. United States </h2></Text> 
<Text><h3>Cases - 2,066,508 Deaths - 115,137</h3></Text>  
<Text><h2> 2.Brazil </h2></Text> 
<Text><h3> Cases - 775,184 Deaths - 39,797</h3></Text> 
  <Text><h2> 3. Russia </h2></Text> 
<Text><h3> Cases - 493,657 Deaths - 6,358 </h3></Text>   	
<Text><h2> 4.United Kingdom </h2></Text> 
<Text><h3> Cases - 290,143 Deaths - 41,128 </h3></Text> 
<Text><h2> 5.Spain </h2></Text> 
<Text><h3> Cases - 289,360 Deaths - 27,136 </h3></Text> 
	<Text><h2> 6.India </h2></Text> 
<Text><h3> Cases - 287,155 Deaths - 8,107 </h3></Text> 
	<Text><h2> 7.Italy </h2></Text> 
<Text><h3> Cases - 235,763 Deaths - 34,114 </h3></Text> 
	<Text><h2> 8.Peru </h2></Text> 
<Text><h3> Cases - 208,823 Deaths - 5,903 </h3></Text> 
	<Text><h2> 9.Germany </h2></Text> 
<Text><h3> Cases - 186,866 Deaths - 8,844 </h3></Text> 
	<Text><h2> 10.Iran </h2></Text> 
<Text><h3> Cases - 177,938 Deaths - 8,506 </h3></Text>     
<a href = "https://www.worldometers.info/coronavirus/countries-where-coronavirus-has-spread/"> Corona Top 10 </a>
      </View>
    )
  }
}