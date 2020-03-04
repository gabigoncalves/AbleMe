import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import List from '../components/pages/List'
import DetalheDoLugar from '../components/pages/DetalheLugar'
import TelaDeLogin from '../components/pages/TelaDeLogin'
import SelecionaDef from '../components/pages/SelecionaDef'

const appNavigator = createStackNavigator({
    'Main' : {
        //screen: List
        screen: TelaDeLogin

    },

    'SelecionaDef' : {
        screen: SelecionaDef,
        navigationOptions: () => {
            return({
                title: '',
                headerTitleStyle: {
                    fontSize: 20,
                    flexGrow: 1
                }
            });
        }
    },

    'Listagem' : {
        screen: List,
        navigationOptions: () => {
            return({
                title: 'Restaurantes',
                headerTitleStyle: {
                    fontSize: 20,
                    flexGrow: 1
                }
            });
        }
    },

    'DetalheDoLugar' : {
        screen: DetalheDoLugar,
        navigationOptions: ( {navigation} ) => {
            const nomeLugar = navigation.state.params.name
            return({
                title: nomeLugar,
                headerTitleStyle: {
                    fontSize: 18,
                    flexGrow: 1
                }
            });
        }
    },

}, {
    defaultNavigationOptions: {
        title: 'Able.Me',
        headerTitleStyle: {
            fontSize: 20,
            flexGrow: 1,
            textAlign: 'center'
        }
    }
});

const appContainer = createAppContainer(appNavigator);

export default appContainer;
