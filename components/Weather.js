import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ImageBackground,Dimensions,StatusBar, SafeAreaView } from 'react-native';
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny} from '../assets/backgroundImages/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Weather = ({weatherData, fetchWeatherData}) => {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const {weather,name,main:{temp, humidity,pressure,},wind} = weatherData;
    const [{main}] = weather;
    

    useEffect(() => {
       setBackgroundImage(getBackgroundImg(main));
    }, [weatherData]);

    function getBackgroundImg(weather) {
        if(weather === 'Snow') return snow
        if(weather === 'Clear') return sunny
        if(weather === 'Rain') return rainy
        if(weather === 'Haze') return haze
        return haze;
    };

    



    return (
        <View style={styles.container}>
            <ImageBackground 
                source={backgroundImage}
                style={styles.bgimg}
                resizeMode='cover'            
            >
                <SearchBar fetchWeatherData={fetchWeatherData} />
                <View style={{alignItems:'center'}}>
                    <View style={{flexDirection:'row',marginTop:10,}}>
                    
                    <Text style={{...styles.headerText,  fontSize:36,marginTop:-10,marginHorizontal:50,}}>{name}</Text>
                    </View>
                    <View >
                    <Text style={{...styles.headerText, }}>{main}</Text>
                    </View>
                    <View style={{top:25}}>
                    <Text style={{...styles.headerText,  fontSize:36}}>{Math.round(temp)}°C</Text>
                    </View>
                    <View style={{top:200}}>
                    <Text style={styles.wind}>Humidity {humidity} %</Text>
                    </View >
                    <View style={{top:220}} >
                    <Text style={styles.wind}>Pressure {(pressure / 1013.25).toFixed(1)} atm</Text>
                    </View>
                    <View style={{top:250}}>
                    <Text style={styles.wind}>Wind Speed {Math.round(wind.speed * 3.6)} km/h</Text>
                    </View>
                </View>
                

            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    wind:{
        color:'#ffffff',
        fontSize:25,
        textShadowRadius:5,
        
        textShadowColor:'#00000099',
        shadowOpacity: 0,
        
    },
    bgimg:{
        flex:1,
        width: Dimensions.get('screen').width,
    },
    headerText:{
        fontSize: 36,
        marginTop:10,
        color:'#ffffff',
        textShadowRadius:5,
        
        textShadowColor:'#000000',
        shadowOpacity: 0,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Weather;
