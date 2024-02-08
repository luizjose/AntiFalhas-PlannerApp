import { View, Button, Alert, NativeModules } from 'react-native';
import * as Device from 'expo-device';

export default function ShutDown() {
  const desligarDispositivo = () => {
    if (Device.brand === 'motorola') {
      NativeModules.// Desligar o dispositivo (pode não funcionar em todos os dispositivos)
    } else {
      Alert.alert('Ação não suportada', 'Esta funcionalidade não é suportada neste dispositivo.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Desligar Dispositivo" onPress={desligarDispositivo} />
    </View>
  );
}
