import React,{Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native'

export default class UITouchAble extends Component {
	state = {
		text:'您还没有点击',
		show:'未开始',
		hide:'未开始',
		long:'未开始'
	}
	render() {
		return (
			<View>
				<TouchableHighlight 
					style={styles.highlight} 
					underlayColor='burlywood' 
					onPress={() => this.setState({text:'highlight 你点击了:onPress'})}
					onShowUnderlay={() => this.setState({show:'底层显示了'})}
					onHideUnderlay={() => this.setState({hide:'底层隐藏了'})}
					onLongPress={() => this.setState({long:'你长按了'})}
					activeOpacity={0.8}
					>
					<Text>高亮按钮</Text>
				</TouchableHighlight>
				<TouchableOpacity 
					style={[styles.highlight,styles.opacity]}
					onPress={() => this.setState({text:'opacity 你点击了:onPress'})}
					delayPressIn={200}
					onPressIn={() => this.setState({long:'200ms delay'})}
					activeOpacity={0.1}
					hitSlop={{top: 0, bottom: 30, left: 60, right: 60}}
					>
					<Text>按钮透明</Text>
				</TouchableOpacity>
				<Text style={styles.text}>{this.state.text}</Text>
				<Text style={styles.text}>{this.state.show}</Text>
				<Text style={styles.text}>{this.state.hide}</Text>
				<Text style={styles.text}>{this.state.long}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create ({
	highlight:{
		height:50,
		borderWidth:2,
		borderColor:'red',
		borderRadius:5,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'aqua'
	},
	opacity:{
		marginTop:10,
		marginBottom:10,
		backgroundColor:'coral',
		backgroundColor:'cornsilk'
	},
	text:{
		height:50,
		color:'green',
		fontSize:20
	}
})