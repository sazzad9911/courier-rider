import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AntDesign from '@expo/vector-icons/AntDesign';

const App = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedThana, setSelectedThana] = useState("");

  // List of districts
  const districts = ["Dhaka", "Chittagong", "Rajshahi", "Khulna", "Barisal", "Sylhet", "Rangpur", "Mymensingh"];
  const thanas = ["Gulshan", "Badda", "Baridhara", "Notun Bajar", "sadar",];
  return (
    <View style={styles.container}>
      <Text style={{fontSize:24,color:'white',marginBottom:10}}>My Address</Text>
      <Text style={{color:'gray',fontSize:12}}>To set up your address, navigate to the "Profile" </Text>
      <Text style={{color:'gray',fontSize:12,marginVertical:3}}>or "Settings" section of your app, and locate the </Text>
      <Text style={{color:'gray',fontSize:12,marginBottom:60}}>"Address" field.</Text>
      {/* Dropdown with Icon on the Right */}
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedDistrict}
          onValueChange={(itemValue) => setSelectedDistrict(itemValue)}
          style={styles.picker}
          mode="dropdown" // Set mode to dropdown for Android (optional)
        >
          <Picker.Item label="District" value="" style={{ color: 'gray' }} />
          {districts.map((district, index) => (
            <Picker.Item key={index} label={district} value={district} />
          ))}
        </Picker>
        {/* Icon on the Right */}
        {/* <AntDesign name="down" size={20} color="black" style={styles.icon} /> */}
      </View>
      {/* Dropdown with Icon on the Right */}
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedThana}
          onValueChange={(itemValue) => setSelectedThana(itemValue)}
          style={styles.picker}
          mode="dropdown" // Set mode to dropdown for Android (optional)
        >
          <Picker.Item label="Thana" value="" style={{ color: 'gray' }} />
          {thanas.map((thana, index) => (
            <Picker.Item key={index} label={thana} value={thana} />
          ))}
        </Picker>
        {/* Icon on the Right */}
        {/* <AntDesign name="down" size={20} color="black" style={styles.icon} /> */}
      </View>
      <TouchableOpacity style={{height:40,borderWidth:1,width:'100%',borderRadius:8,backgroundColor:'#F6B426',marginTop:20,justifyContent:'center',}}>
          <Text style={{ textAlign: 'center', fontSize: 16, }}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent: 'center',borderWidth:1,height:50,width:'60%',backgroundColor:'#DF3C3E',borderRadius:7,marginTop:50}}>
        <View style={{flexDirection:'row', alignItems: 'center',marginLeft:35}}>
          <AntDesign name="poweroff" size={20} color="white" style={{ marginRight: 1 }}/>
          <Text style={{color:'white',fontSize:13,marginLeft:12}}>Turn Off Location</Text>
        </View>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#224B26',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: "#E0E0E0",
    borderRadius: 8,
    height: 40,
    marginBottom: 15,
    color: "#000",
  },
  picker: {
    flex: 1,
    height: 50,
  },
  icon: {
    paddingHorizontal: 10,
  },
  selectedText: {
    fontSize: 14,
    color: '#555',
    marginTop: 20,
  },
});

export default App;
