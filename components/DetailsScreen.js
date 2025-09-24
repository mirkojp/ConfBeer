import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

function DetailsScreen({ route, navigation }) {
    const { conference } = route.params;

    return (
        <View style={styles.container}>
            <Image source={conference.image} style={styles.detailImage} />
            <Text style={styles.detailTitle}>{conference.title}</Text>
            <Text style={styles.detailText}>Disertante: {conference.speaker}</Text>
            <Text style={styles.detailText}>Horario: {conference.start} - {conference.end}</Text>
            <Text style={styles.detailText}>{conference.description}</Text>
            <TouchableOpacity
                style={styles.mapButton}
                onPress={() => navigation.navigate('Map', { singleConference: conference })}
            >
                <Text style={styles.mapButtonText}>Ver Ubicación de la Conferencia</Text>
            </TouchableOpacity>
        </View>
    );
}

export default DetailsScreen;