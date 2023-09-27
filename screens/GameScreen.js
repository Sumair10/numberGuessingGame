import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import GuessedLogItems from "../components/game/GuessedLogItems";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import colors from "../constants/Colors";

generateRAndomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRAndomBetween(min, max, exclude)
  }
  else {
    return rndNum
  }
}

let minBoundry = 1
let maxBoundary = 100

export default function GameScreen({ userNumber, gameOverhandler }) {

  const initialGuess = generateRAndomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessedRounds, setGuessedRounds] = useState([initialGuess])

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverhandler(guessedRounds.length)
    }
  }, [currentGuess, userNumber, gameOverhandler])

  useEffect(() => {
    minBoundry=1
    maxBoundary=100
  }, [])
  


  const nextGuess = (direction) => {
    console.log(direction)
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", 'You know that this is wrong...',
        [{ text: 'Sorry!', style: 'cancel' }]
      )
      return
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess
    }
    else {
      minBoundry = currentGuess + 1
    }
    const newRndNum = generateRAndomBetween(minBoundry, maxBoundary, currentGuess)
    setCurrentGuess(newRndNum)
    setGuessedRounds(prev => [newRndNum , ...prev ])
  }

  const guessRoundListLength =guessedRounds.length
  return (
    <View style={styles.screen}>
      <Title>Oppenent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.textProperty}>Higher or Lower ?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonCon}>
            <PrimaryButton onPress={() => nextGuess('lower')}>-</PrimaryButton>
          </View>
          <View style={styles.buttonCon}>
            <PrimaryButton onPress={() => nextGuess('greater')}>+</PrimaryButton>
          </View> 
        </View>
      


      </Card>
      <View style={styles.flatListItem}>
        
          <FlatList data={guessedRounds} renderItem={
            (itemData)=> <GuessedLogItems roundNumber={ guessRoundListLength - itemData.index} guess={itemData.item} />}
            keyExtractor={(item)=>item}
            />
        </View>
      <View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  textProperty: {
    color: colors.secondary500,
    fontSize: 24,
    marginBottom :20,
    // fontFamily :'open-sans'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  buttonCon: {
    flex: 1
  },
  flatListItem:{
    flex:1,
    padding:16
  }

})
