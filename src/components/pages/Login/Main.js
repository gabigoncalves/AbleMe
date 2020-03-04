import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Stylesheet, StatusBar, Container, Input, Button} from 'react-native'
import { connect } from 'react-redux'

import { thunk } from '../../../APIservice/withThunk/thunk'
import { actions } from '../../../APIservice/withThunk/actions';

class Main extends React.Component {

    constructor() {
        this.state = { email: '', senha: '', estaLogado: false }
    }

    render() {
        return(
            <View>
                <Text> Esta é a tela de login </Text>

            <Container>
                <StatusBar hidden />
                <Input
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    placeholder="Endereço de e-mail"
                    value={this.state.email}
                    onChangeText={}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Input
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    placeholder="Senha"
                    value={this.state.senha}
                    onChangeText={}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                />
                
                {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
                <Button onPress={ () => {false}}>
                    <ButtonText>Entrar</ButtonText>
                </Button>
                {/* <SignUpLink onPress={this.handleCreateAccountPress}>
                    <SignUpLinkText>Criar conta grátis</SignUpLinkText>
                </SignUpLink> */}
            </Container>
        </View>
        );
    }
}

export default Main;