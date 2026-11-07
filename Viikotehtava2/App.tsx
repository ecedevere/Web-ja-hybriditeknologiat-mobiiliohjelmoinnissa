import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    // pääikkuna
    <View style={styles.container}>
      {/* meidän ns oma painike */}
      <Pressable onPress={() => setModalVisible(true)}>
        <Text style={styles.pressable}>Show modal message</Text>
      </Pressable>
      {/* ikkuna joka aukea,kun painetaan painiketta. Se on näytön päällä */}
      <Modal
        visible={modalVisible}
        // tästä ei kerrottu tehtäväannossa, joten valitsen slide-tyypin
        animationType="slide"
        transparent={false}
        // androidin "takaisin"-painike sulkee ikkunan
        onRequestClose={() => setModalVisible(false)}>
        {/* luodaan alue, johon sijoitetaan modal */}
        <View style={styles.centered}>
          {/* vain modal ikkuna */}
          <View style={styles.modal}>
            <Text style={styles.modalText}>This is modal...</Text>
            {/* close-painike */}
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.button}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // koko näyttö käytössä
    flex: 1,
    backgroundColor: '#fff',
    // elementit keskelle näytölle -> ensimmäinen pressable
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressable: {
    fontSize: 20,
    // lisätään enemmän aluetta painallukseen
    padding: 20,
  },
  centered: {
    // otetaan 60% näytöstä ylhäältä ja ...
    flex: 0.6,
    // ... sijoitetaan sisältö keskelle
    justifyContent: 'center',
    // backgroundColor: 'lightblue', <- näkyvyys alueen hahmottamiseen
  },
  modal: {
    width: '100%',
    height: 200,
    // sisällön välissä on tyhjää tilaa
    justifyContent: 'space-between',
    // elementit keskellä vaakasuunnassa
    alignItems: 'center',
    backgroundColor: '#72727209',
    padding: 40,
    shadowColor: '#00000063',
    // varjo
    // androidille tarkoitettu ominaisuus, miten suurempi numero, sitä voimakkaampi varjo
    elevation: 4,
    // iphonen vastaavat asetukset:
    // shadowOpacity: 0.3,
    // shadowRadius: 6,
    // shadowOffset: {
    //  width: 0,
    //  alas enemmän
    //  height: 6,
    // },
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalText: {
    fontSize: 20,
  }
});
