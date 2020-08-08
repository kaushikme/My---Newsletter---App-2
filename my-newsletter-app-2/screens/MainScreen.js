import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})
    }
      goToBuzzerScreen1=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen1',{color:buzzercolor})
    }
      goToBuzzerScreen2=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen2',{color:buzzercolor})
    }
  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 
            style = {[styles.button,{backgroundColor : 'orange'}]}
            onPress={()=>this.goToBuzzerScreen("red")}>
            <Text style = {styles.buttonText}> Sports </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"green"}]} 
            onPress={()=>this.goToBuzzerScreen1("green")}>
            <Text style={styles.buttonText}> Corona Worldometer </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"red"}]} 
            onPress={()=>this.goToBuzzerScreen2("blue")}>
            <Text style={styles.buttonText}> The News Of World </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"yellow"}]}>
            <Text style={styles.buttonText}> End of the page </Text>
          </TouchableOpacity>
<Text style = {{justifyContent : "center", textAlign  : 'center', marginTop : 130, fontWeight : 'bold', fontSize : 25,}}> Please do rate us as your feedback matters!! </Text>
   <TouchableOpacity
              onPress ={()=>{
                var action = 'like'
                this.updateRating(action)
              }}

            
            >

            
              <Image
                style={{ width: 95,
                  height: 100,
                  marginTop: 75,
                  marginRight: 150,
                  justifyContent: "center",
                  alignItems :'center',
                  alignSelf : 'center', }}
                source={require('../assets/images-2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
                onPress ={()=>{
                  var action = 'dislike'
                  this.updateRating(action)
                }}
              >
              <Image
                style={{
                  width: 95,
                  height: 100,
                  marginTop: -75,
                  marginLeft: 120,
                  justifyContent: "center",
                  alignItems :'center',
                  alignSelf : 'center',
                }}
                source={require('../assets/images-4.png')}
              />
            </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 30,
    marginTop:50,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'black',
    fontWeight: 'bold',
    
  }
})