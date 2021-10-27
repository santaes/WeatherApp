import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import Weather from './components/Weather';



const API_KEY = "API";


export default function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);


  async function fetchWeatherData(cityName) {
    setLoaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    try {
      const response = await fetch(API);
      if(response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
        console.warn('wrong city name');
        fetchWeatherData('Madrid');
        
      }
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchWeatherData('Madrid');
    console.log(weatherData);

  },[]);

  if(!loaded) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator color='#9d9d9d' size={50}/>
      </SafeAreaView>
    )
  }
  else if(weatherData === null ) {
    return (
    <View>

    </View>
    )
  }

  return (
    <View style={styles.container}>
      <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
