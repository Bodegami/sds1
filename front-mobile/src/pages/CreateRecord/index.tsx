import React from 'react';
import { Text, StyleSheet, View} from 'react-native';
import Header from '../../components/Header';

const CreateRecord =() => {    
    return (
        <>
            <Header />
            <Text style={styles.text}>Hello create-record!</Text>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
      color: '#fff',
      fontSize: 50,
      textAlign: 'center',
      marginTop: 100
    }
  });

export default CreateRecord;