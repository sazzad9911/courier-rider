import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function fraudmark() {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.container}>
       <Text style={{fontSize:24,color:'white',marginBottom:10}}>Fraud Mark</Text>
      <Text style={{color:'gray',fontSize:12}}>"Fraud Mark" refers to a system or indicator used </Text>
      <Text style={{color:'gray',fontSize:12,marginVertical:3}}>to flag suspicious or potentially fraudulent  </Text>
      <Text style={{color:'gray',fontSize:12,marginBottom:60}}>activities in transactions, accounts, or operations. </Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#a9a9a9" // Gray color for placeholder
        keyboardType="phone-pad" // Numeric keyboard
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        maxLength={11} // Limit input to 11 digits
      />
      <TouchableOpacity style={{height:40,borderWidth:1,width:'100%',borderRadius:8,backgroundColor:'#F6B426',marginTop:25,justifyContent:'center',}}>
          <Text style={{ textAlign: 'center', fontSize: 16, }}>Update as spam</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#224B26',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#D9D9D9',
  },
});