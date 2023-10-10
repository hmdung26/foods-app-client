import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={require("../../../assets/images/Group.png")}
                    />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.textWelcome}>Welcome</Text>
                    <Text style={styles.textName}>Mr. Phi Long</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <Ionicons name='search' size={32} color={'white'} style={{marginRight:20}}/>
                <Ionicons name='notifications' size={32} color={'white'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#FF045F',
        paddingBottom:14,
        paddingLeft:24,
        paddingRight:24
    },
    image: {
        width: 30,
        height: 30,
    },
    imageView: {
        width: 45,
        height: 45,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginRight:20
    },
    textWelcome: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400'
    },
    textName: {
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: 22,
        fontWeight: 'bold'
    }
})