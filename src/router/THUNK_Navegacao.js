import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import List from '../components/pagesThunk/THUNK_List'
import DetalheDoLugar from '../components/pagesThunk/THUNK_DetalheLugar'

const appNavigator = createStackNavigator({
    'Main' : {
        screen: List

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
        title: 'Restaurantes',
        headerTitleStyle: {
            fontSize: 20,
            flexGrow: 1,
            textAlign: 'center'
        }
    }
});

const appContainer = createAppContainer(appNavigator);

export default appContainer;
