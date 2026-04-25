import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, SafeAreaView } from 'react-native';
export default function CityList({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const cities = [{ id: '1', name: 'Chennai' }, { id: '2', name: 'Bangalore' }, { id: '3', name: 'Hyderabad' }, { id: '4', name: 'Coimbatore' }, { id: '5', name: 'Kochi' }];
  const filtered = cities.filter(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Select Your City</Text>
      <TextInput style={styles.searchInput} placeholder="Search city..." value={searchQuery} onChangeText={setSearchQuery} />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cityCard} onPress={() => navigation.navigate('Movies', { cityName: item.name })}>
            <Text style={styles.cityName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 50 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  searchInput: { backgroundColor: '#f0f0f0', padding: 15, borderRadius: 10, marginBottom: 20, fontSize: 16 },
  cityCard: { padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee', marginBottom: 10, borderRadius: 8, elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 1 } },
  cityName: { fontSize: 18, fontWeight: '500' }
});
