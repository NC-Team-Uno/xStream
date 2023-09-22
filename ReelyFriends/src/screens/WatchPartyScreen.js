import React from 'react';
import WatchPartyCard from '../components/WacthPartyCard';
import { View, Text, StyleSheet, Image, Button, Navigation, Modal, Pressable} from 'react-native';
import CreateWatchPartyModal from '../components/CreateWatchPartyModal';
import { useState } from 'react';


export default function WatchPartyScreen() {
    const [modalVisible, setModalVisible] = useState(false);

return (
    <>
    <View style={styles.container}>
        <Text style={styles.yourWatchParties}>Your Watch Parties</Text>
        <Modal 
        transparent={true}
        visable={modalVisible}
        onRequestClose={()=>{
            setModalVisible(!modalVisible)
        }}
        >
             {/* <Pressable onPress={()=> 
             setModalVisible(!modalVisible)}>
                <Text style={styles.text}>Exit</Text>
                </Pressable>

        <CreateWatchPartyModal /> */}
   
        </Modal>
<Pressable onPress={() => console.log('helloooo')}>
    <Text style={styles.text}>Show modal</Text>

</Pressable>
    
<WatchPartyCard />

</View>

</>
)
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#1E2030"
    },
    text: {

color: "#fff"
    },
    title: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 25,
        margin: 10,
    }, explanationBox: {
        backgroundColor: "#50515e",

    },
    explanationText: {
        color: "#fff",
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop:5,
        marginBottom: 5
    },
    yourWatchParties:{
        color: "#fff",
        margin:10,
        fontSize:17,
        fontWeight: "bold"
    }
})


