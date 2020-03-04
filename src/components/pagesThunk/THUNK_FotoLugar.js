import React from 'react';
import { StyleSheet, Image } from 'react-native';

const GOOGLE_MAPS_APIKEY = 'AIzaSyC8FV5bh8VLBqDmbqRVpVtDNle8J7HudmU';

class FotoDoLugar extends React.Component {

    constructor(props) {
        super(props)    
    }

    /* OBS: não consegui colocar essa função como action, pois a url retorna uma imagem e não 
    uma string ou um vetor, por exemplo. desse modo, não soube como guardar o estado no reducer */

    //montando a url para pegar fotos do local
    getUrlWithParameters(photoReference, API) {
        const url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&";
        const photoreference = `photoreference=${photoReference}`;
        const key = `&key=${API}`;
        return `${url}${photoreference}${key}`;
	}

	render() {
        return(
            <Image 
                style = {styles.imagem} 
                source = {{uri: this.getUrlWithParameters(this.props.reference, GOOGLE_MAPS_APIKEY)}} 
            />
        );
    }
}    

export default FotoDoLugar

const styles = StyleSheet.create({
	imagem :{ 
		width: 150,
		height: 150
    }
});