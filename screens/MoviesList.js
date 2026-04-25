import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function MoviesList({ route, navigation }) {
  const [tab, setTab] = useState('All');
  const tabs = ['All', 'IMAX', 'Premiere', 'Indie'];
  
  const movies = [
    { id: 1, name: "Vaazha 2", genre: "Comedy", rating: "4.5", duration: "2h 10m", img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Vaazha_poster.jpg/220px-Vaazha_poster.jpg" },
    { id: 2, name: "Leo", genre: "Action", rating: "4.8", duration: "2h 44m", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Leo_Tamil_poster.jpg/220px-Leo_Tamil_poster.jpg" },
    { id: 3, name: "Jailer", genre: "Action", rating: "4.7", duration: "2h 48m", img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Jailer_2023_Tamil_film_poster.jpg/220px-Jailer_2023_Tamil_film_poster.jpg" }
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>{"< Back"}</Text></TouchableOpacity>
      <Text style={styles.title}>Movies in {route.params.cityName}</Text>
      
      <View style={styles.tabs}>
        {tabs.map(t => (
          <TouchableOpacity key={t} onPress={() => setTab(t)}>
            <Text style={[styles.tab, tab === t && styles.active]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView>
        {movies.map(m => (
          <TouchableOpacity key={m.id} onPress={() => navigation.navigate("Showtime", { cityName: route.params.cityName, movie: m })}>
            <View style={styles.card}>
              <Image source={{ uri: m.img }} style={styles.img} />
              <View style={{ marginLeft: 15, justifyContent: 'center' }}>
                <Text style={styles.mName}>{m.name}</Text>
                <Text style={styles.mSub}>{m.genre} • ⭐ {m.rating} • {m.duration}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 50 },
  back: { color: '#E50914', fontSize: 16, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  tabs: { flexDirection: 'row', marginBottom: 20 },
  tab: { padding: 8, paddingHorizontal: 15, backgroundColor: '#eee', borderRadius: 20, marginRight: 10 },
  active: { backgroundColor: '#E50914', color: '#fff' },
  card: { flexDirection: 'row', marginBottom: 20 },
  img: { width: 100, height: 140, borderRadius: 10 },
  mName: { fontSize: 18, fontWeight: 'bold' },
  mSub: { color: '#666', marginTop: 5 }
});
