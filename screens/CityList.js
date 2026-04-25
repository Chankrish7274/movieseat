import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

export default function CityList({ navigation }) {
  const [search, setSearch] = useState('');
  const cities = [
    { id: 1, name: "Chennai", img: "https://via.placeholder.com/100/FFB6C1/000000?text=Chennai" },
    { id: 2, name: "Bangalore", img: "https://via.placeholder.com/100/ADD8E6/000000?text=Bangalore" },
    { id: 3, name: "Hyderabad", img: "https://via.placeholder.com/100/90EE90/000000?text=Hyderabad" }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select City</Text>
      <TextInput 
        style={styles.input} placeholder="Search..." 
        value={search} onChangeText={setSearch} 
      />
      <ScrollView>
        {cities.filter(c => c.name.toLowerCase().includes(search.toLowerCase())).map(city => (
          <TouchableOpacity key={city.id} onPress={() => navigation.navigate("Movies", { cityName: city.name })}>
            <View style={styles.card}>
              <Image source={{ uri: city.img }} style={styles.img} />
              <Text style={styles.name}>{city.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10, marginBottom: 20 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, marginBottom: 15, borderRadius: 15, elevation: 3 },
  img: { width: 60, height: 60, borderRadius: 10, marginRight: 15 },
  name: { fontSize: 18, fontWeight: '500' }
});
