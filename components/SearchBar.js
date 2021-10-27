import React, {useState} from 'react';
import { View, TextInput,StyleSheet,Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const SearchBar = ({fetchWeatherData}) => {

    const [cityName, setCityName] = useState('');
    return (
        <View style={styles.searchBar}>
            <TextInput
             placeholder='Enter City name' 
             value={cityName}
             onChangeText={(text) => setCityName(text) }
             onSubmitEditing={() => fetchWeatherData(cityName)}
             placeholderTextColor="#565656"
            />
            <EvilIcons name="search" size={28} color="black" onPress={() => fetchWeatherData(cityName)} />
        </View>
    )
};

const styles = StyleSheet.create({
    searchBar:{
        marginTop:45,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        paddingVertical:10,
        borderRadius:25,
        marginHorizontal: 10,
        backgroundColor:'#e8e8e895',
        
        paddingHorizontal:10,

    },
});

export default SearchBar;
