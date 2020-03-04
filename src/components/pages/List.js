import React from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { thunk } from '../../APIservice/withThunk/thunk'
import Item from '../Item'

import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: 'always'
});

class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = { lat: 0, long: 0 }
    }

    componentDidMount() {
        // pegando a localização precisa do celular 
        Geolocation.getCurrentPosition(position => {
            this.setState({ lat: position.coords.latitude, long: position.coords.longitude });
            
            // chamando a action de listar os lugares próximos de onde o usuário está
            const { lat, long } = this.state
            this.props.listarLugares(lat, long)
        }, (err) => {
            console.log("Deu erro: ", err);
        });
    }

    render() {
        const { locais } = this.props
        // listando os locais e passando cada um para o componente Item através da props
        const listagemLocais = locais.map((local) => {
            return (
                <Item 
                    local={local} 
                    key={local.place_id} 
                    onPressItem = {() => this.props.navigation.navigate('DetalheDoLugar', {name: local.name, id: local.place_id})}
                />
           )
        })

        return(
            <ScrollView>
                {listagemLocais}
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return { locais: state.locais.all };
}

const mapDispatchToProps = (dispatch) => {
    return {
        listarLugares : (lat, long) => dispatch(thunk.listarLugares(lat, long))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
