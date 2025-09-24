# ConfBeer - Aplicación de Conferencias de Cerveza Artesanal

## Resumen
ConfBeer es una aplicación móvil desarrollada con React Native y Expo que muestra una lista de conferencias sobre cerveza artesanal en Concepción del Uruguay, Entre Ríos, Argentina. La aplicación permite:

- Ver una lista de 10 conferencias con títulos, descripciones, disertantes, horarios e imágenes únicas (`beer1.jpg` a `beer10.jpg`).
- Consultar detalles de cada conferencia, incluyendo un botón para ver su ubicación en un mapa.
- Visualizar todas las conferencias o una conferencia específica en un mapa centrado en Concepción del Uruguay, con marcadores para cada ubicación.
- Interfaz completamente en español, con datos almacenados en `AsyncStorage` para persistencia.


## Instalación
1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd ConfBeer
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   npx expo install @react-navigation/native @react-navigation/native-stack react-native-maps @react-native-async-storage/async-storage
   ```

3. **Configurar la clave de API de Google Maps**:
   - Obtén una clave de API de Google Maps desde la [Google Cloud Console](https://console.cloud.google.com/) y habilita Maps SDK para Android e iOS.
   - Abre `app.json` y reemplaza `YOUR_GOOGLE_MAPS_API_KEY` con tu clave en las secciones `ios.config.googleMapsApiKey` y `android.config.googleMaps.apiKey`.

4. **Iniciar el proyecto**:
   ```bash
   npx expo start --clear
   ```
5. **Ejecutar la aplicación**:
   - Escanea el código QR con la app Expo Go en tu dispositivo físico (Android/iOS).
   - Alternativamente, usa un emulador Android o simulador iOS presionando `a` o `i` en la terminal.

