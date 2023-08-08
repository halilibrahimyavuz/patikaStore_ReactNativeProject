import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TitleComponent from './src/components/title';
import InputComponent from './src/components/input';
import ProductsListComponent from './src/components/productsList';

export default function App() {
  return (

    <View style={styles.container}>

    
        {/* // Headar--> patistore */}
        <TitleComponent/>


        {/* //input  */}
        <InputComponent/>

        {/* //products list */}
        <ProductsListComponent/>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white" ,  
  },
});
