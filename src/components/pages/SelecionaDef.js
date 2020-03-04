
import React from 'react';
import { 
    View, 
    StyleSheet, 
    StatusBar, 
    Image, 
    TouchableHighlight,
    ScrollView 
} from 'react-native';

const logoAbleMe = require('../../../images/logoAbleMe.png');
const OFdefFisico = require('../../../images/OFdefFisico.png');
const OFdefVisual = require('../../../images/OFdefVisual.png');
const OFdefAuditivo = require('../../../images/OFdefAuditivo.png');

export default class SelecionaDef extends React.Component {

  render() {
    return (
    	<ScrollView style = {{flex: 1}} >
	        <StatusBar 
	          //hidden = {true}
	          backgroundColor = '#CCC'
	        />

	        <View style = {estilos.logo} >
			    <Image source = {logoAbleMe} />
			</View>

		     <View style = {estilos.menu} >	

		     	<View style = {estilos.menuGrupo} >
		     		<TouchableHighlight
		     			underlayColor= {'#B9C941'}
		     			activeOpacity= { 0.3 }
		     			onPress = {() => {this.props.navigation.navigate('Listagem');}} >      
				    	<Image source = {OFdefFisico} style = {estilos.img} />
				    </TouchableHighlight>

		     		<TouchableHighlight
		     			underlayColor= {'#4B0082'}
		     			activeOpacity= { 0.3 }
		     			onPress = {() => {false}} >       
					    <Image source = {OFdefAuditivo} style = {estilos.img} />
				    </TouchableHighlight>
			    </View>

			    <View style = {estilos.menuGrupo} >

			    	<TouchableHighlight
		     			underlayColor= {'#EC7148'}
		     			activeOpacity= { 0.3 }
		     			onPress = {() => {false}} >       
				    	<Image source = {OFdefVisual} style = {estilos.img} />
				    </TouchableHighlight>

			    </View>
			</View>
        </ScrollView>
    );
  }
}

const estilos = StyleSheet.create({
	logo : {
		flex: 1,
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},

	menu : {
		flex: 2,
		paddingTop: 10,
		alignItems: 'center'
	},

	menuGrupo :{ 
		flex: 1,
		flexDirection: 'row'
	},

	img :{
		marginLeft: 10,
		marginRight: 10,
		width: 160,
		height: 150
	}
});
