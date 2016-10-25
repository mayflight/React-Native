import React,{Component} from 'React';
import {
	StyleSheet,
	Image,
	View,
	Text
} from 'react-native'

export default class UIImage extends Component {
	state = {
		url:require('../myResource/myimage.jpg'),
	}

	render() {
		return(
			<View>
				<Image source={this.state.url} style={styles.remote}>
					<Text  style={{color:'red',fontSize:25}}>背景图片</Text>
				</Image>
				<Image source={{uri: 'http://img5.imgtn.bdimg.com/it/u=244785874,2478049687&fm=21&gp=0.jpg'}} style={styles.remote}>
				</Image>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	remote:{
		width:100,
		height:100,
		justifyContent:'center'
	}
})			