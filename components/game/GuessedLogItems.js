import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/Colors";


export default function GuessedLogItems({roundNumber , guess}) {
  return (
    <View style ={styles.listItenm}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent's Guess : {guess}</Text>
    </View>
  )
}

const styles =StyleSheet.create({
    listItenm : {
        borderColor : colors.primary800,
        borderWidth :1,
        borderRadius :40,
        padding :12 ,
        marginVertical :    8,
        backgroundColor :colors.secondary500,
        flexDirection :'row',
        justifyContent :'space-between',
        width :'100%',
        elevation :4
    },
   
})