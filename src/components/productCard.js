import { Dimensions, StyleSheet,Image , Text, View } from 'react-native'
import React from 'react'

const ProductCardComponent = ({ product }) => {
  return (
    <View style={styles.container}>
   
    <View style={styles.inner_container}>
        <Image style={styles.image} source={{ uri: product.imgURL }} />
        <Text style={styles.title}> {product.title} </Text>
      <Text style={styles.description}> {product.price} </Text>
      <Text style={styles.stockState}> 
                {
                    product.inStock ? <Text> </Text> :  <Text style={styles.info}> STOKTA YOK</Text>
                } 
      </Text>
    </View>
  </View>

  )
}

export default ProductCardComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#dbdbdbff",
        margin:10,
        borderRadius: 10,
        padding:4
        
    },
    image:{
        flex:1,
        height: Dimensions.get("window").height/3,
        borderTopLeftRadius:  10,
       alignItems:"stretch",
     
    },
    title:{
        fontWeight:"bold",
        fontSize:22

    },
    description:{
        fontSize:20,
        marginTop:3,
        fontWeight:"bold",
        color:"grey"

    },
    inner_container:{
        padding:5,
        alignItems:"stretch",
       
    },
    info:{
        fontStyle:"italic",
        textAlign:"left",
        fontSize:22,
        color:"red",
        fontWeight:"bold"

    }

})