import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Timings({ route, navigation }) {
  const { cityName, movie } = route.params;
  const [date, setDate] = useState('10 May');
  const theaters = [
    { id: 1, name: "PVR Cinemas", times: ["10:00 AM", "1:30 PM", "6:00 PM"] },
    { id: 2, name: "INOX", times: ["11:15 AM", "2:45 PM"] }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 50 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ color: '#E50914', fontSize: 16, marginBottom: 15 }}>{"< Back"}</Text></TouchableOpacity>
      <ScrollView>
        <Image source={{ uri: movie.img }} style={{ width: '100%', height: 250, borderRadius: 10, marginBottom: 10 }} />
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>{movie.name}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Select Date</Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          {['10 May', '11 May', '12 May'].map(d => (
            <TouchableOpacity key={d} onPress={() => setDate(d)}>
              <Text style={{ padding: 10, backgroundColor: date === d ? '#E50914' : '#eee', color: date === d ? '#fff' : '#000', borderRadius: 10, marginRight: 10 }}>{d}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Theaters</Text>
        {theaters.map(t => (
          <View key={t.id} style={{ padding: 15, backgroundColor: '#f9f9f9', borderRadius: 10, marginBottom: 15 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{t.name}</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {t.times.map(time => (
                <TouchableOpacity key={time} onPress={() => navigation.navigate("Seats", { cityName, movie, date, theater: t.name, time })}>
                  <Text style={{ padding: 8, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginRight: 10, marginBottom: 10 }}>{time}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
