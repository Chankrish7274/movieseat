import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function PickSeats({ route, navigation }) {
  const { cityName, movie, date, theater, time } = route.params;
  const [seats, setSeats] = useState([]);
  const booked = ['B3', 'C2'];

  function toggle(id) {
    if (!booked.includes(id)) {
      setSeats(seats.includes(id) ? seats.filter(s => s !== id) : [...seats, id]);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 50 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ color: '#E50914', fontSize: 16, marginBottom: 10 }}>{"< Back"}</Text></TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>{movie.name} - {time}</Text>
      
      <View style={{ backgroundColor: '#eee', padding: 10, alignItems: 'center', borderRadius: 20, marginBottom: 30 }}><Text style={{color: '#999'}}>SCREEN</Text></View>

      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        {['A', 'B', 'C', 'D'].map(r => (
          <View key={r} style={{flexDirection: 'row', marginBottom: 10}}>
            <Text style={{width: 25, marginTop: 10}}>{r}</Text>
            {[1, 2, 3, 4, 5].map(c => {
              const id = r + c;
              return (
                <TouchableOpacity key={id} onPress={() => toggle(id)}>
                  <View style={{ width: 40, height: 40, borderWidth: 1, borderColor: booked.includes(id) ? '#ccc' : seats.includes(id) ? '#E50914' : '#ccc', backgroundColor: booked.includes(id) ? '#ccc' : seats.includes(id) ? '#E50914' : '#fff', borderRadius: 8, margin: 5 }} />
                </TouchableOpacity>
              )
            })}
          </View>
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>₹{seats.length * 200}</Text>
        <TouchableOpacity style={{ backgroundColor: '#E50914', padding: 15, borderRadius: 25, paddingHorizontal: 30 }} onPress={() => {
          if(seats.length) navigation.navigate("Confirmation", { ...route.params, seats, total: seats.length * 200 });
        }}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
