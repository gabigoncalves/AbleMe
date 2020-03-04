import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'

import { thunk } from '../../APIservice/withThunk/thunk'
import FotoDoLugar from './THUNK_FotoLugar';
import Avaliacao from './THUNK_Avaliacao';

class DetalheDoLugar extends React.Component {

    componentDidMount() {
        // chamando a action para listar um lugar específico selecionado
        this.props.listarLugar(this.props.navigation.state.params.id)
    }

    render() {
        const { icon, photos, opening_hours, formatted_address, formatted_phone_number } = this.props.localSelecionado
        return(
            <ScrollView style = {styles.container}>
                
                { /* incluindo a imagem do local ou o ícone, caso não tiver imagem */ }
                <View style = {{flex: 1, alignItems: 'center', paddingTop: 10}}>
                    { photos 
                        ? <FotoDoLugar reference={photos[0].photo_reference}/>  
                        : <Image style = {styles.imagem} source = {{uri: icon}} /> }
                </View>

                { /* informações do lugar */ }
                <View style = {styles.infos}>
                    <Text style={styles.infoLocal}>Informações do local</Text>
                    <Text style = {styles.txt}>Aberto: {opening_hours ? 'Sim' : 'Não'} </Text>
                    <Text style = {styles.txt}>Endereço: {formatted_address}</Text>
                    { formatted_phone_number 
                        ? <Text style = {styles.txt}>Telefone: {formatted_phone_number} </Text>
                        : null  
                    }
                </View>

                {/* infos sobre a avaliação do local */}
                <View>
                    <Avaliacao 
                        navigate = {this.props.navigation.navigate} 
                        infosDoLocal = {this.props.localSelecionado} 
                    />
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return { localSelecionado: state.locais.selected };
}

const mapDispatchToProps = (dispatch) => {
    return {
        listarLugar : place_id => dispatch(thunk.listarLugar(place_id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(DetalheDoLugar)


const styles = StyleSheet.create({

  container: {
	  flex: 1
  },
  
  txt: {
    fontSize: 14,
	padding: 5
  },

  infos: {
	  elevation: 3,
	  borderColor: '#c5c5c5',
	  margin: 20,
	  padding: 10,
	  flex: 1
  },

  infoLocal: {
	fontSize: 16, 
	padding: 10, 
	fontWeight: 'bold', 
	alignSelf: 'center'
  },

  imagem :{ 
    width: 120,
    height: 120
  }

})
