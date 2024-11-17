import { View, Text, TextInput, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

export default function BackHeader() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection:'row',}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:16,marginLeft:10}}>Parcel Details</Text>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: '#091242',
        paddingHorizontal: 10,
        //paddingVertical: 15,
        paddingTop: 25,
        paddingBottom: 5,
        height:70,
      },
      phoneText: {
        color: 'white',
        fontSize: 18,
        textDecorationLine: 'underline',
      },
      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        width: '80%',
        backgroundColor: '#091242',
        borderRadius: 10,
        padding: 20,
      },
      modalTitle: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
      },
      input: {
        backgroundColor: '#d3d3d3',
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
        fontSize: 15,
        marginBottom: 10,
      },
      detailsInput: {
        height: 80,
        textAlignVertical: 'top',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
      },
      button: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
      },
      cancelButton: {
        backgroundColor: '#d9534f',
      },
      submitButton: {
        backgroundColor: '#5cb85c',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
});