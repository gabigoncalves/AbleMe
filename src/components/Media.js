import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'
import StarRating from 'react-native-star-rating'

const bom = require('../../images/caraFeliz.png');
const medio = require('../../images/caraMedio.png');
const ruim = require('../../images/caraTriste.png');

import { thunk } from '../../APIservice/withThunk/thunk'

class Media extends React.Component {

    constructor(props) {
        super(props)
    }

    // capturar o id recebido via props e passar para a action que lê as médias
    componentDidUpdate() {
        if(this.props.id) {
            this.props.readMedia(this.props.id)
        } 
    }

    render() {
        return(
            <View style = {styles.container}>

                <Text style={styles.avaliacao}>Classificação:</Text>

                {/* componente nativo de avaliação que informa a media através de estrelas */}
                <StarRating
                    disabled={true}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={this.props.media}
                    fullStarColor={'gold'}
                /> 

                {/* exibir a media ou mensagem informando que não existe media */}
                <View style={{flexDirection:'row', justifyContent: 'space-between'}} >
                    <Text style = {styles.media}> 
                        { this.props.media == 0 
                            ? 'Não há notas para este local ainda.' 
                            : (this.props.media).toFixed(2)
                        }
                    </Text>

                    {/* se não tiver nota registrada, não aparecer o número de classificações */}
                    { 
                        this.props.media != 0 
                            ? this.props.nroClassificacoes == 1
                                ? <Text style={styles.nroClassificacoes}>1 classificação </Text>
                                : <Text style={styles.nroClassificacoes}>{this.props.nroClassificacoes} classificações </Text>
                            : null
                    }
                    
                </View>

                {/* introduzir a carinha feliz, media ou triste dependendo da média total */}
                { this.props.media != 0
                    // para media >= 4 ---> carinha feliz
                    ? this.props.media >= 4 
                        ? <Image source = {bom} style = {styles.carinha} />

                        // para media entre 3 e 4 ---> carinha media
                        : (this.props.media >= 3 && this.props.media < 4)
                            ? <Image source = {medio} style = {styles.carinha} />

                            // para media entre 0 e 3 ---> carinha triste
                            : (this.props.media > 0 && this.props.media < 3.0)
                                ? <Image source = {ruim} style = {styles.carinha} />
                                : null
                : null }			
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        media: state.avaliacao.media,
        nroClassificacoes: state.avaliacao.nroClassificacoes
    };
}  

const mapDispatchToProps = (dispatch) => {
    return {
        readMedia: (id) => dispatch(thunk.readMedia(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Media)

const styles = StyleSheet.create({

    container : {
        elevation: 2,
        borderColor: '#c5c5c5',
        borderRadius: 10, 
        margin: 20,
        padding: 10,
        flex: 1
    },

    media : {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },

    avaliacao: {
        fontSize: 16, 
        padding: 10, 
        fontWeight: 'bold', 
        alignSelf: 'center'
      }, 

    nroClassificacoes : {
        fontSize: 12, 
        marginTop: 20
    },

    carinha: {
		height: 80,
		width: 80,
		alignSelf:'center'
	}
})