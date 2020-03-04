import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { thunk } from '../../APIservice/withThunk/thunk'
import CalculaMedia from './THUNK_CalculaMedia'

// const Item = (props) => {
//     const { onPressItem, id } = props
//     // exibindo para o usuário o nome do local e endereço em forma de lista
//     return(
//         <TouchableOpacity 
//             onPress = { () => onPressItem({id}) }
//         >
//             <View style = {styles.item} >
//                 <View style = {styles.detalhesItens}>
//                     <Text style = {styles.titulo}> {props.local.name} </Text>
//                     <Text style = {styles.infos}> {props.local.vicinity} </Text>
//                     {/* <CalculaMedia id = {props.local.place_id} /> */}
//                 </View>
//             </View>
//         </TouchableOpacity>
//     );
// }

class Item extends  React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getMedia(this.props.local.place_id)
    }

    render() {
        console.log('media: ', (this.props.media).toFixed(2))
        const { onPressItem, local } = this.props
        return(
            <TouchableOpacity 
            onPress = { () => onPressItem(local.id) }
        >
            <View style = {styles.item} >
                <View style = {styles.detalhesItens}>
                    <Text style = {styles.titulo}> {local.name} </Text>
                    <Text style = {styles.infos}> {local.vicinity} </Text>
                    {/* <CalculaMedia id = {props.local.place_id} /> */}
                </View>
            </View>
        </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        media: state.avaliacao.media,
    };
}  

const mapDispatchToProps = (dispatch) => {
    return {
        getMedia: (id) => dispatch(thunk.getMedia(id)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Item)


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
		//marginLeft: 20,
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

//export default Item;
