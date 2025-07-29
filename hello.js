import React from 'react';
import { View ,Text,StyleSheet,SafeAreaView} from 'react-native';


const Hello = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}> 
                <Text style={{ color: 'red', fontSize: 32, textAlign: 'center' }}>Sunny Here! This is my first react native app</Text>
            </View>
        </SafeAreaView>
    );
};



export default Hello;

const styles = StyleSheet.create({
    safeArea:{
flex:1,
backgroundColor:'red'
    },
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
    },
})