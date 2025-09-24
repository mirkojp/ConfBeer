import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialConferences } from '../data/conferences';
import styles from '../styles';

function HomeScreen({ navigation }) {
    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        const loadConferences = async () => {
            try {
                // Clear AsyncStorage to ensure new Spanish data is used (remove after first run)
                await AsyncStorage.clear();

                const storedConferences = await AsyncStorage.getItem('conferences');
                if (storedConferences) {
                    // Parse stored data and merge with initialConferences to restore image
                    const parsedConferences = JSON.parse(storedConferences);
                    const mergedConferences = parsedConferences.map((storedConf) => {
                        const matchingConf = initialConferences.find(
                            (initConf) => initConf.id === storedConf.id
                        );
                        return {
                            ...storedConf,
                            image: matchingConf?.image || require('../assets/beer1.jpg'),
                        };
                    });
                    setConferences(mergedConferences);
                } else {
                    // Store serializable fields only, excluding image
                    const conferencesToStore = initialConferences.map(({ image, ...conf }) => conf);
                    await AsyncStorage.setItem('conferences', JSON.stringify(conferencesToStore));
                    setConferences(initialConferences);
                }
            } catch (error) {
                console.error('Error loading conferences:', error);
            }
        };
        loadConferences();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { conference: item })}
        >
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.speaker}>Disertante: {item.speaker}</Text>
                <Text style={styles.time}>Horario: {item.start} - {item.end}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={conferences}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
            <TouchableOpacity
                style={styles.mapButton}
                onPress={() => navigation.navigate('Map', { conferences })}
            >
                <Text style={styles.mapButtonText}>Ver Mapa de Conferencias</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;