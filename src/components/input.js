import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputComponent = () => {
  return (
    <View>
      <TextInput
        placeholder='Ara...'
        style={styles.input}
      />
    </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({
    input:{
        borderWidth :1,
        borderColor:'white',
        backgroundColor:"#ebeaeaff",
        borderRadius:8,
        paddingLeft:8,
        marginVertical:6,
        marginHorizontal:15,
        fontSize:22,
       height:50,
       width :"950",

    }
})