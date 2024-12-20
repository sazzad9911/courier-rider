import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function ContactSupport() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    
  return (
    <ScrollView style={styles.bodyContainer}>
        <TouchableOpacity style={{marginTop:35}} onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="white" />
        </TouchableOpacity>
      <Text style={{fontSize:20,color:'white',marginTop:20,}}>Contact Form</Text>
      <Text style={{fontSize:12,color:'white',marginTop:10}}>"A contact form is a simple, user-friendly way for visitors to  </Text>
      <Text style={{fontSize:12,color:'white',marginTop:3}}>reach out to a website owner or support team. It typically  </Text>
      <Text style={{fontSize:12,color:'white',marginVertical:3}}>includes fields like name, email, subject, and message to </Text>
      <Text style={{fontSize:12,color:'white',marginBottom:10}}>streamline communication and inquiries. </Text>
      <TextInput
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            autoCapitalize="words" // Capitalize the first letter of each word
            autoComplete="name" // Helps with autofill on some devices
          />
        <TextInput
            placeholder="Your Phone Number"
            value={phone}
            onChangeText={setPhone}
            
            style={styles.input}
            />
        <TextInput
            placeholder="Your Message"
            value={message}
            onChangeText={setMessage}
            style={styles.input2}
            multiline={true} // Enables multiline input
            />
      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={{color:'white',fontSize:13}}>Don’t have any account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    backgroundColor: '#224B26', // Body background color
    flex: 1,
    padding: 7,
  },
  submitButton: {
    backgroundColor: '#FFB82B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop:12,
    color: '#000',
    height:40,
  },
  input2: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop:12,
    color: '#000',
    height:80,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#F6B426', // Change this color to your preferred color
    fontWeight: 'bold',
  },
});
