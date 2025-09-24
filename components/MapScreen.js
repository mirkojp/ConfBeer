import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles';

function MapScreen({ route }) {
    const { conferences, singleConference } = route.params || { conferences: [], singleConference: null };
    const centerLat = -32.4833;
    const centerLng = -58.2333;
    const region = {
        latitude: singleConference ? singleConference.location.latitude : centerLat,
        longitude: singleConference ? singleConference.location.longitude : centerLng,
        latitudeDelta: 0.01, // Smaller delta for closer zoom when showing single marker
        longitudeDelta: 0.01,
    };

    // Use singleConference if provided, otherwise use all conferences
    const validConferences = singleConference
        ? [singleConference].filter(
            (conference) =>
                conference.location &&
                typeof conference.location.latitude === 'number' &&
                !isNaN(conference.location.latitude) &&
                typeof conference.location.longitude === 'number' &&
                !isNaN(conference.location.longitude)
        )
        : conferences.filter(
            (conference) =>
                conference.location &&
                typeof conference.location.latitude === 'number' &&
                !isNaN(conference.location.latitude) &&
                typeof conference.location.longitude === 'number' &&
                !isNaN(conference.location.longitude)
        );

    // Log for debugging
    console.log('Valid conferences for markers:', validConferences.length);
    if (validConferences.length === 0) {
        console.warn('No valid conferences with location data found.');
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={region} provider="google">
                {validConferences.map((conference) => (
                    <Marker
                        key={conference.id}
                        coordinate={{
                            latitude: conference.location.latitude,
                            longitude: conference.location.longitude,
                        }}
                        title={conference.title}
                        description={`${conference.speaker} - ${conference.start} - ${conference.end}`}
                    />
                ))}
            </MapView>
            <TouchableOpacity
                style={styles.mapButton}
                onPress={() => Linking.openURL('https://www.google.com/maps')}
            >
                <Text style={styles.mapButtonText}>Abrir en Google Maps</Text>
            </TouchableOpacity>
        </View>
    );
}

export default MapScreen;