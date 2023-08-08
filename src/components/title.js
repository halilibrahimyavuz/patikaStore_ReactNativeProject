import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleComponent = () => {
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>PATİKASTORE</Text>
    </View>
  )
}

export default TitleComponent

const styles = StyleSheet.create({
    titleView :{
        alignItems:"flex-start",
        paddingTop:40,
        padding:10

    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color :"#ae00ffff"

    }

})