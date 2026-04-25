import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
export default function Timings({ route, navigation }) {
  const { cityName, movie } = route.params;
  const [date, setDate] = useState('10 May');
  const theaters = [
    { id: 1, name: "PVR Cinemas: VR Mall", format: "IMAX 2D", times: ["10:00 AM", "1:30 PM", "6:00 PM", "9:45 PM"] },
    { id: 2, name: "INOX: City Center", format: "Standard 2D", times: ["11:15 AM", "2:45 PM", "7:30 PM"] }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.backBtn}>{"< Back"}</Text></TouchableOpacity>
        <Text style={styles.title}>Showtimes</Text>
        <View style={{ width: 50 }} />
      </View>
      <ScrollView>
        <Image source={{ uri: movie.image }} style={styles.banner} resizeMode="cover" />
        <View style={styles.movieInfo}>
          <Text style={styles.mTitle}>{movie.name}</Text>
          <Text style={styles.mSub}>{movie.genre} • {movie.duration}</Text>
          <Text style={styles.mSub}>{cityName}</Text>
        </View>
        <Text style={styles.secTitle}>Select Date</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateBox}>
          {['10 May', '11 May', '12 May', '13 May'].map((d) => (
            <TouchableOpacity key={d} onPress={() => setDate(d)}>
              <View style={[styles.dateCard, date === d && styles.activeDate]}>
                <Text style={[styles.dText, date === d && styles.activeDText]}>{d}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.secTitle}>Theaters & Showtimes</Text>
        {theaters.map((t) => (
          <View key={t.id} style={styles.tCard}>
            <Text style={styles.tName}>{t.name}</Text>
            <Text style={styles.tFormat}>{t.format}</Text>
            <View style={styles.timeBox}>
              {t.times.map((time) => (
                <TouchableOpacity key={time} onPress={() => navigation.navigate("Seats", { cityName, movie, date, theater: t.name, time })}>
                  <View style={styles.timePill}><Text style={{ color: '#333' }}>{time}</Text></View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop: 30 },
  backBtn: { fontSize: 16, color: '#E50914' },
  title: { fontSize: 20, fontWeight: 'bold' },
  banner: { width: '100%', height: 250, borderRadius: 10, marginBottom: 15 },
  movieInfo: { alignItems: 'center', marginBottom: 25, paddingBottom: 20, borderBottomWidth: 1, borderColor: '#eee' },
  mTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 5, textAlign: 'center' },
  mSub: { fontSize: 14, color: '#666', marginBottom: 3, textAlign: 'center' },
  secTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  dateBox: { flexDirection: 'row', marginBottom: 25 },
  dateCard: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, backgroundColor: '#f0f0f0', marginRight: 10 },
  activeDate: { backgroundColor: '#E50914' },
  dText: { color: '#333', fontWeight: '500' },
  activeDText: { color: '#fff' },
  tCard: { marginBottom: 25, padding: 15, backgroundColor: '#f9f9f9', borderRadius: 10 },
  tName: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  tFormat: { fontSize: 12, color: '#666', marginBottom: 15 },
  timeBox: { flexDirection: 'row', flexWrap: 'wrap' },
  timePill: { paddingVertical: 8, paddingHorizontal: 15, borderRadius: 5, borderColor: '#ccc', borderWidth: 1, marginRight: 10, marginBottom: 10 }
});
