import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton'

import db from '../config'
export default class BuzzerScreen extends React.Component {

  incrementRating = (action) => {
var rating= db.ref('rating');
rating.once('value', (ratings) => {
db.ref('rating'). update({
  like : ratings.val()[action] + 3,
})
})
  }
  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam('color')}/>
        <Text> <h1>1)BCCI Working On All Options To Stage IPL 2020, Including Matches Behind Closed Doors :</h1> </Text>
        <Text><h2>Sourav Ganguly The BCCI is ready to host the IPL 2020 behind closed doors and is working on all possible options to stage the tournament this year, board president Sourav Ganguly has stated in his letter to all affiliated members of the body.</h2> </Text>
                        <a href="https://sports.ndtv.com/ipl-2020/bcci-working-on-all-options-to-stage-ipl-2020-including-matches-behind-closed-doors-sourav-ganguly-2244307?pfrom=home-sshowcase" > IPL 2020 </a>

        <Text><h1>2)Silent Night As La Liga Restarts With Seville Derby </h1></Text>
        <Text><h2>Fireworks, banners, plumes of smoke and crowds, delirious at the sight of a team bus, let alone a goal, the Seville derby is a fixture renowned for its intensity and cherished by its supporters.</h2></Text>
        <a href = "https://sports.ndtv.com/football/silent-night-as-la-liga-restarts-with-seville-derby-2244274?pfrom=home-sshowcase">La Liga </a>
       <Text><h1> 3)Hyderabad Open, Scheduled For August, Cancelled Due To Coronavirus Pandemic</h1></Text>
       <Text><h2> The Badminton World Federation said that they and Badminton Association of India agreed to cancel the Hyderabad Open 2020 tournament</h2></Text>
       <a href = "https://sports.ndtv.com/badminton/hyderabad-open-scheduled-for-august-cancelled-due-to-coronavirus-pandemic-2240871"> Badminton </a>
  

      
        
      </View>
    )
  }
}
