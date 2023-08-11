import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";
import productData from "../data.json";
import ProductCardComponent from "./productCard";

const ProductsListComponent = () => {
   const renderProduct = ({ item }) => <ProductCardComponent product={item} />;
  // const renderProduct = ({ item }) => (
  //   <View style={{ alignItems:"stretch" ,backgroundColor:"orange"}}>
  //     <Text> s </Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <FlatList
        // initialNumToRender={2}
        style={{ backgroundColor: "white" , width:"100%"}}
        data={productData}
        renderItem={renderProduct}
        numColumns={2} // İki sütunlu görüntü için
        columnWrapperStyle={{justifyContent:"space-between"}}
      />
    </View>
  );
};

export default ProductsListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    margin: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
  },
});
