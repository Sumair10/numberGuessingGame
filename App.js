import { useState } from 'react';
import { StyleSheet, ImageBackground , SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen';
import colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [roundsCount, setRoundsCount] = useState(0)

  const pickNumberHandler =(num)=>{
    setUserNumber(num)
    setGameIsOver(false)
  }

  const gameOverhandler =(numOfRounds)=>{
    setGameIsOver(true)
    setRoundsCount(numOfRounds)
  }

  const onStartNewGame =()=>{
    setUserNumber(null)
    setRoundsCount(0)
  }

  let screen = <StartGameScreen pickNumberHandler={pickNumberHandler}/>

  if (userNumber){
    screen = <GameScreen userNumber={userNumber} gameOverhandler={gameOverhandler}/>
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen roundsNumber ={roundsCount} userNumber={userNumber} onStartNewGame={onStartNewGame}/>
  }



  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={[ colors.primary700 ,colors.secondary500]} style={styles.rootScreen}>
      <ImageBackground  style={styles.rootScreen} source={require('./assets/Images/back.jpg')} resizeMode="cover"
      imageStyle={styles.backgroundImageStyle}
      >
       <SafeAreaView style={styles.rootScreen}>
       {screen}
       </SafeAreaView>
      </ImageBackground>
     </LinearGradient>
        </>
  );
}

const styles = StyleSheet.create({
 rootScreen :{
  flex :1
 },
 backgroundImageStyle :{
  opacity :0.15 
 }
});
