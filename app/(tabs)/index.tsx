import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

export default function index() {
  return (
    <ScrollView style={{ flex: 1,backgroundColor: "#224B26", }}>
      <View style={styles.bodyContainer}>
        <View style={styles.row}>
            {/* Total Parcel */}
            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <FontAwesome name="archive" size={24} color="blue" />
                <Text style={styles.cardTitle}>Total Pick Up</Text>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <Text style={styles.countText}>0</Text>
                <Text style={styles.amountText}>0 BDT</Text>
              </View>
            </View>

            {/* Delivered */}
            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="local-shipping" size={24} color="green" />
                <Text style={styles.cardTitle}>Delivered</Text>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <Text style={styles.countText}>0</Text>
                <Text style={styles.amountText}>0 BDT</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            {/* Pending */}
            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="access-time" size={24} color="orange" />
                <Text style={styles.cardTitle}>Pending</Text>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <Text style={styles.countText}>0</Text>
                <Text style={styles.amountText}>0 BDT</Text>
              </View>
            </View>

            {/* Partially Delivered */}
            <View style={styles.card}>
              <View style={styles.iconContainer}>
                <Entypo name="circle-with-cross" size={24} color="red" />
                <Text style={styles.cardTitle}>Fraud</Text>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <Text style={styles.countText}>0</Text>
                <Text style={styles.amountText}>0 BDT</Text>
              </View>
            </View>
        </View>
        <View>
          <Text style={{ color: "white", fontSize: 16, marginVertical: 10 }}>
            Options
          </Text>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity style={styles.card2}>
            <View style={styles.cardstyle}>
              <MaterialIcons name="request-page" size={24} color="green" />
              <Text style={{ fontSize: 15 }}>Payment Request</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <View style={styles.cardstyle}>
              <FontAwesome name="headphones" size={24} color="blue" />
              <Text style={{ fontSize: 15 }}>Customer Support</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, color: "white", marginVertical: 10 }}>
          Informations
        </Text>
        <View style={styles.row3}>
          <TouchableOpacity style={styles.card3}>
            <View style={{ alignItems: "center", padding: 5 }}>
              <Text style={{ fontSize: 15 }}>Payments</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card3}>
            <View style={{ alignItems: "center", padding: 5 }}>
              <Text style={{ fontSize: 15 }}>Export</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity style={styles.card3}>
            <View style={{ alignItems: "center", padding: 5 }}>
              <Text style={{ fontSize: 15 }}>Status</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card3}>
            <View style={{ alignItems: "center", padding: 5 }}>
              <Text style={{ fontSize: 15 }}>Amount Charge</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, color: "white", marginVertical: 10 }}>
          Reports
        </Text>
        <View style={styles.row4}>
          <TouchableOpacity style={styles.card4}>
            <View style={{ alignItems: "center", padding: 5 }}>
              <Text style={{ fontSize: 15, color: "white" }}>
                Pending Parcel
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card4}>
            <View style={{ alignItems: "center", padding: 5 }}>
              <Text style={{ fontSize: 15, color: "white" }}>
                Today's Cancelled
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row4}>
          <TouchableOpacity
            style={styles.card4}
            
          >
            <View style={{ alignItems: "center", padding: 5 }}>
              <Text style={{ fontSize: 15, color: "white" }}>
                Latest Return
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card4}
           
          >
            <View style={{ alignItems: "center", padding: 5 }}>
              <Text style={{ fontSize: 15, color: "white" }}>
                Cancellation Request
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  bodyContainer: {
    
    flex: 1,
    padding: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    //marginVertical: 10,
    marginTop: 10,
    //padding:4,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
  },
  iconContainer: {
    marginBottom: 10,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 15,
  },
  countText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginLeft:5,
  },
  amountText: {
    fontSize: 16,
    color: "#888",
    //textAlign: 'center',
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    //marginTop:10,
  },
  card2: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    height: 50,
  },
  cardstyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card3: {
    flex: 1,
    backgroundColor: "#EFE0C0",
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 5,
    height: 50,
  },
  row4: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 10,
  },
  card4: {
    //flex: 1,
    //backgroundColor: '#EFE0C0',
    borderRadius: 10,
    padding: 5,
    //marginHorizontal: 5,

    height: 50,
    width: "49%",
    borderWidth: 1,
    borderColor: "gray",
  },
});