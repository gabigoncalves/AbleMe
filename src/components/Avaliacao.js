import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import StarRating from 'react-native-star-rating'

import { thunk } from '../../APIservice/withThunk/thunk'
import { actions } from '../../APIservice/withThunk/actions';
import Media from './Media'

const thankYou = require('../../images/thanks.jpg')

class Avaliacao extends React.Component {

    constructor(props) {
        super(props)
        this.state = { starCount: 0.0, modalVisible: false }
    }

    // função para criar ou atualizar a média do local
    onEnviarNota = () => {
        const { nota, infosDoLocal } = this.props
        if(nota != 0) {
            this.props.createAndUpdate(
                { 
                    local: infosDoLocal.name, 
                    place_id: infosDoLocal.place_id, 
                    nota
                }, infosDoLocal.place_id
            )
            this.abrirModal(true)
        }
    }

    // função para pegar o número da estrela correspondente para ser a nota do usuário
    onStarRatingPress(rating) {
        this.setState({ starCount: rating });
        this.props.enviarNotaLugar(rating)
    }

    // abrir o modal de agradecimento
    abrirModal(visible) {
        this.setState({ modalVisible: visible });
    }

    // fechar o modal de agradecimento e voltar para a tela de listagem
    fecharModal() {
        this.abrirModal(!this.state.modalVisible); 
        this.props.navigate('Main')
    }

    render() {
        const { place_id } = this.props.infosDoLocal

        return(
            <View>
                <View style = {styles.notaUsuario} >
                    <Text style={styles.avaliacao}>Avaliação: </Text>   

                    {/* componente nativo para exibir as estrelas */}
                    <View>
                        <StarRating
                        disabled={false}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        fullStarColor={'gold'}
                        /> 
                        <Text style = {styles.nota}>Sua avaliação: {this.state.starCount} </Text>
                    </View>

                    {/* botão de enviar a nota */}
                    <TouchableOpacity
                        onPress = { this.onEnviarNota } 
                        style = {styles.botao}
                    >
                        <Text style = {styles.txtBotao}> Enviar </Text>

                    </TouchableOpacity>

                </View>

                {/* passar o place_id para o componente que calcula a média do local */}
                <View>                
                    <Media id={place_id} />
                </View>

                {/* modal de agradecimento que será exibido quando o usuário enviar a nota */}
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { Alert.alert('Modal has been closed.'); }}
                >

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.obg} >OBRIGADO!</Text>
                        <Text style={styles.txt}>A sua avaliação é muito importante para nós.</Text>
                        <Image source={thankYou} style={{height: 180, width:180}}/>
                    </View>

                    <TouchableOpacity
                        onPress = { () => {this.fecharModal()}} 
                        style = {styles.botao}
                    >
                        <Text style = {styles.txtBotao}> Fechar </Text>
                    </TouchableOpacity>              

                </Modal>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { nota: state.avaliacao.nota };
}  

const mapDispatchToProps = (dispatch) => {
    return {    
        createAndUpdate: (body, id) => dispatch(thunk.createAndUpdate(body, id)),
        enviarNotaLugar: bindActionCreators(actions.enviarNotaLugar, dispatch)
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Avaliacao)

const styles = StyleSheet.create({

    avaliacao: {
      fontSize: 16, 
      padding: 10, 
      fontWeight: 'bold', 
      alignSelf: 'center'
    }, 

    nota: {
        fontSize: 14,
        padding: 5,
        marginTop: 5,
        marginBottom:5
    },

    botao : {
        borderWidth: 2,
        borderRadius: 10,
        height: 40,
        width: 120,
        alignSelf: 'center',
        elevation: 2,
        marginTop: 5
    },

    txtBotao : {
        alignSelf: 'center',
        paddingTop: 5
    },

    notaUsuario : {
        elevation: 2,
        borderColor: '#c5c5c5',
        borderRadius: 10, 
        margin: 20,
        padding: 10,
        flex: 1
      },

    obg : {
        fontSize: 30,
        padding: 50, 
        fontWeight: 'bold', 
    },

    txt :{
        fontSize: 18,
        paddingBottom: 20, 
        textAlign: 'center'
    }

  })
  