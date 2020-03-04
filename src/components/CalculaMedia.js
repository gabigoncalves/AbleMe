import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux'

import { thunk } from '../../APIservice/withThunk/thunk'


class CalculaMedia extends React.Component {

    componentDidUpdate() {
        if(this.props.id) {
            // this.props.readMedia(this.props.id)
            this.props.readMedia('ChIJmYjhw0J_mQARNUTkMA79HVk')
        } 
    }

    render() {
        return(
            <Text style = {{margin: 5}}> 
                {/* { this.props.media == 0 
                    ? 'Não há notas para este local ainda.' 
                    : (this.props.media).toFixed(2)
                } */}

                {
                    this.props.media != 0
                        ? (this.props.media).toFixed(2)
                        : null
                }

            </Text>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        media: state.avaliacao.media
    };
}  

const mapDispatchToProps = (dispatch) => {
    return {
        readMedia: (id) => dispatch(thunk.readMedia(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculaMedia)