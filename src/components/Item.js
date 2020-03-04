import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

// import CalculaMedia from './CalculaMedia'

const Item = (props) => {
    const { onPressItem, id } = props
    // exibindo para o usuário o nome do local e endereço em forma de lista
    return(
        <TouchableOpacity 
            onPress = { () => onPressItem({id}) }
        >
            <View style = {styles.item} >
                <View style = {styles.detalhesItens}>
                    <Text style = {styles.titulo}> {props.local.name} </Text>
                    <Text style = {styles.infos}> {props.local.vicinity} </Text>
                    {/* <CalculaMedia id = { props.local.place_id }/> */}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    item : {
		backgroundColor: '#FFF',
		borderWidth: 0.5,
		borderColor: '#000',
		margin: 15,
		padding: 10,
		flexDirection: 'row'
    }, 
    
	detalhesItens : {
		padding: 5,
		paddingLeft: 20,
		flex: 3
	},

	titulo : {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 5,
    },
    
    infos : {
        margin: 5
    }
});

export default Item;
