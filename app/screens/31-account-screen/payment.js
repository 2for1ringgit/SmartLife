import React from 'react'
import {View,Text, Image} from 'react-native'
import styles from './styles'

const payment = (props) => {
    return (
        <View>
            <Image/>
            <View>
    <Text style={styles.cardName}>{props.cardtype}</Text>
    <Text style={styles.subtext}>{props.cardnumber}</Text>
            </View>
        </View>

    )
}
export default payment