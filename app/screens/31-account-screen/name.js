import React from "react"
import {View,Text, Image} from 'react-native'
import styles from "./styles"
const name = (props) => {
    return (
        <View style={styles.nameBg}>
            <Image />
            <View>
            <Text style={styles.name}>{props.name}</Text>
            <Text>{props.email}</Text>
            </View>
            <View style={[styles.flexRow,styles.pointContainer]}>
                <View style={styles.borderRight}>
                    <Text style={styles.point}>{props.point}</Text>
                    <Text style={styles.subtext}>điểm</Text>
                </View>
                <View style={styles.borderRight}>
    <Text style={styles.point}>{props.reppoint}</Text>
    <Text style={styles.subtext}>Receipts</Text>
                </View>
                <View style={styles.borderRight}>
    <Text style={styles.point}>{props.creditpoint}</Text>
    <Text style={styles.subtext}>Tín dụng</Text>
                </View>
            </View>
        </View>
    )
}

export default name