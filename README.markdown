# ConfBeer - Aplicación de Conferencias de Cerveza Artesanal

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

